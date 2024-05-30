// src/components/TaskItem.jsx

import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { updateTask } from "../services/taskService"; // Import the updateTask function

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const handleComplete = async () => {
    const updatedTask = { ...task, completed: !task.completed };
    const result = await updateTask(task.id, updatedTask); // Use the updateTask function
    onTaskUpdated(result);
  };

  const handleDelete = async () => {
    await onTaskDeleted(task.id);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" className="task-title">
          {task.title}
        </Typography>
        <Typography variant="body2">{task.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color={task.completed ? "secondary" : "primary"}
          onClick={handleComplete}
        >
          {task.completed ? "Undo" : "Complete"}
        </Button>
        <Button size="small" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskItem;
