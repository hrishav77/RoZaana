import { Flex,HStack,Spacer,Text,Heading,Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
        <Flex background={'#DF98EB'} >
            <Box p='2'>
            <Link to="/"><Heading size='xl' className='name' p='5' color={'#60146D'}>DAILY GOALS</Heading></Link>
            </Box>
        
        </Flex>
  )
}
