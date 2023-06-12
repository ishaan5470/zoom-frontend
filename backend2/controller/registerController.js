const User = require("../model/users");
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registerControler = async (req, res) => {
    try {
        console.log("Register called");
    } catch (error) {
        console.log(error.message);
    }
}

const verifyMail = (name, email, id) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        port: 587,
        auth: {
            user: "surveer318@gmail.com",
            pass: "ffgghkylqbkdpryz"
        }
    });

    const mailOptions = {
        from: "surveer318@gmail.com",
        to: email,
        subject: "Testing",
        html: "<p>Hi " + name + ".Verify Your Email</p><br><a href='http://localhost:8000/registeration/verify?id=" + id + "'>Verify</a>!!!!!"
    }

    transporter.sendMail(mailOptions, async (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
}

const registerUser = async (req, res) => {
    const user = User.findOne({ userName: req.body.userName });
    if (user) {
        res.status(200).send("User already exist");
    }
    else {
        try {
            const user = new User({
                name: req.body.name,
                userName: req.body.userName,
                email: req.body.email
            })
            verifyMail(user.name, user.email, user._id);
            const userData = await user.save();
            console.log("user has been saved");
            console.log(user._id);
            let token = jwt.sign({ name: user.name }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
            console.log(token);
            res.cookie({ token });
            res.send({ id: user._id, token, message: "A Link to Your Email has been sent. Verify Your Email" });
        } catch (error) {
            console.log(error.message);
        }
    }
}

const verifyUser = async (req, res) => {
    try {
        const id = req.query.id;
        const updatedInfo = await User.updateOne({ _id: id }, { $set: { is_verified_email: true } })
        console.log("Your email has been verified");
        res.redirect('/registeration/verify/setPassword?id=' + id);
        res.send("Your Email Has been verified.You will now be redirected to set your password");
    } catch (error) {
        console.log(error);
    }
}

const setPassword = async (req, res) => {
    let password = req.body.password;
    const id = req.query.id;
    if (password) {
        const salt = await bcrypt.genSalt(16);
        const hashedPass = await bcrypt.hash(password, salt);
        password = hashedPass;
        const updatedInfo = await User.updateOne({ _id: id }, { $set: { password: password } });
        console.log(updatedInfo);
        console.log("password set");
        res.status(200).send("password set");
    }
    else {
        res.status(300).send("Didn't get password")
    }


}

const setCredentials = async (req, res) => {
    console.log(req.body,"input got successfully register");
    const user = await User.findOne({ userName: req.body.userName });
    console.log(user);
    if (user) {
        res.status(500).send("UserName Already Exists")
        console.log("userName already exists");
    }
    else {
        try {
            console.log("password making");
            let password = req.body.password;
            const salt = await bcrypt.genSalt(16);
            const hashedPass = await bcrypt.hash(password, salt);
            password = hashedPass;
            let phoneNumber = req.body.phoneNumber;
            const user = await User.updateOne({phoneNumber:phoneNumber},{  
                    userName:req.body.userName,
                    password:password,
                    name:req.body.name
                })
            console.log(user,"user has been saved");
            console.log(user._id);
            let accessToken = jwt.sign({ name: user.name }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2m' })
            let refreshToken = jwt.sign({ name: user.name }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' })
            console.log(accessToken);
            console.log(refreshToken);
            res.cookie({ refreshToken });
            res.status(200).send({accessToken})
        }
        catch (error) {
            console.log(error);
        }
    }
}



module.exports = {
    registerControler,
    registerUser,
    verifyUser,
    setPassword,
    setCredentials
};