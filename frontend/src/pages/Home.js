// import React from 'react'
import React, { useEffect,useState } from "react";
import { useGoalcontext } from "../hooks/useGoalcontext";
import { useMediaQuery } from "@chakra-ui/react";
import GoalDetail from '../components/GoalDetail';
import Form from "../components/Form";
import { useAuthContext } from "../hooks/useAuthContext";
import { Center } from "@chakra-ui/react";
import RingLoader
 from "react-spinners/RingLoader";
import { Text } from "@chakra-ui/react";

export default function Home() {
  // const [goals,setGoals]=useState(null)
  const [isLoading,SetLoading]=useState(false)
  const {goals,dispatch}=useGoalcontext()
  const {user}=useAuthContext()
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  useEffect(()=>{
    
    const fetchGoals=async()=>{
    SetLoading(true)
    const data=await fetch('https://rozaana.onrender.com/api/goals',{
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
    })
    const goaljson=await data.json()
    if(data.ok){
      // setGoals(goaljson)
      SetLoading(false)
      dispatch({type:"SET_GOAL",payload:goaljson})
    }
   }
   if(user){
    fetchGoals()
   }
   
  },[dispatch,user])
  
  return (
    <div className="goals">
     
      <div className="goal-detail">
        <div className="goal-box"> 
        {isLoading && <Center><RingLoader color="#ffffff"  cssOverride={{margin: '10px'}} speedMultiplier={0.8}/></Center>}
        {goals && Object.keys(goals).length === 0 && <Text  fontSize="2xl" fontWeight="bold" color="white" textAlign="center" >Post your goals here!</Text>}
        {goals && goals.map((goal)=>(
        <GoalDetail goal={goal} key={goal._id}/>
      ))}</div>
      <div className="form-box">
      
      {!isSmallScreen && <Form/>}
      </div>
      
      </div>
    </div>
    
  )
}
