const jwt = require("jsonwebtoken");
const User = require("../model/users");
const bcrypt = require('bcrypt');
const {SendOtpMessage} = require("./OtpManage")
const otpGenerator = require("otp-generator");

const loginControler = (req,res)=>{
    const userName = req.body.userName;
    const password = req.body.password;

    User.findOne({userName:userName})
    .then((user)=>{
        bcrypt.compare(password,user.password)
        .then((result)=>{
            let refreshToken = jwt.sign({userName:userName},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1h'})
            let accessToken = jwt.sign({userName:userName},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'2m'})
            console.log(user);
            console.log(result);
            res.cookie("token",refreshToken,{ httpOnly: true, secure: true, maxAge: 21600000 });
            res.send({user,token:accessToken});
        })
        .catch(err=>{
            res.send("Inavalid Credentials")
            console.log(err); 
        })
    })
    .catch(()=>{
        res.send("Inavalid Credentials")
    })

}

const forgotPasswordPhoneNumber = async(req,res)=>{
    const phoneNumber = req.body.phoneNumber;
    try{
    const user = await User.findOne({phoneNumber:phoneNumber})
    if(user){
        const generatedOtp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          specialChars: false,
          lowerCaseAlphabets: false,
        });
        SendOtpMessage(generatedOtp,phoneNumber)
        console.log("Sms sent");
        console.log(generatedOtp,"Otp generated succesfully");
        bcrypt.hash(generatedOtp, 10, async function (err, hash) {
          // Store hash in your password DB.
          if (err) {
            res.status(400).json({
              status: "error",
              message: err,
            });
          } else {
            const hashString = hash.toString();
            const userData = await user.updateOne({phoneNumber:phoneNumber},{phoneOtp:hashString})
            let token=jwt.sign({ phoneNumber:req.body.phoneNumber }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3m' })
            res.cookie(`token`,`${token}`)
            res.status(200).json({
              status: "sucess",
              message: "otp send to data base",
              token
            });
          }
        })
    }
    }
    catch(err){
        console.log(err);
    }

}

// const getAllUser = (req,res)=>{
//     User.find()
//     .then((user)=>{
//         console.log(user);
//         res.send(JSON.stringify(user[0])); 
//     })
// }



module.exports={
    loginControler,
    forgotPasswordPhoneNumber
}