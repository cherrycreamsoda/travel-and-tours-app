import { Link } from 'react-router-dom';
import './TourDescription.css';

function TourDescription({ tour }) {
  const itineraryByDay = tour.itinerary.reduce((days, item) => {
    if (!days[item.day]) {
      days[item.day] = [];
    }
    days[item.day].push(item);
    return days;
  }, {});

  return (
    <section className="tourDescriptionSection">
      <div className="tourItinerary">
        <h2>Itinerary</h2>
        <div className="itineraryDays">
          {Object.entries(itineraryByDay).map(([day, items]) => (
            <div className="itineraryDay" key={day}>
              <h3>{day}</h3>
              <ul>
                {items.map((item, index) => (
                  <li key={`${day}-${item.time || index}`}>
                    {item.time && <span className="itineraryTime">{item.time}:</span>}
                    {item.activity && <span className="itineraryActivity">{item.activity}</span>}
                    {item.destination && (
                      <Link to={item.destination.link}>{item.destination.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
