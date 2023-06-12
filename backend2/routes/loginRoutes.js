const express = require("express");

const router = express.Router();

const loginController = require("../controller/loginController")

router.post("/",loginController.loginControler);

router.post("/forgotPassword/phoneNumber",loginController.forgotPasswordPhoneNumber)

module.exports = router; 