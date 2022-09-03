import React, { useState, useEffect } from "react";

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Container,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const toast = useToast();

  const handleUsernameChange = (e) => setUsername(e.target.value);

  useEffect(() => {
    const user = localStorage.getItem("userInfo");

    if (user) {
      navigate("/todos");
    }
  }, [navigate]);

  const handleSubmit = async () => {
    if (!username) {
      toast({
        title: "Error",
        position: "bottom-right",
        description: "Username is required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    localStorage.setItem("userInfo", username);
    toast({
      title: "Login Success",
      position: "bottom-right",
      description: "Welcome to your to do app",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/todos");

    setIsLoading(false);
  };
  return (
    <Container maxW="550px" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="30px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="5xl" fontFamily="Roboto" color="rgb(52, 64, 88)">
          Todo App
        </Text>
      </Box>
      <Box
        p={4}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <VStack spacing="20px">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              onChange={handleUsernameChange}
              value={username}
              type="text"
            />
          </FormControl>

          <Button
            width="100%"
            isLoading={isLoading}
            colorScheme="telegram"
            variant="solid"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}

export default LoginPage;
