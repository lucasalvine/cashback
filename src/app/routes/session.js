const { Router } = require("express");
const FindSessionController = require("../controllers/findSession/FindSessionController");

const session = Router();

session.post("/session", FindSessionController.store);

module.exports = session;
