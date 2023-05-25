const express=require('express')
const router=express.Router()
const {loginUser,signupUser}=require("../controller/usercontroller")
const User=require("../models/User")

//login
router.post("/login",loginUser)

//signup
router.post("/signup",signupUser)

module.exports=router;