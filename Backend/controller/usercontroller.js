const User = require("../models/User")
const jwt=require("jsonwebtoken")

const createTokens=(_id)=>{
 return jwt.sign({_id},process.env.SECRET,{expiresIn:"30d"})
}

const loginUser=async(req,res)=>{
    const {email,password}=req.body
    //creating a token for the user
    
    try{
        const user=await User.login(email,password)
        const token=createTokens(user._id)
        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

const signupUser=async(req,res)=>{
    const {email,password}=req.body
    //creating a token for the user
    
    try{
        const user=await User.signup(email,password)
        const token=createTokens(user._id)
        res.status(200).json({email,token})
    }catch(error){
        res.status(400).json({error:error.message})
    }

   
    }

module.exports={loginUser,signupUser};