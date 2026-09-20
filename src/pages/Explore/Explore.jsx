import { useNavigate, useParams } from 'react-router-dom';
import ExploreMap from './sections/ExploreMap';
import destinations from '../../data/destinations';
import './Explore.css';

function Explore() {
  const { destinationSlug } = useParams();
  const navigate = useNavigate();
  const selectedDestinationLink =
    destinations.find((destination) => destination.link.endsWith(`/${destinationSlug}`))?.link || destinations[0].link;

  function navigateTo(link) {
    navigate(`/explore/${link.split('/').pop()}`);
  }

  return (
    <main className="explorePage">
      <aside className="exploreDestinations">
        <h1>Explore destinations</h1>
        <ul>
          {destinations.map((destination) => (
            <li key={destination.name}>
              <button
                className={selectedDestinationLink === destination.link ? 'selectedDestination' : ''}
                onClick={() => navigateTo(destination.link)}
                type="button"
              >
                {destination.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <ExploreMap selectedDestinationLink={selectedDestinationLink} navigateTo={navigateTo} />
    </main>
  );
}

export default Explore;