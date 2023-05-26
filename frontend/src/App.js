import {BrowserRouter,Routes ,Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import SignupForm from "./pages/Signup";
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    })
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Navbar/>
      <div className="routes">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
      </Routes>
      </div>
      </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
