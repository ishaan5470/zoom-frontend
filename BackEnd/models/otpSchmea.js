const mongoose=require("mongoose")
const schema=mongoose.Schema
const userpost=new schema({
    phoneNumber:{type:Number},
    otp:{type:String},
    createdAt: { type: Date, expires: '5m', default: Date.now }
})
const users=mongoose.model("otpschema",userpost)
module.exports=users