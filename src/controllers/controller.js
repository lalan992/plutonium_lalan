const axios = require("axios");

const getWeather = async function (req, res) {
  try {
    let city = req.query.city;
    let key = req.query.key;
    var options = {
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
    };

    let result = await axios(options);
    // console.log(result.data);
    // res.status(200).send({ msg: result.data });
    res.status(200).send({
      msg: {
        city: result.data.name,
        temp: result.data.main.temp + " kelvin",
      },
    } );
  } catch (err) {
    // console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
const getWeatherOfCities = async function (req, res) {
  try {
    let cities = req.body.cities;
    let key = req.query.key;
    let results = [];
    // console.log(cities);
    for (let city of cities) {
      var options = {
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
      };
      let result = await axios(options);
      results.push({ city: result.data.name, temp: result.data.main.temp });
    }
    results.sort((a, b) => {
      return a.temp - b.temp;
    });
    // console.log(sortedCities);
    res.status(200).send({
      msg: results,
    });
  } catch (err) {
    // console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

const createMeme = async function (req, res) {
  try {
    let id = req.query.template_id;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let username = req.query.username;
    let password = req.query.password;
    console.log(username, password);
    let options = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=imgflip%23992`,
    };
    let result = await axios(options);
    console.log(result);

    res.status(200).send({ msg: result.data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

let getByDistrict = async function (req, res) {
  try {
      let districtId = req.query.districtId
      let date = req.query.date
      // console.log(`query params are: ${districtId} ${date}`)
      var options = {
          method: "get",
          url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
      }
      let result = await axios(options)
      // console.log(result.data)
      res.status(200).send({ msg: result.data })
  }
  catch (err) {
      // console.log(err)
      res.status(500).send({ msg: err.message })
  }
}
module.exports = {
  getWeather,
  getWeatherOfCities,
  createMeme,
  getByDistrict
};
