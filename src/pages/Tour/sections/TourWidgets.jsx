import { useEffect, useState } from 'react';
import MapWidget from '../../../componenets/MapWidget';
import WeatherWidget from '../../../componenets/WeatherWidget';
import './TourWidgets.css';


function TourWidgets() {
  const [coordinates, setCoordinates] = useState(null)  //  [lat,lon]
  const locationName = "islamabad"
  
  useEffect(()=>{
    async function fetchCoordinates(){
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=1&language=en&format=json&countryCode=PK`)
      const data = await response.json()
      setCoordinates([data.results[0].latitude , data.results[0].longitude])
    }
    fetchCoordinates(locationName)
  },[])

  return (
    <section className="tourWidgetsSection">
      <div className="tourWidget tourMapWidget"> <MapWidget /> </div>
      <div className="tourWidget tourWeatherWidget"> <WeatherWidget coordinates={coordinates} /> </div>
    </section>
  );
}

export default TourWidgets;
