const jwt=require("jsonwebtoken");
const { secretKey }=require("../configuration/jwtConfig");

function generateToken(user) {
   const payload={
    id: user._id,
    email: user.email,
    role: user.role
   }
   const options={
      algorithm: "HS256",
      expiresIn:"1h"
   }
   console.log(secretKey,"signin");
   return jwt.sign(payload,secretKey,options);
};

module.exports={
    generateToken
};