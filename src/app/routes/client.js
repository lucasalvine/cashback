const { Router } = require("express");
const CreateClientController = require("../controllers/createClient/CreateClientController");

const client = Router();

client.post("/clients", CreateClientController.store);

module.exports = client;
