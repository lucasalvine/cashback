const { Router } = require("express");
const CreateClientController = require("../controllers/createClient/CreateClientController");
const FindCashbackController = require("../controllers/findCashback/FindCashbackController");

const client = Router();

client.post("/clients", CreateClientController.store);

//TODO CHANGE TO OTHER ROUTE FILE
client.get("/cashback_accumulated", FindCashbackController.index);

module.exports = client;
