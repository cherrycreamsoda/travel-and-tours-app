import { Link } from 'react-router-dom';
import destinations from '../../../data/destinations';
import './Destinations.css';

function Destinations() {
  const destinationFeed = [...destinations, ...destinations];

  return (
    <div className="destinationSection">
      <div className="destinationSlider">
        <div className="destinationTrack">
          {destinationFeed.map((destination, index) => (
            <Link
              className="destinationCard"
              key={`${destination.name}-${index}`}
              to={destination.link}
            >
              <img src={destination.image || null} alt={destination.name} />
              <span>{destination.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <Link className="destinationListButton" to="/destinations">
        View More Destinations
      </Link>
    </div>
  );
}

export default Destinations;