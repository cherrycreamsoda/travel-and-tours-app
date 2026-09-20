import MapWidget from '../../../componenets/MapWidget';
import WeatherWidget from '../../../componenets/WeatherWidget';
import './TourWidgets.css';

function TourWidgets({ destinationName, lat, lon }) {
  return (
    <section className="tourWidgetsSection">
      <div className="tourWidget tourMapWidget"> <MapWidget lat={lat} lon={lon} /> </div>
      <div className="tourWidget tourWeatherWidget"> <WeatherWidget destinationName={destinationName} lat={lat} lon={lon} /> </div>
    </section>
  );
}

export default TourWidgets;
