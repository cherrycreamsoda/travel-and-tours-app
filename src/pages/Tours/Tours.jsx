import tours from '../../data/tours';
import './Tours.css';

function Tours() {
  return (
    <main className="toursPage">
      <header className="toursHeader">
        <h1>All tours</h1>
        <p>Explore every tour currently available.</p>
      </header>
      <div className="toursList">
        {tours.map((tour) => (
          <article className="tourListItem" key={tour.name}>
            <div className="tourListHeader">
              <h2>{tour.name}</h2>
              <span className="tourListPrice">{tour.price}</span>
            </div>
            <p className="tourListDuration">Duration: {tour.days}</p>
            <ul className="tourDestinationsList">
              {tour.destinations.map((destination) => (
                <li key={destination.name}>
                  <img
                    src={destination.image || null}
                    alt={destination.name}
                  />
                  <span>{destination.name}</span>
                </li>
              ))}
            </ul>
            <p className="tourListDescription">{tour.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Tours;