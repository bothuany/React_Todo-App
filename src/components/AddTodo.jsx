import { Box, Input, FormControl } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

function AddTodo({ getTodos, setTodos }) {
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      if (content.length < 3) {
        toast({
          title: "Error",
          position: "bottom-right",
          description: "At least 3 characters",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      setTodos((prev) => [...prev, { content, isCompleted: false }]);
      await axios.post("https://63138c8db466aa9b039ba12d.mockapi.io/todos", {
        content: content,
        isCompleted: false,
      });

      await getTodos();
      setContent("");
    }
  };

  return (
    <Box w="100%">
      <FormControl>
        <Input
          onChange={handleChange}
          color="white"
          value={content}
          placeholder="Enter a to do"
          size="lg"
          onKeyDown={handleKeyDown}
        />
      </FormControl>
    </Box>
  );
}

export default AddTodo;
