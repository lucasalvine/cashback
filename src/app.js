const express = require("express");
const morgan = require("morgan");

const client = require("./routes/client");
const order = require("./routes/order");

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
  }
}

module.exports = new App().server;
