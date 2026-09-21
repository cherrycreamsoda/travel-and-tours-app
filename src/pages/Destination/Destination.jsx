import { useNavigate, useParams } from 'react-router-dom';
import DestinationMap from './sections/DestinationMap';
import destinations from '../../data/destinations';
import './Destination.css';

function Destination() {
  const { destinationSlug } = useParams();
  const navigate = useNavigate();
  const selectedDestinationLink =
    destinations.find((destination) => destination.link.endsWith(`/${destinationSlug}`))?.link || destinations[0].link;

  function navigateTo(link) {
    navigate(link);
  }

  return (
    <main className="destinationPage">
      <aside className="destinationList">
        <h1>Destinations</h1>
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
      <DestinationMap selectedDestinationLink={selectedDestinationLink} navigateTo={navigateTo} />
    </main>
  );
}

export default Destination;