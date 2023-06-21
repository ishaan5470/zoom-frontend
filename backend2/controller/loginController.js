const jwt = require("jsonwebtoken");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const { SendOtpMessage } = require("./OtpManage");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

const loginControler = (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  User.findOne({ userName: userName })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then((result) => {
          let refreshToken = jwt.sign(
            { userName: userName },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1h" }
          );
          let accessToken = jwt.sign(
            { userName: userName },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "2m" }
          );
          res.cookie("token", refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 21600000,
          });
          res.send({ user, token: accessToken });
        })
        .catch((err) => {
          res.send("Inavalid Credentials");
          console.log(err);
        });
    })
    .catch(() => {
      res.send("Inavalid Credentials");
    });
};

const forgotPasswordPhoneNumber = async (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  try {
    const user = await User.findOne({ phoneNumber: phoneNumber });
    if (user) {
      const generatedOtp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      SendOtpMessage(generatedOtp, phoneNumber);
      bcrypt.hash(generatedOtp, 10, async function (err, hash) {
        // Store hash in your password DB.
        if (err) {
          res.status(400).json({
            status: "error",
            message: err,
          });
        } else {
          const hashString = hash.toString();
          const userData = await User.updateOne(
            { phoneNumber: phoneNumber },
            { phoneOtp: hashString }
          );
          let token = jwt.sign(
            { phoneNumber: req.body.phoneNumber },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "3m" }
          );
          res.cookie(`token`, `${token}`, { httpOnly: true, secure: true });
          res.status(200).json({
            status: "sucess",
            message: "otp send to data base",
            token,
          });
        }
      });
    } else {
      res.status(500).send("user Not Found");
    }
  } catch (err) {
    console.log(err);
  }
};

const MailOtp = (generatedOtp, email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    auth: {
      user: "surveer318@gmail.com",
      pass: "ffgghkylqbkdpryz",
    },
  });

  const mailOptions = {
    from: "surveer318@gmail.com",
    to: email,
    subject: "Verify Your Email",
    html: `<p>Verify Your Email</p> <br> <p>This is Your Otp : ${generatedOtp}</p>`,
  };

  transporter.sendMail(mailOptions, async (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

const forgotPasswordEmail = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email: email });
  if (user) {
    const generatedOtp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });
    MailOtp(generatedOtp, email);
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
        const userData = await User.updateOne(
          { email: email },
          { phoneOtp: hashString }
        );
        let token = jwt.sign(
          { phoneNumber: req.body.phoneNumber },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "3m" }
        );
        res.cookie(`token`, `${token}`, { httpOnly: true, secure: true });
        res.status(200).json({
          status: "sucess",
          message: "otp send to data base",
          token,
        });
      }
    });
  } else {
    res.status(500).send("User Doesnot exists");
  }
};

const forgotPasswordVerifyOtp = async (req, res) => {
  let userData;
  {
    if (req.body.phoneNumber) {
      phoneNumber = req.body.phoneNumber;
      userData = await User.findOne({ phoneNumber });
      console.log(userData);
    } else if (req.body.email) {
      email = req.body.email;
      userData = await User.findOne({ email });
      console.log(userData);
    } else {
      res.status(400).send("Incorrect credentials");
    }
  }

  if (userData) {
    bcrypt.compare(
      req.body.otp,
      userData.phoneOtp,
      async function (err, result) {
        // result == true
        if (err) {
          res.status(400).json({
            status: "error",
            message: err,
          });
        } else {
          if (result) {
            const updatedInfo = await User.updateOne(
              { phoneNumber: userData.phoneNumber },
              { $set: { is_verified_phone: true, phoneOtp: "" } }
            );
            res.status(200).send(updatedInfo);
          } else {
            res.status(400).json({
              status: "error",
              message: "Otp doesnt't match",
            });
          }
        }
      }
    );
  } else {
    res.status(400).json({
      status: "error",
      message: "otp expired",
    });
  }
};

const forgotPasswordSetPassword = async (req, res) => {
  console.log(req.body);
  if (req.body.email) {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log("password making");
      let password = req.body.password;
      const salt = await bcrypt.genSalt(16);
      const hashedPass = await bcrypt.hash(password, salt);
      password = hashedPass;
      const userData = await User.updateOne(
        { email: req.body.email },
        { password: password }
      );
      console.log(userData, "Password has been updated");
      let accessToken = jwt.sign(
        { name: user.name },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "2m" }
      );
      let refreshToken = jwt.sign(
        { name: user.name },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie({ refreshToken });
      res.status(200).send({ accessToken });
    } else {
      res.status(404).send("User Doesn't exists");
    }
  } else if (req.body.phoneNumber) {
    const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
    if (user) {
      console.log("password making");
      let password = req.body.password;
      const salt = await bcrypt.genSalt(16);
      const hashedPass = await bcrypt.hash(password, salt);
      password = hashedPass;
      const userData = await User.updateOne(
        { phoneNumber: req.body.phoneNumber },
        { password: password }
      );
      console.log(userData, "Password has been updated");
      let accessToken = jwt.sign(
        { name: user.name },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "2m" }
      );
      let refreshToken = jwt.sign(
        { name: user.name },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      res.cookie({ refreshToken });
      res.status(200).send({ accessToken });
    } else {
      res.status(404).send("User Doesn't exists");
    }
  }
};

module.exports = {
  loginControler,
  forgotPasswordPhoneNumber,
  forgotPasswordEmail,
  forgotPasswordVerifyOtp,
  forgotPasswordSetPassword,
};
