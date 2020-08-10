const { Router } = require("express");
const FindSessionController = require("../controllers/findSession/FindSessionController");

const session = Router();

session.post("/sessions", FindSessionController.store);

module.exports = session;
