module.exports = app => {
const rouletteResult = require("../controllers/roulette.controller.js");

var router = require("express").Router();

// Get all
router.get("/", rouletteResult.findAll);

app.use("/api/roulette",router);
}