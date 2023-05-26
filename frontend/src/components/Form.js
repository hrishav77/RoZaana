import React from 'react'
import { useState,useEffect } from 'react'
import { Button,Center} from '@chakra-ui/react'
import { useGoalcontext } from '../hooks/useGoalcontext';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Form() {
   const {dispatch}=useGoalcontext()
    const [goaltitle,setGoal]=useState("");
    const [duration,setDuration]=useState("");
    const [time,setTime]=useState("");
    const [error,setError]=useState(null)
  const {user}=useAuthContext()
    const handleSubmit=async(e)=>{
      if(!user){
        setError("you must be logged in")
        return
      }
        e.preventDefault();
        const goaldata={goaltitle,duration,time};
        const response=await fetch("/api/goals",{
            method:"post",
            body:JSON.stringify(goaldata),
            headers:{
                "Content-Type":"application/json",
                'Authorization':`Bearer ${user.token}`
            }
        })
        const json=await response.json()
        if(!response.ok){setError(json.error)}
        else if(response.ok){
            setError(null)
            setDuration("")
            setGoal("")
            setTime("")
            dispatch({type:"CREATE_GOAL",payload:json})
        }
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <h1>ADD A GOAL</h1>
        <div className='form-item'>
        <label htmlFor="goaltitle">Goal </label><br/>
        <input type="text" name="goaltitle" id="goaltitle" onChange={(e)=>{setGoal(e.target.value)}} value={goaltitle} className='form-input'/>
        </div>
        <div className='form-item'>
        <label htmlFor="duration">Enter duration(in hours)</label><br />
        <input type="number" name="duration" id="duration" onChange={(e)=>{setDuration(e.target.value)}} value={duration} className='form-input'/>
        </div>
        <div className='form-item'>
        <label htmlFor="time">Enter when will you do</label><br />
        <input type="text" name="time" id="time" onChange={(e)=>{setTime(e.target.value)}} value={time} className='form-input'/>
        </div>
      <Button colorScheme='blue' type='submit' m="4">Submit</Button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}
