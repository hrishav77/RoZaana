// import React from 'react'
// import { Text} from '@chakra-ui/react'
import React, { useState, useEffect } from "react";

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
        <p key={goal._id}>{goal.goaltitle}</p>
      ))}
      </div>
    
  )
}
