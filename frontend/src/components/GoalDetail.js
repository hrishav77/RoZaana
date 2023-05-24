import React from 'react'
import { Box, Button, Center, Checkbox, Flex, HStack, Text} from '@chakra-ui/react'
import { useGoalcontext } from '../hooks/useGoalcontext'

export default function GoalDetail(props) {
  const {dispatch}=useGoalcontext()
  const deleteHandler=async()=>{
    const data=await fetch("/api/goals/"+props.goal._id,{
      method:'DELETE'
    })
    
    const jsondata=await data.json()
    if(data.ok){
      dispatch({type:"DELETE_GOAL",payload: jsondata})
    }
  }
  return (
    <Box bg="white" w="90%" m="5" ml="10%" fontSize="xl" borderRadius="10px">
      <div className="goaltext" >
      < Text key={props.goal._id} p="2"  fontSize="xl" fontWeight="bold" color="#1aac83" >{props.goal.goaltitle} </Text>
    <Text p="2" fontSize="lg"><b>When to do:</b>{props.goal.time}</Text>
    <HStack><Text p="2"><b>duration:</b>{props.goal.duration}h</Text> </HStack> 
      </div>  
    <Button colorScheme="blackAlpha" size='xs' onClick={deleteHandler}>DELETE</Button>
    </Box>
    // <>
    // <Flex pl="40%">
    // <Box borderColor="black">
    
    // </Box>
    
    // </Flex>
    // </>
 
  )
}
