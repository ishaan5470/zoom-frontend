// REQUIRING MODULES
const mongoose = require("mongoose");

// DECLARE THE SCHEMA OF THE MONGO MODEL
const companySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email: {
            type: String,
            required:true
        },
        password: {
            type: String,
            required:true
        },
        logo: {
            type: String
        },
        description: String,
        workingStrength: String
    }
)

// EXPORT THE MODULE
const Company = mongoose.model("Company", companySchema);
module.exports = Company;
