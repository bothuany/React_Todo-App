import { Box, Container, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import axios from "axios";
import AddTodo from "./AddTodo";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Todos() {
  const [todos, setTodos] = useState([]);
  const { width } = useWindowDimensions();

  const getTodos = async () => {
    axios
      .get("https://63138c8db466aa9b039ba12d.mockapi.io/todos")
      .then((res) => res.data)
      .then((data) => setTodos(data));
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Container
      d="flex"
      height={"80vh"}
      width={width > 768 ? "40vw" : "100vw"}
      centerContent
    >
      <Heading color={"white"} mb={3}>
        To Do List
      </Heading>
      <Box
        overflowY={"scroll"}
        w="100%"
        minHeight={width > 768 ? "70vh" : "50vh"}
      >
        {todos?.map((todo, index) => (
          <Todo
            id={todo.id}
            content={todo.content}
            isCompleted={todo.isCompleted}
            setTodos={setTodos}
            getTodos={getTodos}
            key={index}
          ></Todo>
        ))}
      </Box>

      <AddTodo getTodos={getTodos} setTodos={setTodos} />
    </Container>
  );
}

export default Todos;
