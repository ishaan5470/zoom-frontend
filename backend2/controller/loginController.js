const jwt = require("jsonwebtoken");
const User = require("../model/users");
const bcrypt = require('bcrypt');

let response;
const loginControler = (req,res)=>{
    const userName = req.body.userName;
    const password = req.body.password;

    User.findOne({userName:userName})
    .then((user)=>{
        bcrypt.compare(password,user.password)
        .then((result)=>{
            let token = jwt.sign({userName:userName},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1h'})
            console.log(user);
            console.log(result);
            response = JSON.stringify({user,token});
            console.log(response);
            res.send(response);
        })
        .catch(err=>{
            res.send("Inavalid Credentials")
            console.log(err); 
        })
    })
    .catch(()=>{
        res.send("Inavalid Credentials")
    })

}

const getAllUser = (req,res)=>{
    User.find()
    .then((user)=>{
        console.log(user);
        res.send(JSON.stringify(user[0])); 
    })
}



module.exports={
    loginControler,
    getAllUser
}