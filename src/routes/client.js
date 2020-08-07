const { Router } = require("express");
const CreateClientController = require("../controllers/createClient/CreateClientController");

const client = Router();

client.post("/client", CreateClientController.store);
client.get();

module.exports = client;
