import React, { useEffect, useState } from 'react'
import "./WeatherWidget.css"

function WeatherWidget( { coordinates } ) {

  const [weatherData , setWeatherData] = useState()

    useEffect(() => {
      if (coordinates !== null) {
        const fetchWeather = async () => {
          const response = await fetch(`https://api.open-meteo.com/v1/forecast?
            latitude=${coordinates[0]}&longitude=${coordinates[1]}
            &current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`)
          const data = await response.json()
          console.log({temperature : data.current.temperature_2m , humidityPercentage:data.current.relative_humidity_2m , feelsLike : data.current.apparent_temperature , weatherIcon: data.current.weather_code})
        }
      }
    },[coordinates])

  return (
    <div className='weatherWidget'>WeatherWidget</div>
  )
}

export default WeatherWidget