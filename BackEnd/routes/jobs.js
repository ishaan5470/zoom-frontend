const express=require("express")
const route=express.Router()
const instantJob=require("../models/instantJob")
const  jwt = require('jsonwebtoken');
const secret="sugar"
module.exports=route
route.get("/instantjobs",async(req,res)=>{
    try{
       // console.log("inside instant job")
       const data=await instantJob.find()
       //console.log(data)
       return res.status(200).json({
        status:"sucess",
        data
       })
    }catch(e){
        return res.status(400).json({
            status:"error",
            message:e.message
        })
    }
})
      
route.post("/instantjobs",async(req,res)=>{
     
    try{  
        console.log("hii")  
        console.log(req.body) 
       // console.log("inside instant job")
       const data=await instantJob.create({...req.body,userId:"hdvbchsvghcvhxgv"})
       return res.status(200).json({
        status:"sucess",
        data
       })
    }catch(e){
        console.log(e.message)
        return res.status(400).json({
            status:"error",
            message:e.message
        })
    }
})