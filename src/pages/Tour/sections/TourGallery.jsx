import './TourGallery.css';

function TourGallery({ destinations, selectedIndex, onSelect }) {
  const selectedDestination = destinations[selectedIndex];

  return (
    <section className="tourImagesSection">
      <div className="selectedTourImage">
        <img
          src={selectedDestination.image || null}
          alt={selectedDestination.name}
        />
      </div>
      <div className="tourImageList">
        {destinations.map((destination, index) => (
          <button
            className={index === selectedIndex ? 'selectedThumbnail' : ''}
            key={destination.name}
            onClick={() => onSelect(index)}
            type="button"
          >
            <img src={destination.image || null} alt={destination.name} />
            <span>{destination.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default TourGallery;
