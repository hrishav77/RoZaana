import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { useLogin } from '../hooks/useLogin';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login,error,isLoading}=useLogin()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    await login(email,password)
    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      width="400px"
      p={4}
      bg="gray.100"
      borderRadius="md"
      border="1px black solid"
      // borderColor="gray.200"
      boxShadow="md"
      margin="0 auto"
      mt={20}
      backgroundColor="rgba(255, 255, 255, 0.603)"
    >
      <Heading as="h2" size="md" textAlign="center" mb={4} color="blackAlpha.800">
        Login
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
          <Button type="submit" colorScheme="teal" disabled={isLoading}  fontSize="lg" fontWeight="bold">Log in</Button>
          {error && <div className='error'>{error}</div>}

        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
