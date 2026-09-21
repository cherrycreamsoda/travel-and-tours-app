import weatherCodes from '../data/weatherCodes.js'

import React, { useEffect, useState } from 'react'
import "./WeatherWidget.css"

function WeatherWidget( { destinationName, lat , lon } ) {
  const [weather,setWeather] = useState(null)

    useEffect(() => {
      if (lat !== null && lon !== null) {
        const fetchWeather = async () => {
          try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,is_day,wind_speed_10m`)
            const data = await response.json()
            const weatherCode = weatherCodes[data.current.weather_code]
            const weatherIcon = data.current.is_day === 1 ? weatherCode.icon : weatherCode.nightIcon || weatherCode.icon
            setWeather({temperature : data.current.temperature_2m , humidityPercentage:data.current.relative_humidity_2m , feelsLike : data.current.apparent_temperature , weatherIcon, description: weatherCode.description })
            console.log('[My Console] Weather data:', data)
          } catch (error) {
            console.error('[My Console] Error fetching weather:', error)
          }
        }
        fetchWeather()
      }
    },[lat, lon])

  const WeatherIcon = weather?.weatherIcon

  return (
    <div className='weatherWidget'>{
      !weather ? (
        <div className="loading">LOADING</div>
      ) : (
        <div className="weather">
          <div className="weatherLeft">
            <div className="weatherHeader">
              <strong>{destinationName}</strong>
            </div>
            <div className="weatherTemperature">
              {weather.temperature}°C
            </div>
            <div className="weatherDetails">
              <div>
                <span>Feels like</span>
                <strong>{weather.feelsLike}°C</strong>
              </div>
              <div>
                <span>Humidity</span>
                <strong>{weather.humidityPercentage}%</strong>
              </div>
            </div>
          </div>
          <div className="weatherRight">
            {WeatherIcon && <WeatherIcon className="weatherIcon" />}
            <strong>{weather.description}</strong>
          </div>
        </div>
      )
    }</div>
  )
}

export default WeatherWidget