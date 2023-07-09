const express = require('express');
const authController = require('../controllers/authController')
const userProfileController = require('../controllers/userProfileController')
// const messageController = require('../controllers/messageController')

const router = express.Router();

// User Authentication

// router.post('/register/sendOtp', authController.sendOTP);
// router.post('/register/checkOtp', authController.checkOTP);
// router.post('/register/checkOtp/setPassword', authController.setPassword);
// router.get('/logout', authController.logout);
// router.post('/forgetPassword/sendOtp', authController.forgotPassword);
// router.post('/login', authController.login);
// router.patch('/register/recruiter', authController.recruitRegister);

// Protect all routes after this middleware
// router.use(authController.protect);

// home page
// router.get ('/getHomePage', userProfileController.homePagePosts)
router.post('/getHomePage', userProfileController.homePagePosts)

// userprofile routes comes here
// router.get('/getMyProfile', userProfileController.getMyProfile)

//Post route only to bypass auth (Testing)
router.post('/getMyProfile', userProfileController.getMyProfile)
router.post('/updateUserProfile',
    userProfileController.uploadUserPhoto,
    userProfileController.resizeUserPhoto,
    userProfileController.updateUserProfile
)

// userpost routes
// router.get('/getMyPosts', userProfileController.getMyPosts)
router.post('/getMyPosts', userProfileController.getMyPosts)
router.post('/createMyPosts',
    userProfileController.uploadUserPost,
    userProfileController.resizeUserPhoto,
    userProfileController.createUserPost
)
router.post('/follow', userProfileController.addFollowers)
router.post('/addLike', userProfileController.addLike)
router.post('/addComment', userProfileController.addComment)
router.post('/editMyPost',
    userProfileController.uploadUserPost,
    userProfileController.resizeUserPhoto,
    userProfileController.editPost
)
router.post('/deleteMyPost', userProfileController.deleteMyPost)

// for testing purpose
router.get('/getAllUsers', userProfileController.getAllUsers)
router.get('/getAllPosts', userProfileController.getAllPosts)
router.get('/deleteAllPosts', userProfileController.deleteAllPosts)
router.post('/putUser', userProfileController.addUserTest);
// messaging routes
// router.post('/chat', messageController.sendMessage)
// router.post('/chat/sendRoom', messageController.sendRoom)
// router.post('/chat/getMessages', messageController.getMessages)
// router.get('/chat/getChats', messageController.getChats)

module.exports = router