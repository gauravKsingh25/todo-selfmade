// src/components/TaskList.jsx

import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import { getTasks, deleteTask } from "../services/taskService";
import { Container, Typography } from "@mui/material";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    loadTasks();
  }, []);

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskUpdated = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const handleTaskDeleted = async (taskId) => {
    await deleteTask(taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        To-Do List
      </Typography>
      <TaskForm onTaskCreated={handleTaskCreated} />
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskUpdated={handleTaskUpdated}
          onTaskDeleted={handleTaskDeleted}
        />
      ))}
    </Container>
  );
};

export default TaskList;
