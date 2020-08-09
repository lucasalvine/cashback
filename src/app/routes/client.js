const { Router } = require("express");
const CreateClientController = require("../controllers/createClient/CreateClientController");
const FindCashbackController = require("../controllers/findCashback/FindCashbackController");

const client = Router();

client.post("/client", CreateClientController.store);

client.get("/cashback_accumulated", FindCashbackController.index);

module.exports = client;
