import React, { useState } from 'react';
import './Popup.css'; // Import CSS styles for the pop-up

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button type="button" onClick={togglePopup}>Open Pop-up</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Pop-up Content</h2>
            <p>This is the content of the pop-up.</p>
            <button type="button" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
