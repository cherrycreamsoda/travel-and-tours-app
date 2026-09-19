import React, { useEffect } from 'react'
import "./WeatherWidget.css"

function WeatherWidget( { lat , lon } ) {

    useEffect(() => {
      if (lat !== null && lon !== null) {
        const fetchWeather = async () => {
          try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`)
            const data = await response.json()
            console.log({temperature : data.current.temperature_2m , humidityPercentage:data.current.relative_humidity_2m , feelsLike : data.current.apparent_temperature , weatherIcon: data.current.weather_code})
          } catch (error) {
            console.error('Error fetching weather:', error)
          }
        }
        fetchWeather()
      }
    },[lat, lon])

  return (
    <div className='weatherWidget'>WeatherWidget</div>
  )
}

export default WeatherWidget