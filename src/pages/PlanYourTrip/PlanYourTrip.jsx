import { useState } from 'react';
import destinations from '../../data/destinations';
import './PlanYourTrip.css';

function PlanYourTrip() {
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [isDestinationMenuOpen, setIsDestinationMenuOpen] = useState(false);

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

  return (
    <main className="planYourTripPage">
      <header className="plannerHeader">
        <h1>Planner</h1>
        <p>Build a trip around the destinations you want to visit.</p>
      </header>
      <form className="plannerForm">
        <div className="plannerBlock plannerRouteBlock">
          <label>
            Departure from
            <input name="departure" type="text" />
          </label>
          <div className="plannerDestinationField">
            <span>Destinations</span>
            <div className="plannerDestinationDropdown">
              <button
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
                <div className="plannerDestinationMenu">
                  {destinations.map((destination) => {
                    const isSelected = selectedDestinations.includes(destination);

                    return (
                      <label className="plannerDestinationOption" key={destination.name}>
                        <input
                          checked={isSelected}
                          onChange={() => toggleDestination(destination)}
                          type="checkbox"
                        />
                        <span>{destination.name}</span>
                        <strong>${destination.price}</strong>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <strong className="plannerPrice">Show price: ${totalPrice}</strong>
        </div>
        <div className="plannerBlock plannerNameBlock">
          <label>
            First Name
            <input name="firstName" type="text" />
          </label>
          <label>
            Last Name
            <input name="lastName" type="text" />
          </label>
        </div>
        <div className="plannerBlock">
          <label>
            Email Address
            <input name="email" type="email" />
          </label>
        </div>
        <div className="plannerBlock">
          <label>
            Note from customer
            <textarea name="note" />
          </label>
        </div>
      </form>
    </main>
  );
}

export default PlanYourTrip;