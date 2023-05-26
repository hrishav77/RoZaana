import React from 'react'
import { Box, Button, Center, Checkbox, Flex, HStack, Text, useAccordionItem} from '@chakra-ui/react'
import { useGoalcontext } from '../hooks/useGoalcontext'
import { useAuthContext } from '../hooks/useAuthContext'
export default function GoalDetail(props) {
  const {dispatch}=useGoalcontext()
  const {user}=useAuthContext()
  const deleteHandler=async()=>{
    if(!user){return}
    const data=await fetch("/api/goals/"+props.goal._id,{
      method:'DELETE',
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
    })
    
    const jsondata=await data.json()
    if(data.ok){
      dispatch({type:"DELETE_GOAL",payload: jsondata})
    }
  }
  return (
    <Box bg="rgb(250,250,250,0.95)" w="90%" m="7" ml="5%" fontSize="xl" borderRadius="10px">
      <div className="goaltext" >
      < Text key={props.goal._id} p="2"  fontSize="xl" fontWeight="bold" color="#1aac83" >{props.goal.goaltitle} </Text>
    <Text p="2" fontSize="lg"><b>When to do:</b>{props.goal.time}</Text>
    <HStack><Text p="2"><b>duration:</b>{props.goal.duration}h</Text> </HStack> 
      </div>  
    <Button colorScheme="red" size='xs' onClick={deleteHandler} m="2">DELETE</Button>
    </Box>
    // <>
    // <Flex pl="40%">
    // <Box borderColor="black">
    
    // </Box>
    
    // </Flex>
    // </>
 
  )
}
