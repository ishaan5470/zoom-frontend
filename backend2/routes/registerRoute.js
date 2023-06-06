const express = require("express");

const router = express.Router();

const registerController = require("../controller/registerController");
const OtpManage = require("../controller/OtpManage")
const verifyToken = require("../middleware/auth");

router.get("/",registerController.registerControler);

router.post("/",registerController.registerUser);

router.get("/verifyMail",registerController.verifyUser);

router.post("/verifyMail/setPassword",verifyToken,registerController.setPassword);

router.post("/phoneNumber",OtpManage.sendOTPContoler);

router.post("/phoneNumber/verify",verifyToken,OtpManage.checkOTPControler);


module.exports = router; 