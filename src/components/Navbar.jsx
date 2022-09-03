import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user } = useUser();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <Box>
      <HStack d="flex" justifyContent="space-between">
        <Text color="white" fontFamily="Roboto">
          Welcome, {user}
        </Text>
        <Button colorScheme="red" onClick={logout}>
          Logout
        </Button>
      </HStack>
    </Box>
  );
}

export default Navbar;
