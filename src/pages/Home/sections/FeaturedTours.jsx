import { Link } from 'react-router-dom';
import tours from '../../../data/tours';
import './FeaturedTours.css';

function FeaturedTours() {
  return (
    <section className="featuredToursSection">
      <h2>Featured tours</h2>
      <div className="featuredToursGrid">
        {tours.map((tour) => (
          <Link className="tourCard" key={tour.name} to={tour.link}>
            <h3>{tour.name}</h3>
            <div className="tourDestinations">
              {tour.destinations.map((destination, index) => (
                <div
                  className="tourDestination"
                  key={destination.name}
                  style={{ '--destination-index': index }}
                >
                  <img src={destination.image || null} alt={destination.name} />
                  <span>{destination.name}</span>
                </div>
              ))}
            </div>
            <p className="tourDays">{tour.days}</p>
            <p className="tourDescription">{tour.description}</p>
            <span className="tourPrice">{tour.price}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedTours;
