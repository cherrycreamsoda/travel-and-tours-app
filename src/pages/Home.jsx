import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="homePage">
      <div className="sliderDestinations" />
      <Link className="letsGoButton" to="/explore">
        Lets Go Together!
      </Link>
    </div>
  );
}

export default Home;