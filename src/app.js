const express = require("express");
const morgan = require("morgan");

const teste = require("./routes/client");

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

    this.server.use(teste);
  }
}

module.exports = new App().server;
