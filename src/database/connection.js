const sequelize = require("sequelize");
const path = require("path");

const connection = new sequelize({
  dialect: "sqlite3",
  storage: path.resolve(__dirname, "database.sqlite"),
});

module.exports = connection;
