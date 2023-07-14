const express = require("express");
const router = express.Router();
const skillSharingControlller = require("../controllers/skillSharingController")

router.post("/createpost",skillSharingControlller.multerMiddleware,skillSharingControlller.createPost );
router.post("/addFollowers",skillSharingControlller.addFollowers );
router.post("/addLike",skillSharingControlller.addLike );






module.exports = router;