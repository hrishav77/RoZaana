import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { useSignup } from '../hooks/useSignup';
const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading, error }=useSignup()//use signup returns theses states and also dispatch the login action

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
 
    await signup(email,password)
    
  };

  return (
    <Box
      width="400px"
      p={4}
      bg="gray.100"
      borderRadius="md"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="md"
      margin="0 auto"
      mt={20}
    >
      <Heading as="h2" size="md" textAlign="center" mb={4} color="blackAlpha.700">
        Signup
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input type="email" value={email} onChange={handleEmailChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Password:</FormLabel>
            <Input type="password" value={password} onChange={handlePasswordChange} />
          </FormControl>
          <Button type="submit" colorScheme="teal" disabled={isLoading}>Sign Up</Button>
          {error && <div className='error'>{error}</div>}
        </Stack>
      </form>
    </Box>
  );
};

export default SignupForm;
