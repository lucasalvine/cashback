require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const express = require("express");
const morgan = require("morgan");

const session = require("./app/routes/session");
const client = require("./app/routes/client");
const order = require("./app/routes/order");

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(morgan("combined"));

    this.server.use(client);
    this.server.use(order);

    this.server.use(session);
  }
}

module.exports = new App().server;
