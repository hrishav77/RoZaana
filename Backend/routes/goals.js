const express=require('express')
const router=express.Router()
const Goal=require("../models/Goal")
const {getGoals,postGoal,getGoalId,deleteGoal,updateGoal}=require("../controller/goalcontroller")

router.get('/',getGoals)

router.get("/:id",getGoalId)

router.post("/",postGoal )

router.delete("/:id",deleteGoal)

router.patch("/:id",updateGoal)

module.exports=router 