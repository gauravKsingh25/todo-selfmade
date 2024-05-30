const knex = require("knex");
const config = {
  client: "sqlite3",
  connection: {
    filename: "./todo.sqlite",
  },
  useNullAsDefault: true,
};

const db = knex(config);

db.schema.hasTable("tasks").then((exists) => {
  if (!exists) {
    return db.schema.createTable("tasks", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.string("description");
      table.boolean("completed").defaultTo(false);
    });
  }
});

module.exports = db;
