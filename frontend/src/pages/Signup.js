import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useSignup } from "../hooks/useSignup";
import BeatLoader from "react-spinners/BeatLoader";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup(); // useSignup returns these states and also dispatches the login action

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <Box
      width={["80%", "400px"]}
      p={6}
      bg="#1A202C" // Dark grey background for consistency
      borderRadius="md"
      boxShadow="2xl"
      margin="0 auto"
      mt={20}
    >
      <Heading as="h2" size="lg" textAlign="center" mb={6} color="#EDF2F7">
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel color="#A0AEC0">Email:</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              bg="#2D3748" // Darker input background
              _hover={{ bg: "#4A5568" }} // Slightly lighter on hover
              placeholder="Enter your email"
              color="#E2E8F0" // Light grey text for readability
              border="none"
              borderRadius="sm"
              _focus={{
                borderColor: "#63B3ED",
                boxShadow: "0 0 0 1px #63B3ED",
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#A0AEC0">Password:</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              bg="#2D3748"
              _hover={{ bg: "#4A5568" }}
              placeholder="Enter your password"
              color="#E2E8F0"
              border="none"
              borderRadius="sm"
              _focus={{
                borderColor: "#63B3ED",
                boxShadow: "0 0 0 1px #63B3ED",
              }}
            />
          </FormControl>
          <Button
            type="submit"
            bg="#3182CE" // Blue button color matching the login form
            color="white"
            isLoading={isLoading}
            fontSize="lg"
            fontWeight="medium"
            _hover={{ bg: "#2B6CB0" }} // Slightly darker blue on hover
            borderRadius="sm"
            boxShadow="sm"
          >
            Sign Up
          </Button>
          {error && (
            <div className="error" style={{ color: "red" }}>
              {error}
            </div>
          )}
        </Stack>
      </form>
      {isLoading && (
        <Center mt={4}>
          <BeatLoader color="#3182CE" size={15} aria-label="loading" />
        </Center>
      )}
    </Box>
  );
};

export default SignupForm;
