import { useNavigate, useParams } from 'react-router-dom';
import ExploreMap from './sections/ExploreMap';
import destinations from '../../data/destinations';
import './Explore.css';

function Explore() {
  const { destinationSlug } = useParams();
  const navigate = useNavigate();
  const selectedDestination =
    destinations.find((destination) => destination.link.endsWith(`/${destinationSlug}`)) || destinations[0];

  return (
    <main className="explorePage">
      <aside className="exploreDestinations">
        <h1>Explore destinations</h1>
        <ul>
          {destinations.map((destination) => (
            <li key={destination.name}>
              <button
                className={selectedDestination.name === destination.name ? 'selectedDestination' : ''}
                onClick={() => navigate(`/explore/${destination.link.split('/').pop()}`)}
                type="button"
              >
                {destination.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <ExploreMap selectedDestinationPosition={[selectedDestination.lat , selectedDestination.lon]} />
    </main>
  );
}

export default Explore;