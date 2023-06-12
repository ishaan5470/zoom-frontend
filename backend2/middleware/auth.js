// REQUIRING MODULES
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization") || req.cookies.token;

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verifyRefreshToken = (req,res,next)=>{
    let refreshToken = req.cookies.token;

    if (!token) {
      return res.status(403).send("Access Denied");
    }  
    
    else{
      let verified = jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);
      if(verified){
        let accessToken = jwt.sign({},ACCESS_TOKEN_SECRET,{expiresIn:"2m"})
        localStorage.setItem("token",accessToken);
        next();
      }
      else{
        return res.status(403).send("Access Denied");
      }
    }
}

const verifyAccessToken = (req,res,next)=>{
    let token = localStorage.getItem("token");
    if (!token) {
      return res.status(403).send("Access Denied");
    }
    else{
      const verified = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
      if(verified){
        next();
      }
      else{
        verifyRefreshToken();
      }

    }
}

// EXPORT THE MODULE
module.exports = {verifyToken,verifyAccessToken};
