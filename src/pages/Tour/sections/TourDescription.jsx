import { Link } from 'react-router-dom';
import './TourDescription.css';

function TourDescription({ tour }) {
  return (
    <section className="tourDescriptionSection">
      <div className="tourItinerary">
        <h2>Itinerary</h2>
        <ol>
          {tour.itinerary.map((item) => (
            <li key={item.day}>
              <span>{item.day}</span>
              {item.destination ? (
                <>
                  <Link to={item.destination.link}>
                    {item.destination.name}
                  </Link>
                </>
              ) : (
                <span className="itineraryActivity">{item.activity}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
      <div className="tourDescriptionContent">
        <h2>About this tour</h2>
        <p>{tour.description}</p>
        <div className="tourBookingRow">
          <strong>{tour.price}</strong>
          <button type="button">Book Tour</button>
        </div>
      </div>
    </section>
  );
}

export default TourDescription;
