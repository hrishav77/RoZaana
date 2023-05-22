import { Flex,HStack,Spacer,Text,Heading,Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
        <Flex background={'#DF98EB'} >
            
            <Link to="/"><Heading size='xl'  p='5' ml="35%" color={'#60146D'} fontSize="4xl">DAILY GOALS</Heading></Link>
        
        </Flex>
  )
}
