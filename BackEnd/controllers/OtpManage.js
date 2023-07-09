const otpGenerator = require("otp-generator");
const fast2sms = require("fast-two-sms");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const user = require("../models/users");



//takes input the generared otp and phone number and sends the message to the user to the given phone number
async function SendOtpMessage(generatedOtp, phoneNumber) {
  console.log(generatedOtp, phoneNumber);
  var options = {
    authorization: process.env.smsApi,
    message: `Your otp verification for ZealYug is  ${generatedOtp} don't share it with anyone`,
    numbers: [phoneNumber],
  };
  const response = await fast2sms.sendMessage(options);
  console.log(response, "Sms sent Successfully");
}


//we recive the phone no here and send otp to mobile number
//uses above otpSend function to send otp to the user, takes input phoneNumber from user and checks if present in DB
const sendOTPContoler = async (req, res) => {
  console.log(req.body, "input got Successfully");
  const isUser = await user.findOne({ phoneNumber: req.body.phoneNumber });
  //if user already exist
  if (isUser?.is_verified_phone) {
    return res.status(400).json({
      status: "error",
      message: "user is already registered",
    });
  } else {
    if (isUser) {
      const generatedOtp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      SendOtpMessage(generatedOtp, req.body.phoneNumber)
      console.log("Sms sent");
      console.log(generatedOtp, "Otp generated succesfully");
      bcrypt.hash(generatedOtp, 10, async function (err, hash) {
        // Store hash in your password DB.
        if (err) {
          res.status(400).json({
            status: "error",
            message: err,
          });
        } else {
          const hashString = hash.toString();
          const userData = await user.updateOne({ phoneNumber: req.body.phoneNumber }, { phoneOtp: hashString })
          let token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3m' })
          res.cookie(`token`, `${token}`)
          res.status(200).json({
            status: "sucess",
            message: "otp send to data base",
            token
          });
        }
      });

    }
    else {
      const generatedOtp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      SendOtpMessage(generatedOtp, req.body.phoneNumber)
      console.log("Sms sent");
      console.log(generatedOtp, "Otp generated succesfully");
      bcrypt.hash(generatedOtp, 10, async function (err, hash) {
        // Store hash in your password DB.
        if (err) {
          res.status(400).json({
            status: "error",
            message: err,
          });
        } else {
          const hashString = hash.toString();
          const User = new user({
            phoneNumber: req.body.phoneNumber,
            phoneOtp: hashString
          })

          const userData = await User.save();
          let token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3m' })
          res.cookie(`token`, `${token}`)
          res.status(200).json({
            status: "sucess",
            message: "otp send to data base",
            token
          });
        }
      });
    }
  }
  //   }
};

//we receive the otp along with the phone number and verify the otp
const checkOTPControler = async (req, res) => {
  try {
    // console.log(req.body);

    const userdata = await user.findOne({
      phoneNumber: req.body.phoneNumber,
    });
    // console.log(userdata);
    if (userdata) {
      bcrypt.compare(req.body.otp, userdata.phoneOtp, async function (err, result) {
        // result == true
        if (err) {
          res.status(400).json({
            status: "error",
            message: err,
          });
        } else {
          if (result) {
            const updatedInfo = await user.updateOne({ phoneNumber: req.body.phoneNumber }, { $set: { is_verified_phone: true, phoneOtp: "" } })
            res.status(200).send(updatedInfo);
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

const resendOTPControler = async (req, res) => {
  console.log(req.body, "input got Successfully resendOTP");

  const generatedOtp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  SendOtpMessage(generatedOtp, req.body.phoneNumber)
  console.log("Sms sent");
  console.log(generatedOtp, "Otp generated succesfully");
  bcrypt.hash(generatedOtp, 10, async function (err, hash) {
    // Store hash in your password DB.
    if (err) {
      res.status(400).json({
        status: "error",
        message: err,
      });
    } else {
      const hashString = hash.toString();
      const updatedInfo = await user.updateOne({ phoneNumber: req.body.phoneNumber }, { $set: { phoneOtp: hashString } })
      console.log(updatedInfo);
    }
  })
}

const deleteIncompleteSignup = async (req, res) => {
  console.log(req.body, "input got successfully delete request");
  await user.deleteOne({ phoneNumber: req.body.phoneNumber })
  res.status(200).send("Incomplete User Deleted Successfully");
}

module.exports = {
  checkOTPControler,
  sendOTPContoler,
  resendOTPControler,
  deleteIncompleteSignup,
  SendOtpMessage
}