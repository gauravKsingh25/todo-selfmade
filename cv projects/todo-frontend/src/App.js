// src/App.jsx

import React from "react";
import { Container, Typography } from "@mui/material";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        To-Do List
      </Typography>
      <TaskList />
    </Container>
  );
};

export default App;
