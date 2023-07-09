const express = require("express");

const router = express.Router();

const registerController = require("../controllers/registerController");
const OtpManage = require("../controllers/OtpManage")
const verifyToken = require("../middleware/auth");

router.get("/", registerController.registerControler);

router.post("/", registerController.registerUser);

router.get("/verifyMail", registerController.verifyUser);

router.post("/verifyMail/setPassword", verifyToken.verifyToken, registerController.setPassword);

router.post("/phoneNumber", OtpManage.sendOTPContoler);

router.post("/phoneNumber/verify", verifyToken.verifyToken, OtpManage.checkOTPControler);

router.post("/phoneNumber/verify/resend", OtpManage.resendOTPControler);

router.delete("/phoneNumber/verify/delete", OtpManage.deleteIncompleteSignup);

router.post("/phoneNumber/verify/setCredentials", verifyToken.verifyToken, registerController.setCredentials);



module.exports = router; 