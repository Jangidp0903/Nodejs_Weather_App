// Imports
const router = require("express").Router();
const axios = require("axios");

router.get("/", (req, res) => {
  res.render("index", { weather: null });
});

router.post("/", (req, res) => {
  var city = req.body.city;
  //   console.log(city);
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;

  axios
    .get(API_URL)
    .then((response) => {
      var data = response.data;
      const weather_Data = {
        city: data.name,
        description: data.weather[0].description,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        icon_url: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      };
      res.render("index", { weather: weather_Data });
    })
    .catch((err) => {
      console.log("Error ->", err);
    });
});

// Export
module.exports = router;
