const { Router } = require("express");
const CreateOrderController = require("../controllers/createOrder/CreateOrderController");
const FindOrderController = require("../controllers/findOrder/FindOrderController");

const order = Router();

order.post("/order", CreateOrderController.store);

order.get("/orders", FindOrderController.index);

module.exports = order;
