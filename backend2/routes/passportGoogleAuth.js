const router = require("express").Router();
const passport = require("../config/passport");
const User = require("../model/user");
const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
  console.log("req.user : ", req.user);
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect(CLIENT_URL);
  });
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], prompt: 'select_account' }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login",
  })
);

module.exports = router;