// REQUIRING MODULES
const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController')
const companyPostController = require('../controllers/posts')

// router.use(authController.protect)
router.post("/createposts", companyPostController.createPost);
router.get("/getallposts", companyPostController.getPosts);
router.put("/update/:id", companyPostController.updatePost)
router.delete("/delete/:id", companyPostController.deletePost)

module.exports = router;