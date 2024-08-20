import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  Text,
  useMediaQuery,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import HambargurNav from "../components/HamburgNav";
import HamburgLogin from "./HamburgLogin";
import Form from "./Form";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [isSmallScreen] = useMediaQuery("(max-width: 900px)");
  const { onClose } = useDisclosure();

  const LogoutHandler = () => {
    logout();
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      p={2}
      color="#E2E8F0" // Light grey text color for contrast
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Link to="/">
        <HStack spacing={3} alignItems="center">
          <Img
            ml="4"
            h="60px"
            borderRadius="50%"
            src="RoZaana.png"
            alt="Logo"
          />
          <VStack align="start" spacing={0} lineHeight="1">
            <Text fontSize="2xl" fontWeight="bold" color="#EDF2F7">
              RoZaana
            </Text>
            <Text
              fontSize="sm"
              fontFamily="'Tiro Devanagari Hindi', serif"
              color="teal.300"
            >
              रोज आओ दिन बनाओ
            </Text>
          </VStack>
        </HStack>
      </Link>
      <Box>
        {isSmallScreen ? (
          <>
            {user ? (
              <HambargurNav>
                <VStack align="start">
                  <Text fontSize="lg" mb={2} color="#EDF2F7">
                    {user.email}
                  </Text>
                  <Button
                    colorScheme="teal"
                    variant="solid"
                    onClick={LogoutHandler}
                    size="sm"
                    bg="#2B6CB0" // Slightly lighter blue for buttons
                    _hover={{ bg: "#2C5282" }} // Darker blue on hover
                  >
                    Logout
                  </Button>
                  <Form />
                </VStack>
              </HambargurNav>
            ) : (
              <HamburgLogin />
            )}
          </>
        ) : (
          <HStack spacing={4}>
            {user ? (
              <>
                <Text fontSize="lg" color="#EDF2F7">
                  {user.email}
                </Text>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  onClick={LogoutHandler}
                  size="sm"
                  bg="#2B6CB0"
                  _hover={{ bg: "#2C5282" }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    size="sm"
                    color="#63B3ED" // Light blue outline button
                    borderColor="#63B3ED"
                    _hover={{ bg: "#2B6CB0", color: "white" }} // Change to solid on hover
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    colorScheme="teal"
                    variant="solid"
                    size="sm"
                    bg="#3182CE"
                    _hover={{ bg: "#2C5282" }}
                    color="white"
                  >
                    Signup
                  </Button>
                </Link>
              </>
            )}
          </HStack>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
