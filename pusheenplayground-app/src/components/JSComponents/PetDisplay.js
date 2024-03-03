/* PetDisplay.js */
import React from 'react';
import '../CSSComponents/PetDisplay.css'; // Import the CSS file for styling

// Pet status display function
function PetDisplay({ hungerLevel, happinessLevel, batheLevel }) {
  return (
    <div className="pet-container">
      <div className="status">
        <p className="status-text">Hunger: <span className="status-value">{hungerLevel}%</span></p>
        <p className="status-text">Happiness: <span className="status-value">{happinessLevel}%</span></p>
        <p className="status-text">Bathe: <span className="status-value">{batheLevel}%</span></p>
      </div>
    </div>
  );
}

export default PetDisplay;