import MapWidget from '../../../componenets/MapWidget';
import WeatherWidget from '../../../componenets/WeatherWidget';
import './TourWidgets.css';

function TourWidgets({ lat, lon }) {
  return (
    <section className="tourWidgetsSection">
      <div className="tourWidget tourMapWidget"> <MapWidget /> </div>
      <div className="tourWidget tourWeatherWidget"> <WeatherWidget lat={lat} lon={lon} /> </div>
    </section>
  );
}

export default TourWidgets;
