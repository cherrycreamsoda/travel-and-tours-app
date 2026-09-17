import { Link } from 'react-router-dom';
import Destinations from './sections/Destinations';
import FeaturedTours from './sections/FeaturedTours';
import Team from './sections/Team';
import CustomerFeedback from './sections/CustomerFeedback';
import './Home.css';

function Home() {
  return (
    <div className="homePage">
      <div className="homeHero" />
      <Link className="letsGoButton" to="/explore">
        Lets Go Together!
      </Link>
      <Destinations />
      <FeaturedTours />
      <Team />
      <CustomerFeedback />
    </div>
  );
}

export default Home;