const Goal=require("../models/Goal")

//get a goal
const getGoals=async(req,res)=>{
    const goals=await Goal.find({}).sort({createdAt:-1})
    res.status(200).json(goals)
}

//post a goal
const postGoal=async(req,res)=>{
    const {goaltitle,duration,time}=req.body
    //add the goal to database
    try{
    const goal=await Goal.create({goaltitle,duration,time}) 
    res.status(200).json(goal)
    }catch(error){
        res.status(400).json({error:error.message})
    }
  
}

//delete a goal


//get a id goal
const getGoalId=async(req,res)=>{
    const {id}=req.params
    const goal=Goal.findById(id)
    if(!goal){
        return res.status(200).json({error:"goal does not exist"})
    }
    res.status(200).json(goal)
}

//update a goal


module.exports={getGoals,
    postGoal,getGoalId
}