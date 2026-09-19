import './TourGallery.css';

function TourGallery({ destinations, selectedIndex, onSelect }) {
  const selectedDestination = destinations[selectedIndex];

  return (
    <section className="tourImagesSection">
      <aside className="tourDestinationList">
        <h2>Destinations</h2>
        <div>
          {destinations.map((destination, index) => (
            <button
              className={index === selectedIndex ? 'selectedDestination' : ''}
              key={destination.name}
              onClick={() => onSelect(index)}
              type="button"
            >
              {destination.name}
            </button>
          ))}
        </div>
      </aside>
      <div className="selectedTourImage">
        <img
          src={selectedDestination.image || null}
          alt={selectedDestination.name}
        />
      </div>
    </section>
  );
}

export default TourGallery;
