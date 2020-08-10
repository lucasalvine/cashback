const { Router } = require("express");
const CreateOrderController = require("../controllers/createOrder/CreateOrderController");
const FindOrderController = require("../controllers/findOrder/FindOrderController");
const authMiddleware = require("../middleware/auth");

const order = Router();

order.get("/orders", FindOrderController.index);

order.use(authMiddleware);
order.post("/orders", CreateOrderController.store);

module.exports = order;
