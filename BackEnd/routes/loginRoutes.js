const express = require("express");

const router = express.Router();

const loginController = require("../controllers/loginController");
const auth = require("../middleware/auth");

router.post("/", loginController.loginControler);

router.post("/forgotPassword/phoneNumber", loginController.forgotPasswordPhoneNumber);

router.post("/forgotPassword/email", loginController.forgotPasswordEmail);

router.post("/forgotPassword/verify", auth.verifyToken, loginController.forgotPasswordVerifyOtp);

router.post("/forgotPassword/setPassword", auth.verifyToken, loginController.forgotPasswordSetPassword);

router.get("/protected", auth.verifyAccessToken);

router.get("/protected/user", auth.verifyToken, loginController.getUser);


module.exports = router;  