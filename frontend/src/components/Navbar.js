import React from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
const Navbar = () => {
  const {user}=useAuthContext()
  const {logout}=useLogout()
  const LogoutHandler=()=>{
    logout()
  }
  return (
    <Flex align="center" justify="space-between" p={4} bg="teal.500" color="white">
      <Link to="/">
      <Text fontSize="2xl" fontWeight="bold" >
        Daily Goals
      </Text>
      </Link>
      <Box>
        {user && (<span>{user.email}
        <Button colorScheme="teal" variant="outline" mr={2} color="teal.900" onClick={LogoutHandler}>
        Logout
      </Button></span>)
        }
        {
          !user && (<div><Link to="/login">
          <Button colorScheme="teal" variant="outline" mr={2} color="teal.900">
            Login
          </Button>
          </Link>
          <Link to="/signup">
          <Button colorScheme="teal"  variant="outline" mr={2} color="teal.900">Signup</Button>
          </Link></div>)
        }
      
        {/* <Link to="/login"> */}
        
        {/* </Link> */}
      </Box>
    </Flex>
  );
};

export default Navbar;
