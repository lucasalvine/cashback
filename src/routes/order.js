const { Router } = require("express");
const CreateOrderController = require("../controllers/createOrder/CreateOrderController");

const order = Router();

order.post("/order", CreateOrderController.store);

order.get("/orders");

module.exports = order;
