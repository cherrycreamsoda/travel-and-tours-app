import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import destinations from '../../data/destinations';
import Destinations from './sections/Destinations';
import FeaturedTours from './sections/FeaturedTours';
import Team from './sections/Team';
import CustomerFeedback from './sections/CustomerFeedback';
import './Home.css';

const heroDestinations = destinations.filter((destination) => (
  ['Neelum Valley', 'Skardu', 'Kumrat Valley'].includes(destination.name)
));

function Home() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  useEffect(() => {
    const heroInterval = window.setInterval(() => {
      setActiveHeroIndex((currentIndex) => (currentIndex + 1) % heroDestinations.length);
    }, 6000);

    return () => window.clearInterval(heroInterval);
  }, []);

  return (
    <div className="homePage">
      <div className="homeHero" aria-label="Featured destinations">
        {heroDestinations.map((destination, index) => (
          <img
            className={`heroImage ${index === activeHeroIndex ? 'activeHeroImage' : ''}`}
            key={destination.name}
            src={destination.image}
            alt={destination.name}
          />
        ))}
        <div className="heroContent" key={activeHeroIndex}>
          <span>Explore</span>
          <strong>{heroDestinations[activeHeroIndex].name}</strong>
        </div>
        <div className="heroCta">
          <span className="heroCtaEyebrow">Start your journey</span>
          <strong>Lets go together</strong>
          <div className="heroCtaActions">
            <Link className="heroCtaButton heroCtaPlan" to="/plan-your-trip">
              Plan Your Trip
            </Link>
            <Link className="heroCtaButton heroCtaTours" to="/tours">
              Tours
            </Link>
          </div>
        </div>
      </div>
      <div className="heroIndicators" aria-label="Choose featured destination">
        {heroDestinations.map((destination, index) => (
          <button
            aria-label={`Show ${destination.name}`}
            className={`heroIndicator ${index === activeHeroIndex ? 'activeHeroIndicator' : ''}`}
            key={destination.name}
            onClick={() => setActiveHeroIndex(index)}
            type="button"
          />
        ))}
      </div>
      <Destinations />
      <FeaturedTours />
      <Team />
      <CustomerFeedback />
    </div>
  );
}

export default Home;