import React, { useEffect, useState } from "react";
import { useGoalcontext } from "../hooks/useGoalcontext";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import GoalDetail from "../components/GoalDetail";
import PieChart from "../components/PieChart";
import Form from "../components/Form";
import { useAuthContext } from "../hooks/useAuthContext";
import { Center, Box, Text, SimpleGrid } from "@chakra-ui/react";
import RingLoader from "react-spinners/RingLoader";

export default function Home() {
  const [isLoading, SetLoading] = useState(false);
  const { goals, dispatch } = useGoalcontext();
  const { user } = useAuthContext();
  const [isSmallScreen] = useMediaQuery("(max-width: 900px)");

  useEffect(() => {
    const fetchGoals = async () => {
      SetLoading(true);
      const data = await fetch("https://rozaana.onrender.com/api/goals", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const goaljson = await data.json();
      if (data.ok) {
        SetLoading(false);
        dispatch({ type: "SET_GOAL", payload: goaljson });
      }
    };
    if (user) {
      fetchGoals();
    }
  }, [dispatch, user]);

  return (
    <Box className="goals" p={2}>
      {isLoading && (
        <Center>
          <RingLoader
            color="#ffffff"
            cssOverride={{ margin: "10px" }}
            speedMultiplier={0.8}
          />
        </Center>
      )}
      {!isLoading && goals && goals.length === 0 && (
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          textAlign="center"
          mt={4}
        >
          Post your goals here!
        </Text>
      )}
      <Flex direction="row" justifyContent="center" alignItems="center">
        <Box className="form-box">{!isSmallScreen && <Form />}</Box>
        {/* <Box w="30%" mr="6">
          <PieChart />
        </Box> */}
      </Flex>

      {!isLoading && goals && goals.length > 0 && (
        <SimpleGrid
          columns={[1, 2, 4]} // 1 column on small screens, 2 on medium, 3 on large
          spacing={4}
          mt={4}
        >
          {goals.map((goal) => (
            <GoalDetail goal={goal} key={goal._id} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}
