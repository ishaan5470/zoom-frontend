const express = require('express')
const companyController = require('../controllers/companyController')
const authController = require('../controllers/authController')

const router = express.Router()

router.use(authController.protect)

router.post(
    '/createCompany',
    companyController.uploadUserPhoto,
    companyController.resizeUserPhoto,
    companyController.createCompany
)

router.post(
    '/editCompanyLogo',
    companyController.uploadUserPhoto,
    companyController.editResizeUserPhoto,
    companyController.editCompanyLogo
)

router.get('/getAllCompanies', companyController.getAllCompanies)
module.exports = router