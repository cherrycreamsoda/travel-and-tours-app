import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import tours from '../../data/tours';
import TourDescription from './sections/TourDescription';
import TourGallery from './sections/TourGallery';
import TourWidgets from './sections/TourWidgets';
import './Tour.css';

function Tour() {
  const { tourSlug } = useParams();
  const tour = tours.find((item) => item.slug === tourSlug);
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);

  if (!tour) {
    return (
      <main className="tourPage">
        <h1>Tour not found</h1>
        <Link to="/tours">Back to tours</Link>
      </main>
    );
  }

  return (
    <main className="tourPage">
      <header className="tourPageHeader">
        <Link className="backToTours" to="/tours">
          Back to tours
        </Link>
        <h1>{tour.name}</h1>
        <p>{tour.days}</p>
      </header>
      <div className="tourPageTopRow">
        <TourGallery
          destinations={tour.destinations}
          selectedIndex={selectedDestinationIndex}
          onSelect={setSelectedDestinationIndex}
        />
        <TourWidgets lat={tour.destinations[selectedDestinationIndex].lat} lon={tour.destinations[selectedDestinationIndex].lon} />
      </div>
      <TourDescription tour={tour} />
    </main>
  );
}

export default Tour;
