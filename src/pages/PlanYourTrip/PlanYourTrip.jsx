import { useEffect, useRef, useState } from 'react';
import destinations from '../../data/destinations';
import './PlanYourTrip.css';

function PlanYourTrip() {
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [isDestinationMenuOpen, setIsDestinationMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [plannerError, setPlannerError] = useState('');
  const destinationDropdownRef = useRef(null);

  useEffect(() => {
    function closeDestinationMenu(event) {
      if (destinationDropdownRef.current && !destinationDropdownRef.current.contains(event.target)) {
        setIsDestinationMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', closeDestinationMenu);
    return () => document.removeEventListener('mousedown', closeDestinationMenu);
  }, []);

  function toggleDestination(destination) {
    setSelectedDestinations((currentDestinations) => {
      const isSelected = currentDestinations.includes(destination);

      if (isSelected) {
        return currentDestinations.filter((item) => item !== destination);
      }

      return [...currentDestinations, destination];
    });
  }

  const totalPrice = selectedDestinations.reduce(
    (total, destination) => total + destination.price,
    0,
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (!selectedDestinations.length) {
      setPlannerError('Please select at least one destination.');
      return;
    }

    const formData = new FormData(event.currentTarget);
    const request = {
      departure: formData.get('departure'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      note: formData.get('note'),
      destinations: selectedDestinations.map((destination) => destination.name),
      totalPrice: `PKR ${totalPrice.toLocaleString()}`,
    };

    console.log('Trip planning request:', request);
    setPlannerError('');
    setIsDestinationMenuOpen(false);
    setIsSubmitted(true);
  }

  return (
    <main className="planYourTripPage">
      <header className="plannerHeader">
        <h1>Planner</h1>
        <p>Build a trip around the destinations you want to visit.</p>
      </header>
      <form className="plannerForm" onSubmit={handleSubmit}>
        <div className="plannerBlock plannerRouteBlock">
          <label>
            Departure from
            <input name="departure" required type="text" />
          </label>
          <div className="plannerDestinationField">
            <span>Destinations</span>
            <div className="plannerDestinationDropdown" ref={destinationDropdownRef}>
              <button
                aria-expanded={isDestinationMenuOpen}
                aria-haspopup="listbox"
                className="plannerDestinationTrigger"
                onClick={() => setIsDestinationMenuOpen((isOpen) => !isOpen)}
                type="button"
              >
                {selectedDestinations.length
                  ? `${selectedDestinations.length} destinations selected`
                  : 'Select destinations'}
                <span>{isDestinationMenuOpen ? '⌃' : '⌄'}</span>
              </button>
              {isDestinationMenuOpen && (
                <div aria-label="Select destinations" className="plannerDestinationMenu" role="listbox">
                  {destinations.map((destination) => {
                    const isSelected = selectedDestinations.includes(destination);

                    return (
                      <label className={`plannerDestinationOption ${isSelected ? 'selectedDestinationOption' : ''}`} key={destination.name}>
                        <input
                          checked={isSelected}
                          onChange={() => toggleDestination(destination)}
                          type="checkbox"
                        />
                        <span>{destination.name}</span>
                        <strong>PKR {destination.price.toLocaleString()}</strong>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <strong className="plannerPrice">Show price: PKR {totalPrice.toLocaleString()}</strong>
        </div>
        <div className="plannerBlock plannerNameBlock">
          <label>
            First Name
            <input name="firstName" required type="text" />
          </label>
          <label>
            Last Name
            <input name="lastName" required type="text" />
          </label>
        </div>
        <div className="plannerBlock">
          <label>
            Email Address
            <input name="email" required type="email" />
          </label>
        </div>
        <div className="plannerBlock">
          <label>
            Note from customer
            <textarea name="note" required />
          </label>
        </div>
        <button className="plannerSubmitButton" type="submit">Submit Trip Request</button>
      </form>
      {plannerError && (
        <p className="plannerValidation" role="alert">{plannerError}</p>
      )}
      {isSubmitted && (
        <p className="plannerConfirmation" role="status">
          We will get in touch with you soon.
        </p>
      )}
    </main>
  );
}

export default PlanYourTrip;