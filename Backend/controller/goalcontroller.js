const Goal=require("../models/Goal")
const mongoose=require('mongoose')

//get a goal
const getGoals=async(req,res)=>{
    const user_id=req.user._id
    const goals=await Goal.find({user_id}).sort({createdAt:-1})
    res.status(200).json(goals)
}

//post a goal
const postGoal=async(req,res)=>{
    const {goaltitle,duration,time}=req.body
    //add the goal to database
    try{
    const user_id=req.user._id
    const goal=await Goal.create({goaltitle,duration,time,user_id}) 
    res.status(200).json(goal)
    }catch(error){
        res.status(400).json({error:error.message})
    }
  
}

//delete a goal
const deleteGoal=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return  res.status(404).json({error:"no such goal"})
     }
     const goal=await Goal.findOneAndDelete({_id:id})
     if(!goal){
        return res.status(404).json({error:"goal does not exist"})
    }
    res.status(200).json(goal)
}

//get a id goal
const getGoalId=async(req,res)=>{
    const {id}=req.params
 
    if(!mongoose.Types.ObjectId.isValid(id)){
       return  res.status(404).json({error:"no such goal"})
    }
    const goal=await Goal.findById(id)
    if(!goal){
        return res.status(404).json({error:"goal does not exist"})
    }
    res.status(200).json(goal)
    
}

//update a goal
const updateGoal=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return  res.status(404).json({error:"no such goal"})
     }
     const goal=await Goal.findOneAndUpdate({_id:id},{
        ...req.body
     })
     if(!goal){
        return res.status(404).json({error:"goal does not exist"})
    }
    res.status(200).json(goal)
}



module.exports={getGoals,
    postGoal,getGoalId,deleteGoal,updateGoal
}