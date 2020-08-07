require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const path = require("path");

module.exports = {
  database: process.env.DATABASE,
  storage: path.resolve(__dirname, process.env.STORAGE),
  dialect: "sqlite",
};
