// import React from 'react'
import React, { useState, useEffect } from "react";
import GoalDetail from '../components/GoalDetail';

export default function Home() {
  const [goals,setGoals]=useState(null)
  useEffect(()=>{
    const fetchGoals=async()=>{
    const data=await fetch('/api/goals')
    const goaljson=await data.json()
    if(data.ok){
      setGoals(goaljson)
    }
   }
   fetchGoals()
  },[])
  return (
    <div className="goals">
      {goals && goals.map((goal)=>(
        <GoalDetail goal={goal}/>
      ))}
      </div>
    
  )
}
