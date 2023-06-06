const express = require("express");

const router = express.Router();

const loginController = require("../controller/loginController")

router.post("/",loginController.loginControler);

router.get("/getAllUser",loginController.getAllUser);

module.exports = router; 