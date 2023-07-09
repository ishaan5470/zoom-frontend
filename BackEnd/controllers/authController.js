const otpGenerator = require("otp-generator");
const fast2sms = require("fast-two-sms");
const jwt = require("jsonwebtoken");
const { promisify } = require('util');
const bcrypt = require("bcrypt");
const multer = require("multer");
const QRCode = require("qrcode");

// models
const users = require("../models/users");
const otpschema = require("../models/otpSchmea");
const Company = require("../models/Company");
const UserProfile = require('../models/userprofile');
const { decode } = require("punycode");

//************************otp login code */******************* */

async function Otpsend(generatedOtp, phoneNumber) {
  console.log(generatedOtp, phoneNumber);
  var options = {
    authorization: process.env.smsApi,
    message: `Your otp verification for ZealYug is  ${generatedOtp} don't share it with anyone`,
    numbers: [phoneNumber],
  };
  const response = await fast2sms.sendMessage(options);
  console.log(response);
  return response;
}

// Sign token
const signToken = id => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// Create token
const createSendToken = (user, statusCode, res) => {
  // user -> _id -> token
  // phone,pass
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success token sent',
    token,
    data: {
      user
    }
  });
};

//we recive the phone no here and send otp to mobile number
exports.sendOTP = async (req, res) => {
  // console.log(req.body)
  //checking user is existed in users
  const isUser = await users.findOne({ phoneNumber: req.body.phoneNumber });
  //if user already exist
  if (isUser) {
    return res.status(400).json({
      status: "error",
      message: "user is already registered",
    });
  } else {
    //if phonenumber alerady exist he has to enter the otp that has already send to the user
    const isuserInOtp = await otpschema.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    if (isuserInOtp) {
      res.status(400).json({
        status: "sucess",
        message: "otp aleady sent to the mobile",
      });
    }
    //if phone numberdoesn't exist
    else {
      const generatedOtp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      Otpsend(generatedOtp, req.body.phoneNumber);
      // console.log(generatedOtp)
      bcrypt.hash(generatedOtp, 10, async function (err, hash) {
        // Store hash in your password DB.
        if (err) {
          res.status(400).json({
            status: "error",
            message: err,
          });
        } else {
          // console.log(req.body);
          await otpschema.create({
            phoneNumber: req.body.phoneNumber,
            otp: hash,
          });
          // console.log("inside 2try");
          res.status(200).json({
            status: "sucess",
            message: "otp send to data base",
          });
        }
      });
    }
  }
};

//we receive the otp along with the phone number and verify the otp
exports.checkOTP = async (req, res) => {
  try {
    // console.log(req.body);

    const userdata = await otpschema.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    // console.log(userdata);
    if (userdata) {
      bcrypt.compare(req.body.otp, userdata.otp, async function (err, result) {
        // result == true
        if (err) {
          res.status(400).json({
            status: "error",
            message: err,
          });
        } else {
          if (result) {
            await users.create({ phoneNumber: req.body.phoneNumber });
            const data = await users.findOne({
              phoneNumber: req.body.phoneNumber,
            });
            // const token = jwt.sign(
            //   {
            //     data: data._id,
            //   },
            //   secret,
            //   { expiresIn: 60 * 60 }
            // );
            // res.status(200).json({
            //   status: "sucess",
            //   message: "user is autenticated",
            //   token,
            // });
            createSendToken(data,200,res)
          } else {
            res.status(400).json({
              status: "error",
              message: "Otp doesnt't match",
            });
          }
        }
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: "otp expired",
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};


exports.setPassword = async (req, res) => {
  try {
    let token;
    if(req.headers.authorization){
      token = req.headers.authorization
    }
    else if(req.cookies.jwt){
      token = req.cookies.jwt
    }
    console.log('token is', token)
    //check the token then proceed
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async function (err, decoded) {
      // console.log(decoded); // bar
      if (err) {
        return res.status(400).json({
          staus: "error",
          message: err,
        });
      } else {
        //token is decoded if user is present in database in users
        const isUser = await users.findOne({ _id: decoded.id });
        // console.log(isUser, 'is user')
        if (isUser && isUser.phoneNumber == req.body.phoneNumber) {
          await users.updateOne(
            { _id: decoded.id },
            { password: req.body.password }
          );
          // create userprofile also for this user
          await UserProfile.create({
            userid: decoded.id,
            phoneNumber: req.body.phoneNumber
          })
          res.status(200).json({
            status: "sucess",
            message: "user data created",
          });
        } else {
          res.status(400).json({
            status: "error",
            message: "user details not found",
          });
        }
      }
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      message: e.message,
    });
  }
};

exports.forgotPassword = async (req, res) => {
  // console.log(req.body)
  //checking user is existed in users
  const isUser = await users.findOne({ phoneNumber: req.body.phoneNumber });
  //if user already exist then he can reset
  if (!isUser) {
    return res.status(400).json({
      status: "error",
      message: "user is not registered",
    });
  } else {
    //if phonenumber alerady exist he has to enter the otp that has already send to the user
    const isuserInOtp = await otpschema.findOne({
      phoneNumber: req.body.phoneNumber,
    });

    if (isuserInOtp) {
      res.status(400).json({
        status: "sucess",
        message: "otp aleady sent to the mobile",
      });
    }
    //if phone numberdoesn't exist
    else {
      const generatedOtp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      Otpsend(generatedOtp, req.body.phoneNumber);
      bcrypt.hash(generatedOtp, 10, async function (err, hash) {
        // Store hash in your password DB.
        if (err) {
          res.status(400).json({
            status: "error",
            message: err,
          });
        } else {
          console.log(req.body);
          await otpschema.create({
            phoneNumber: req.body.phoneNumber,
            otp: hash,
          });
          console.log("inside 2try");
          res.status(200).json({
            status: "sucess",
            message: "otp send to data base",
          });
        }
      });
    }
  }
};

exports.logout = async (req, res) => {
  try{
    res.cookie('jwt', 'loggedout', {
      expires: new Date(Date.now() + 10 *  1000),
      httpOnly: true
    })
    res.status(200).json({
      status: 'success'
    })
  }catch(err){
    console.log(err)
  }
}

//************************upload pictures *************//

exports.login = async (req, res) => {
  try {
    const finduser = await users.findOne({ phoneNumber: req.body.phoneNumber });
    // console.log(finduser, req.body.password)
    if (finduser == null) {
      res.status(400).json({
        status: "error",
        message: "user is not registered",
      });
    } else {
      if(finduser.password === req.body.password){
          createSendToken(finduser,200,res)
        } else {
          res.status(400).json({
            status: "error",
            message: "password doesnt't match",
          });
        }
      }
    }
   catch (e) {
    return res.status(400).json({
      status: "error",
      message: e.message,
    });
  }
};


//companies login and register
exports.recruitRegister = async (req, res) => {
  try {
    const finduser = await Company.findOne({ email: req.body.email });
    //checking user is existed or not
    if (finduser == null) {
      try {
        bcrypt.hash(req.body.password, 10, async function (err, hash) {
          // Store hash in your password DB.
          if (err) {
            res.status(400).json({
              status: "error",
              message: err,
            });
          } else {
            console.log(req.body);
            await users.create({ email: req.body.email, password: hash });
            console.log("inside 2try");
            res.status(200).json({
              status: "sucess",
              message: "user data created",
            });
          }
        });
      } catch (e) {
        // console.log("hii");
        res.status(400).json({
          status: "error",
          message: e.message,
        });
      }
    } else {
      res.status(400).json({
        status: "error",
        message: "Comapany already registered",
      });
    }
  } catch (e) {
    res.status(400).json({
      status: "error",
      message: e.message,
    });
  }
};

// route.post("/login", async (req, res) => {
//   try {
//   console.log("heyy. ", req.body)
//     const finduser = await Comapany.findOne({ email: req.body.email });
//     if (finduser == null) {
//       res.status(400).json({
//         status: "error",
//         message: "user is not registered",
//       });
//     } else {
//       bcrypt.compare(
//         req.body.password,
//         finduser.password,
//         async function (err, result) {
//           // result == true
//           if (err) {
//             res.status(400).json({
//               status: "error",
//               message: err,
//             });
//           } else {
//             if (result) {
//               const data = await recruiters.findOne({ email: req.body.email });
//               //tokens generated

//               console.log(process.env.ACCESS_TOKEN_SECRET, "fdsjafklsdaj")

//               const token = jwt.sign(
//                 {
//                   data: data._id,
//                 },
//                 process.env.ACCESS_TOKEN_SECRET,
//                 { expiresIn: 60 * 60 }
//               );

//               console.log(token)
//               //console.log(token)
//               res.status(200).json({
//                 status: "sucess",
//                 message: "user is autenticated",
//                 token,
//               });
//             } else {
//               res.status(400).json({
//                 status: "error",
//                 message: "password doesnt't match",
//               });
//             }
//           }
//         }
//       );
//     }
//   } catch (e) {
//     return res.status(400).json({
//       status: "error",
//       message: e.message,
//     });
//   }
// });
//********************************************//

exports.protect = async (req, res, next) => {
  try{
    // 1) Getting token and check of it's there
    let token;
    if (
      req.headers.authorization
    ) {
      token = req.headers.authorization;
    } else if(req.cookies.jwt){ // check if token is stored in cookie
      token = req.cookies.jwt
    }

    if (!token) {
      throw new Error("You are not logged in! Please log in to get access.");
    }
    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN_SECRET);

    // 3) Check if user still exists
    const currentUser = await users.findById(decoded.id);
    if (!currentUser) {
      throw new Error("User does not exist, Please Signup and continue.");
    }

    // removing password from currentuser
    currentUser.password = undefined

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    res.locals.user = currentUser
    
    next();

  }catch(err){
    res.status(401).json({
      status: "fail",
      message: "You are not logged in! Please log in to get access."
    })
  }
};