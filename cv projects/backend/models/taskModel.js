const db = require("../db/knex");

const getTasks = () => db("tasks").select("*");

const createTask = (task) => db("tasks").insert(task);

const updateTask = (id, task) => db("tasks").where({ id }).update(task);

const deleteTask = (id) => db("tasks").where({ id }).del();

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
