const express=require('express')
const router=express.Router()
const Goal=require("../models/Goal")
const {getGoals,postGoal,getGoalId}=require("../controller/goalcontroller")

router.get('/',getGoals)

router.get("/:id",getGoalId)

router.post("/",postGoal )

router.delete("/",(req,res)=>{
    res.json({mssg:"delete a goal"})
})

router.patch("/",(req,res)=>{
    res.json({mssg:"update a goal"})
})

module.exports=router 