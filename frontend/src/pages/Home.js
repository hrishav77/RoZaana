// import React from 'react'
import React, { useEffect } from "react";
import { useGoalcontext } from "../hooks/useGoalcontext";

import GoalDetail from '../components/GoalDetail';
import Form from "../components/Form";
import { useAuthContext } from "../hooks/useAuthContext";
export default function Home() {
  // const [goals,setGoals]=useState(null)

  const {goals,dispatch}=useGoalcontext()
  const {user}=useAuthContext()
  useEffect(()=>{
    const fetchGoals=async()=>{
    const data=await fetch('/api/goals',{
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
    })
    const goaljson=await data.json()
    if(data.ok){
      // setGoals(goaljson)
      dispatch({type:"SET_GOAL",payload:goaljson})
    }
   }
   if(user){
    fetchGoals()
   }
   
  },[dispatch])
  
  return (
    <div className="goals">
      <div className="goal-detail">
        <div className="goal-box"> {goals && goals.map((goal)=>(
        <GoalDetail goal={goal} key={goal._id}/>
      ))}</div>
     
      <div className="form-box"><Form/></div>
      
      </div>
    </div>
    
  )
}
