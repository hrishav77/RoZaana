import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useGoalcontext } from "../hooks/useGoalcontext";
import { useAuthContext } from "../hooks/useAuthContext";

const GoalForm = () => {
  const { dispatch } = useGoalcontext();
  const { user } = useAuthContext();
  const [goaltitle, setGoal] = useState("");
  const [duration, setDuration] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState(null);
  const [posting, setPosting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }
    setPosting(true);
    const goaldata = { goaltitle, duration, time };
    const response = await fetch("https://rozaana.onrender.com/api/goals", {
      method: "POST",
      body: JSON.stringify(goaldata),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    } else {
      setPosting(false);
      setError(null);
      setDuration("");
      setGoal("");
      setTime("");
      dispatch({ type: "CREATE_GOAL", payload: json });
    }
  };

  return (
    <Box
      width={["90%", "320px"]} // Smaller width
      p={4} // Less padding
      bg="#1A202C"
      borderRadius="lg"
      boxShadow="lg"
      margin="0 auto"
      mt={2} // Smaller margin at the top
    >
      <FormControl as="form" onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {" "}
          {/* Reduced spacing */}
          <FormLabel fontSize="sm" color="#A0AEC0">
            Goal:
          </FormLabel>
          <Input
            type="text"
            value={goaltitle}
            onChange={(e) => setGoal(e.target.value)}
            bg="#2D3748"
            _hover={{ bg: "#4A5568" }}
            placeholder="Clean my table"
            color="#E2E8F0"
            border="none"
            borderRadius="md"
            _focus={{
              borderColor: "#63B3ED",
              boxShadow: "0 0 0 1px #63B3ED",
            }}
            fontSize="sm"
          />
          <FormLabel fontSize="sm" color="#A0AEC0">
            Duration (in hours):
          </FormLabel>
          <Input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            bg="#2D3748"
            _hover={{ bg: "#4A5568" }}
            placeholder="2"
            color="#E2E8F0"
            border="none"
            borderRadius="md"
            _focus={{
              borderColor: "#63B3ED",
              boxShadow: "0 0 0 1px #63B3ED",
            }}
            fontSize="sm"
          />
          <FormLabel fontSize="sm" color="#A0AEC0">
            Start Time:
          </FormLabel>
          <Input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            bg="#2D3748"
            _hover={{ bg: "#4A5568" }}
            placeholder="6:00 PM"
            color="#E2E8F0"
            border="none"
            borderRadius="md"
            _focus={{
              borderColor: "#63B3ED",
              boxShadow: "0 0 0 1px #63B3ED",
            }}
            fontSize="sm"
          />
          <Button
            type="submit"
            bg="#3182CE"
            color="white"
            isLoading={posting}
            fontSize="sm" // Smaller font size
            fontWeight="medium"
            _hover={{ bg: "#2B6CB0" }}
            borderRadius="md"
            boxShadow="sm"
          >
            Submit
          </Button>
          {error && (
            <Text color="red.300" fontSize="sm">
              {error}
            </Text>
          )}
        </Stack>
      </FormControl>
    </Box>
  );
};

export default GoalForm;
