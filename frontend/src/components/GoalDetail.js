import React, { useState,useEffect } from 'react'
import { Box, Button,  Flex, HStack, Img, Text} from '@chakra-ui/react'
import { useGoalcontext } from '../hooks/useGoalcontext'
import { useAuthContext } from '../hooks/useAuthContext'
const moment = require('moment')


export default function GoalDetail(props) {
  const {dispatch}=useGoalcontext()
  const {user}=useAuthContext()
  //slashing
  const [isSlashed, setIsSlashed] = useState(false)
  const finishHandler = () => {
    setIsSlashed(!isSlashed);
  };
  //priority stars
  const [starCount, setStarCount] = useState(0);
  const handleButtonClick = () => {
    if(starCount<5){
      const newStarCount = starCount + 1;
      setStarCount(newStarCount);
    const storedData = localStorage.getItem('starData');
    let starData = storedData ? JSON.parse(storedData) : {};
    starData[props.goal._id] = newStarCount;
    localStorage.setItem('starData', JSON.stringify(starData));
    }
    
  };
  const decButtonClick = () => {
    setStarCount(starCount - 1);
  };
  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push(<Img h="20px" className='star-clip' key={i} src="https://img.freepik.com/free-photo/abstract-solid-shining-yellow-gradient-studio-wall-room-background_1258-54540.jpg?w=2000" alt="Star" />);
    }
    return stars;
  };
  useEffect(() => {
    const storedData = localStorage.getItem('starData');
    if (storedData) {
      const starData = JSON.parse(storedData);
      if (starData[props.goal._id]) {
        setStarCount(starData[props.goal._id]);
      }
    }
  }, [props.goal._id]);


  //delete
  const deleteHandler=async()=>{
    if(!user){return}
    const data=await fetch("https://rozaana.onrender.com/api/goals/"+props.goal._id,{
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
 //addition of duration to time
const timeString = props.goal.time;
const time = moment(timeString, "h:mmA");
const updatedTime = time.add(props.goal.duration, 'hours');
const updatedTimeString = updatedTime.format("h:mmA");

  return (
    <Box bg="rgb(250,250,250,0.95)" w="90%" m="7" ml="5%" fontSize="xl" borderRadius="10px">
      <div className={`content ${isSlashed ? 'slashed' : ''}`}>
      <div className="goaltext" >
        <HStack>
        < Text key={props.goal._id} p="2"  fontSize="xl" fontWeight="bold" color="#1aac83" >{props.goal.goaltitle} </Text>
    <Flex>
    {renderStars()}
    </Flex>
        </HStack>
   
    
    <Text p="2" fontSize="lg"><b>Start:</b>{props.goal.time}</Text>
    <Text p="2" as="span"><b>End:</b>{updatedTimeString}</Text>

    <HStack><Text p="2"><b>Duration:</b>{props.goal.duration}h</Text> </HStack> 
      </div>  
      </div>
    <Button colorScheme="red" size='xs' onClick={deleteHandler} m="2">DELETE</Button>
    <Button colorScheme="whatsapp" size='xs' onClick={finishHandler} m="2">
      {isSlashed && <div>Not &nbsp;</div>}
      <div>Finished</div>
      
      </Button>
    <Button colorScheme="blackAlpha" size='xs' onClick={handleButtonClick} m="2">Inc priority</Button>
    <Button colorScheme="blackAlpha" size='xs' onClick={decButtonClick} m="2">dec priority</Button>


    
    </Box>

 
  )
}
