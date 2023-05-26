const express=require('express')
const router=express.Router()
const Goal=require("../models/Goal")
const requireAuth=require("../middlewares/requireAuth")
const {getGoals,postGoal,getGoalId,deleteGoal,updateGoal}=require("../controller/goalcontroller")

router.use(requireAuth) //before all get ,post or anything it has to pass through this auth

router.get('/',getGoals)

router.get("/:id",getGoalId)

router.post("/",postGoal )

router.delete("/:id",deleteGoal)

router.patch("/:id",updateGoal)

module.exports=router 