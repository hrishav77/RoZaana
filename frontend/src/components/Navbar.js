import React from 'react';
import { Box, Button,  Flex, HStack, Img, Text,useMediaQuery,useDisclosure } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import HambargurNav from "../components/HamburgNav"
import HamburgLogin from "./HamburgLogin"
import Form from './Form';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@1&display=swap');
</style>
const Navbar = () => {
  const {user}=useAuthContext()
  const {logout}=useLogout()
  const [isSmallScreen, isDisplayingInBrowser] = useMediaQuery([
    "(max-width: 900px)",
    "(display-mode: browser)",
  ])
  const { onClose } = useDisclosure()
  const LogoutHandler=()=>{
    logout()
  
  }
  return (
    
    
    <Flex align="center" justify="space-between" p={4} background="rgb(0,0,0,0.6)" backdropFilter="blur(4px)" color="white">
     
      <Link to="/">
        <HStack>
        <Img ml="10" h="60px" borderRadius="50%" src='RoZaana.png'/>
      <Text fontSize="4xl" fontWeight="bold" as="span">
      RoZaana
      <Text fontSize="xs" fontFamily="'Tiro Devanagari Hindi', serif" >रोज आओ दिन बनाओ</Text>
      </Text>
   
        </HStack>
      
      </Link>
      <Box>
        
        {!isSmallScreen && user && (<Text fontSize="lg" >{user.email}
        <Button colorScheme="whiteAlpha" variant="solid" mr={2} color="teal.900" onClick={LogoutHandler} ml="5">
        Logout
      </Button></Text >)
        }
        {isSmallScreen && user && (<HambargurNav><Text fontSize="lg" >{user.email}
        <Button colorScheme="whiteAlpha" variant="solid" mr={2} color="teal.900" onClick={LogoutHandler} ml="5">
        Logout
      </Button></Text ><Form/></HambargurNav> )
        }
        
        {
          isSmallScreen && !user && (<HamburgLogin/>)
        }
        {
           !isSmallScreen && !user && (<div><Link to="/login">
           <Button colorScheme="whiteAlpha" variant="solid" mr={2} color="teal.900">
             Login
           </Button>
           </Link>
           <Link to="/signup">
           <Button colorScheme="whiteAlpha"  variant="solid" mr={2} color="teal.900">Signup</Button>
           </Link></div>)
        }
  
      </Box>
    </Flex>
  );
};

export default Navbar;
