require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const express = require("express");
const morgan = require("morgan");

const session = require("./app/routes/session");
const client = require("./app/routes/client");
const order = require("./app/routes/order");
const cashback = require("./app/routes/cashback");
var winston = require("./app/config/winston");

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
    this.server.use(morgan("combined", { stream: winston.stream }));

    this.server.use(client);
    this.server.use(order);
    this.server.use(session);
    this.server.use(cashback);
  }
}

module.exports = new App().server;
