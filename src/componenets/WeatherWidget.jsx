import React, { useEffect } from 'react'
import "./WeatherWidget.css"

function WeatherWidget( {coordinates} ) {
    useEffect(()=>{
      if (coordinates !== null) {
        console.log(coordinates)
      }
    },[coordinates])

  return (
    <div className='weatherWidget'>WeatherWidget started</div>
  )
}

export default WeatherWidget