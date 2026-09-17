import destinations from '../../data/destinations';
import './Explore.css';

function Explore() {
  return (
    <main className="explorePage">
      <aside className="exploreDestinations">
        <h1>Explore destinations</h1>
        <ul>
          {destinations.map((destination) => (
            <li key={destination.name}>{destination.name}</li>
          ))}
        </ul>
      </aside>
      <div className="exploreMap">Map</div>
    </main>
  );
}

export default Explore;