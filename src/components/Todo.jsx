import { Box, Button, Checkbox, HStack, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Todo({ id, content, isCompleted, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);

  useEffect(() => {
    setNewContent(content);
  }, [content]);

  if (!isEditing) {
    const handleCheck = async () => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo
        )
      );
      await axios.put(
        `https://63138c8db466aa9b039ba12d.mockapi.io/todos/${id}`,
        {
          isCompleted: !isCompleted,
        }
      );
    };

    const handleDelete = async () => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      await axios.delete(
        `https://63138c8db466aa9b039ba12d.mockapi.io/todos/${id}`
      );
    };
    return (
      <Box
        display="flex"
        color="rgb(26, 32, 44)"
        backgroundColor="white"
        borderRadius="md"
        fontWeight={400}
        mb={2}
        width="100%"
        p={1}
        justifyContent="space-between"
      >
        <Checkbox
          size="lg"
          colorScheme={"blackAlpha"}
          defaultChecked={isCompleted}
          isChecked={isCompleted}
          onChange={handleCheck}
        >
          <Text as={isCompleted ? "s" : ""}>{content}</Text>
        </Checkbox>

        <HStack ml={2}>
          <Button
            size="xs"
            colorScheme={"teal"}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
          <Button size="xs" colorScheme={"red"} onClick={handleDelete}>
            X
          </Button>
        </HStack>
      </Box>
    );
  } else {
    const handleChangeEdit = (e) => {
      setNewContent(e.target.value);
    };
    const handleSaveEdit = async () => {
      setIsEditing(false);
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, content: newContent } : todo
        )
      );
      await axios.put(
        `https://63138c8db466aa9b039ba12d.mockapi.io/todos/${id}`,
        {
          content: newContent,
        }
      );
    };
    return (
      <Box
        display="flex"
        color="rgb(26, 32, 44)"
        backgroundColor="white"
        borderRadius="md"
        fontWeight={400}
        mb={2}
        width="100%"
        p={1}
        justifyContent="space-between"
      >
        <Input
          autoFocus
          value={newContent}
          onChange={handleChangeEdit}
          mr={4}
        />

        <HStack>
          <Button size="xs" colorScheme={"green"} onClick={handleSaveEdit}>
            Save
          </Button>
          <Button
            size="xs"
            colorScheme={"red"}
            onClick={() => setIsEditing(false)}
          >
            Exit
          </Button>
        </HStack>
      </Box>
    );
  }
}

export default Todo;
