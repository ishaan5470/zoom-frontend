const mongoose=require("mongoose")
const schema=mongoose.Schema
const userpost=new schema({
    firstName: {type: String},
    lastName: {type: String},
    role:{type:String},
    description:{type:String},
    skills:[{type:String}],
    achievements:[{type:String}],
    emailid:{type:String},
    phoneNumber:{type:String},
    location: {type:String},
    educationalDetails:[{
        institute:{type:String},
        course:{type:String},
        percentage:{type:String},
        period:{type:String}
    }],
    workExperience:[{
        company:{type:String},
        period:{type:String},
        role:{type:String},
        description:{type:String}
    }],
    gitLink:{type:String},
    linkedin:{type:String},
    portfolio: {type:String},
    image:{
        type:String
    }

})
const resumes=mongoose.model("zealyugResumes",userpost)
module.exports=resumes