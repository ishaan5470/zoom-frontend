const multer = require('multer');
const resumes = require('../models/resume')
const sharp = require('sharp')

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
    req.file.filename = `user-${req.body.firstName}-${Date.now()}.jpeg`
    await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat('jpeg')
      .jpeg({quality: 90})
      .toFile(`public/img/users/${req.file.filename}`)
  
    next()
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})
  
exports.uploadUserPhoto = upload.single('image')

exports.createResume = async (req, res) => {
    try{
        const filteredBody = {...req.body};
        if(req.file){
            filteredBody.image = req.file.filename
        }
        const result = await resumes.create(filteredBody)
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

exports.getResumes = async (req, res) => {
    try{
        const result = await resumes.find()
        res.status(200).json({
            status: 'success',
            message: {
                reslength: result.length,
                data: result
            }
        })
    }catch(err){
        console.log(err)
    }
}

exports.getResumeData = async (req, res) => {
    try{
        const id = req.params.id
        const result = await resumes.findOne({_id: id})
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

exports.resumeImage = async(req,res)=>{
    console.log(req.body,"this is from the body")  
    upload(req,res,async (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(req.file)
            console.log(req.body)   
            const uploadedData=await resumes.create({...req.body,image:{data:req.file.filename}})
            uploadedData.save().then(()=>res.status(200).json({
                status:"sucess",
                data:"data uploaded"}))
                .catch(err=>
                    res.status(404).json({  
                        status:"error",
                        message:err
                    })
                    )
        }    
    })  
}

// just for getting the data in the database

exports.postresume = async(req,res)=>{
    try{  
        upload(req,res,async (err)=>{
            if(err){
                return res.status(400).json({
                    status:"error",
                    message:err
                })
            }else{  
               // console.log(JSON.parse(JSON.stringify(req.body)))
               //console.log(JSON.parse(req.body.obj)) 
               const uploadedData=await resumes.create({...JSON.parse(req.body.obj),image:{data:req.file.filename}})
               
              
               uploadedData.save()
                .then(async()=>{
                 const imageurl=await QRCode.toDataURL(uploadedData.id)
                 //console.log(imageurl,"giiiii")
                 res.status(200).json({
                    status:"sucess",
                    message:"resume created",
                    qrcode:imageurl,
                    image:uploadedData.image.data
                })
                }
                )
                .catch(err=>
                     res.status(400).json({
                        status:"error",
                        message:err
                    })    
                
                )
            }
        })  
    }catch(e){
        return res.status(400).json({
            status:"error",
            message:e.message
        })
    }
}


exports.deleteAllResumes = async (req, res) => {
    try{
        const { userId } = req.params;
        const result = await resumes.deleteMany(userId);
        res.status(204).json({
            status: 'success',
            message: {
                data: null
            }
        })
    }catch(err){
        console.log(err)
    }
}