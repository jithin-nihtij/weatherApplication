const weatherData = require("./WeatherSchema")


const weatherCreate = async(req,res)=>{
    const {cityName} = req.body

    const createWeather = await weatherData.create({
        cityName
    })
    res.json(createWeather)
}

module.exports = weatherCreate