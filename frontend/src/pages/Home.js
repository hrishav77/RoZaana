// import React from 'react'
import React, { useEffect } from "react";
import { useGoalcontext } from "../hooks/useGoalcontext";

import GoalDetail from '../components/GoalDetail';
import Form from "../components/Form";
export default function Home() {
  // const [goals,setGoals]=useState(null)

  const {goals,dispatch}=useGoalcontext()
  
  useEffect(()=>{
    const fetchGoals=async()=>{
    const data=await fetch('/api/goals')
    const goaljson=await data.json()
    if(data.ok){
      // setGoals(goaljson)
      dispatch({type:"SET_GOAL",payload:goaljson})
    }
   }
   fetchGoals()
  },[])
  
  return (
    <div className="goals">
      <div className="goal-detail">
        <div className="goal-box"> {goals && goals.map((goal)=>(
        <GoalDetail goal={goal}/>
      ))}</div>
     
      <div className="form-box"><Form/></div>
      
      </div>
    </div>
    
  )
}
