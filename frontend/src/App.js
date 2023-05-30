import {BrowserRouter,Routes ,Route,Navigate } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import SignupForm from "./pages/Signup";
import LoginForm from "./pages/Login"
import { useAuthContext } from "./hooks/useAuthContext";
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
  const {user}=useAuthContext()
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Navbar/>
      <div className="routes">
      <Routes>
        <Route path="/" element={user?<Home/>:<Navigate to="/signup"/>}/>
        <Route path="/signup" element={!user?<SignupForm/>:<Navigate to="/"/>}/>
        <Route path="/login" element={user?<Navigate to="/"/>:<LoginForm/>}/>

      </Routes>
      </div>
      </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
