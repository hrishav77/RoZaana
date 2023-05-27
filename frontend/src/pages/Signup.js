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
    width={['80%', '400px']}
    p={4}
    bg="gray.100"
    borderRadius="md"
    border="1px black solid"
    boxShadow="md"
    margin="0 auto"
    mt={20}
    backgroundColor="rgba(255, 255, 255, 0.603)"
    >
      <Heading as="h2" size="md" textAlign="center" mb={4} color="blackAlpha.800">
        Signup
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel fontWeight="bold">Email:</FormLabel>
            <Input type="email" value={email} onChange={handleEmailChange} />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold">Password:</FormLabel>
            <Input type="password" value={password} onChange={handlePasswordChange} />
          </FormControl>
          <Button type="submit" colorScheme="teal" disabled={isLoading} fontWeight="bold">Sign Up</Button>
          {error && <div className='error'>{error}</div>}
        </Stack>
      </form>
    </Box>
  );
};

export default SignupForm;
