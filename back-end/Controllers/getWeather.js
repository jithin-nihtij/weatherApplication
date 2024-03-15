const weatherData = require("./WeatherSchema")

const getWeather = async(req,res)=>{
    const weather = await weatherData.find()
    res.json(weather)
}

module.exports = getWeather