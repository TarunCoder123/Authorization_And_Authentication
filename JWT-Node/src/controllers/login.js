const authService=require("../services/login");

async function login(req,res){
    try {
        const {email,password}=req.body;
        const token=await authService.login({email,password});
        res.status(201).json({token:token});
    } catch (error) {
        res.status(401).json({message:"Invalid credentials"});
    }
}

module.exports={
    login
}