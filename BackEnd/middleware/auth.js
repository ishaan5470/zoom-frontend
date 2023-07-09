// REQUIRING MODULES
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("authorization") || req.cookies.token;
    console.log("verify Token Called");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const verifyRefreshToken = (req,res)=>{
    let refreshToken = req.cookies.token;
    console.log(refreshToken);
    console.log("verify Refresh token called");

    if (refreshToken==undefined||refreshToken==null) {
      return null;
    }  
    
    else{
      let verified = jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);
      if(verified){
        let accessToken = jwt.sign({},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"2m"})
        console.log("it is verified refreshed");
        return({token:accessToken})
      }
      else{
        return null;
      }
    }
}

const verifyAccessToken = (req,res)=>{
  // console.log(req);
  let token = req.header("authorization")
  console.log(token);
    if (!token) {
      return res.status(403).send("Access Denied");
    }
    else{
      jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,token)=>{
        if(err){
          console.log(err);
          console.log("access token not verified");
          const newRefreshToken = verifyRefreshToken(req,res)
          if(newRefreshToken){
            res.status(200).json(newRefreshToken)
          }
          else{
            res.status(403).send("Access Denied");
          }
          
        }
        else{
          console.log(token);
          console.log("it is Verified");
          res.status(200).send(true);
        }
      });

    }
}

// EXPORT THE MODULE
module.exports = {verifyToken,verifyAccessToken};
