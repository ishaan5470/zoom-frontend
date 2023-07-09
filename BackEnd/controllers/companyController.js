const Company = require('../models/Company')
const users = require("../models/users");
const multer = require('multer');
const sharp = require('sharp')
const fs = require('fs')

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if(file.mimetype.startsWith('image')){
    cb(null, true)
  } else{
    cb(new Error('invalid file sent'), false)
  }  
}

exports.resizeUserPhoto = async (req, res, next) => {
    if(!req.file) return next()

    req.file.filename = `user-${req.body.name}-${Date.now()}.jpeg`
    await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat('jpeg')
      .jpeg({quality: 90})
      .toFile(`public/img/company/${req.file.filename}`)
    next()
}

exports.editResizeUserPhoto = async (req, res, next) => {
  if(!req.file) return next()
          // 1. file name
        // delete
        // new file with same name
  const fileN = await Company.findOne({_id: req.body.id}) 
  
  fs.unlinkSync(`public/img/company/${fileN.logo}`) // delete file
  req.file.filename = fileN.logo
  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({quality: 90})
    .toFile(`public/img/company/${fileN.logo}`)
  next()
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})
  
exports.uploadUserPhoto = upload.single('logo')

exports.createCompany = async (req, res) => {
    try{
        // restrict multiple company profiles for single user
        
        const filteredBody = {...req.body};
        filteredBody.userid=req.user._id ;
        if(req.file){
            filteredBody.logo = req.file.filename
        }
        const result = await Company.create(filteredBody)
        res.status(200).json({
            status: 'success',
            message: {
                data: result
            }
        })
    }catch(err){
        console.log(err)
    }
}

exports.editCompanyLogo = async(req, res) => {
  try{
      res.status(200).json({
          status: 'success',
      })
  }catch(err){
    console.log(err)
    res.status(400).json({
      status: 'failed',
      message: err
    })
  }
}

exports.getAllCompanies = async(req, res) => {
  try{
    const result = await Company.find()
    res.status(200).json({
      status: 'success',
      data: result
    })
  }catch(err){
    console.log(err)
  }
}