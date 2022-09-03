import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Todos from "../components/Todos";
function TodosPage() {
  return (
    <Grid
      templateAreas={`"navbar navbar"
                  "todos todos"`}
      gridTemplateRows={"10% 1fr "}
      gridTemplateColumns={"33% 1fr"}
      h="100vh"
      gap="1"
    >
      <GridItem p="2" area={"navbar"}>
        <Navbar />
      </GridItem>
      <GridItem pl="2" area={"todos"}>
        <Todos />
      </GridItem>
    </Grid>
  );
}

export default TodosPage;
