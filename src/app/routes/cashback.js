const { Router } = require("express");
const FindCashbackController = require("../controllers/findCashback/FindCashbackController");

const cashback = Router();

cashback.get("/cashback_accumulated", FindCashbackController.index);

module.exports = cashback;
