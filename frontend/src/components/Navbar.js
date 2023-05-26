import React from 'react';
import { Box, Button, Container, Flex, HStack, Img, Text } from '@chakra-ui/react';
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
    
    <Flex align="center" justify="space-between" p={4} background="rgb(0,0,0,0.6)" backdropFilter="blur(4px)" color="white">
     
      <Link to="/">
        <HStack>
        <Img ml="10" h="50px" borderRadius="50%" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJE4HpH4GVE_zKJxDI8Jk2d6yWYDwSXUwE4g&usqp=CAU'/>
      <Text fontSize="4xl" fontWeight="bold" >
      RoZaana
      </Text>
      <Text fontSize="sm" fontWeight="bold" >
      roz aao din banao
      </Text>
        </HStack>
      
      </Link>
      <Box>
        
        {user && (<Text fontSize="lg" >{user.email}
        <Button colorScheme="whiteAlpha" variant="solid" mr={2} color="teal.900" onClick={LogoutHandler} ml="5">
        Logout
      </Button></Text >)
        }
        {
          !user && (<div><Link to="/login">
          <Button colorScheme="whiteAlpha" variant="solid" mr={2} color="teal.900">
            Login
          </Button>
          </Link>
          <Link to="/signup">
          <Button colorScheme="whiteAlpha"  variant="solid" mr={2} color="teal.900">Signup</Button>
          </Link></div>)
        }
      
        {/* <Link to="/login"> */}
        
        {/* </Link> */}
      </Box>
    </Flex>
  );
};

export default Navbar;
