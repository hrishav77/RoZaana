import React from 'react'
import { Box, Center, Checkbox, Flex, HStack, Text} from '@chakra-ui/react'


export default function GoalDetail(props) {
  return (
    <Box bg="white" w="60%" m="5" ml="10%">
        
    < Text key={props.goal._id} p="2"  fontSize="lg" fontWeight="bold" color="#1aac83" >{props.goal.goaltitle} </Text>
    <Text p="2"><b>When to do:</b>{props.goal.time}</Text>
    <HStack><Text p="2"><b>duration:</b>{props.goal.duration}h</Text> <Checkbox colorScheme='green'></Checkbox> </HStack> 
    </Box>
    // <>
    // <Flex pl="40%">
    // <Box borderColor="black">
    
    // </Box>
    
    // </Flex>
    // </>
 
  )
}
