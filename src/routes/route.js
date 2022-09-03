const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

router.get("/getWeather", controller.getWeather);

router.get("/getWeatherOfCities", controller.getWeatherOfCities);

router.post("/createMeme", controller.createMeme);

router.get("/getByDistrict", controller.getByDistrict);

module.exports = router;
