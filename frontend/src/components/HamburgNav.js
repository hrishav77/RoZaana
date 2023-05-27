
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    Center,
   
  } from '@chakra-ui/react'
  import React from 'react'
  import { Button, useDisclosure } from "@chakra-ui/react"


 
  
  
  export default function DrawerExample({children}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <button onClick={onOpen}>
         <img src="../hamburger.png" alt="-"  style={{height:"30px"}} />
        </button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody background="blackAlpha.400" 
            backgroundImage="url(https://c0.wallpaperflare.com/preview/763/245/149/background-coffee-compose-composition.jpg)" 
            backgroundAttachment="fixed"
            backgroundSize="cover"
            
            pt="10px">
            {children}
            <Center>
            <Button colorScheme="blackAlpha" mr={3} onClick={onClose} m="10">
              Close
            </Button>
            </Center>
            
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }