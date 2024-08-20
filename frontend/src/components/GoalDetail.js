import React, { useState, useEffect } from "react";
import { Box, Button, Flex, HStack, Text, Grid } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import { useGoalcontext } from "../hooks/useGoalcontext";
import { useAuthContext } from "../hooks/useAuthContext";
const moment = require("moment");

export default function GoalDetail(props) {
  const { dispatch } = useGoalcontext();
  const { user } = useAuthContext();

  // Slashing
  const [isSlashed, setIsSlashed] = useState(false);
  const finishHandler = () => {
    setIsSlashed(!isSlashed);
    const finished = localStorage.getItem("slashdata");
    let slashData = finished ? JSON.parse(finished) : {};
    slashData[props.goal._id] = !isSlashed;
    localStorage.setItem("slashdata", JSON.stringify(slashData));
  };

  // Priority stars
  const [starCount, setStarCount] = useState(0);
  const handleButtonClick = () => {
    if (starCount < 5) {
      const newStarCount = starCount + 1;
      setStarCount(newStarCount);
      const storedData = localStorage.getItem("starData");
      let starData = storedData ? JSON.parse(storedData) : {};
      starData[props.goal._id] = newStarCount;
      localStorage.setItem("starData", JSON.stringify(starData));
    }
  };
  const decButtonClick = () => {
    if (starCount > 0) {
      setStarCount(starCount - 1);
      const storedData = localStorage.getItem("starData");
      let starData = storedData ? JSON.parse(storedData) : {};
      starData[props.goal._id] = starCount - 1;
      localStorage.setItem("starData", JSON.stringify(starData));
    }
  };
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{ color: "gold", marginRight: "6px" }} // Increased margin for stars
        />
      );
    }
    return stars;
  };

  useEffect(() => {
    const storedData = localStorage.getItem("starData");
    const finished = localStorage.getItem("slashdata");

    if (finished) {
      const slashData = JSON.parse(finished);
      if (slashData[props.goal._id]) {
        setIsSlashed(slashData[props.goal._id]);
      }
    }

    if (storedData) {
      const starData = JSON.parse(storedData);
      if (starData[props.goal._id]) {
        setStarCount(starData[props.goal._id]);
      }
    }
  }, [props.goal._id]);

  // Delete
  const deleteHandler = async () => {
    if (!user) {
      return;
    }
    const data = await fetch(
      `https://rozaana.onrender.com/api/goals/${props.goal._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    localStorage.removeItem("starData");

    const jsondata = await data.json();
    if (data.ok) {
      dispatch({ type: "DELETE_GOAL", payload: jsondata });
    }
  };

  // Addition of duration to time
  const timeString = props.goal.time;
  const time = moment(timeString, "h:mmA");
  const updatedTime = time.add(props.goal.duration, "hours");
  const updatedTimeString = updatedTime.format("h:mmA");

  return (
    <Box
      bg={isSlashed ? "#5A6B7A" : "#3C4A5A"}
      borderRadius="2xl"
      p="6"
      pt="1"
      boxShadow="lg"
      borderWidth="1px"
      borderColor={isSlashed ? "#B0BEC5" : "#2D3748"}
      width="100%" // Adjust width for sticky note effect
      maxWidth="100%"
    >
      <HStack spacing="4" align="start" wrap="wrap">
        <Box flex="1" m="3">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={isSlashed ? "#4A5568" : "#63B3ED"}
            textDecoration={isSlashed ? "line-through" : "none"}
          >
            {props.goal.goaltitle}
          </Text>
          {renderStars()}
          <Flex direction="column" mt="4">
            <HStack spacing="3" mb="2">
              <FontAwesomeIcon icon={faClock} style={{ color: "#63B3ED" }} />
              <Text fontSize="md" color="#E2E8F0" isTruncated>
                <b>Time:</b> {props.goal.time} - {updatedTimeString}
              </Text>
            </HStack>
            <Text fontSize="md" color="#E2E8F0">
              <b>Duration:</b> {props.goal.duration}h
            </Text>
          </Flex>
        </Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={2} m="4">
          <Button
            colorScheme="blue"
            size="sm"
            onClick={handleButtonClick}
            variant="outline"
            leftIcon={
              <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
            }
          >
            Inc Priority
          </Button>
          <Button
            colorScheme="blue"
            size="sm"
            onClick={decButtonClick}
            variant="outline"
            leftIcon={
              <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
            }
          >
            Dec Priority
          </Button>
          <Button colorScheme="teal" size="sm" onClick={finishHandler}>
            {isSlashed ? "Unmark Finished" : "Mark as Finished"}
          </Button>
          <Button colorScheme="red" size="sm" onClick={deleteHandler}>
            Delete
          </Button>
        </Grid>
      </HStack>
    </Box>
  );
}
