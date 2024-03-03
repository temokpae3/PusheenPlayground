import './App.css';
import React, { useState } from 'react';
import './App.css';
import ActionButtons from './components/JSComponents/ActionButtons';
import PetDisplay from './components/JSComponents/PetDisplay';

function App() {
  const [hungerLevel, setHungerLevel] = useState(50);
  const [happinessLevel, setHappinessLevel] = useState(50);
  const [batheLevel, setBatheLevel] = useState(50);

  return (
    <div className="App">
      <h1>Her Pusheen Playground</h1>
      <PetDisplay hungerLevel={hungerLevel} happinessLevel={happinessLevel} batheLevel={batheLevel} />
      <ActionButtons 
        hungerLevel={hungerLevel} 
        setHungerLevel={setHungerLevel} 
        happinessLevel={happinessLevel} 
        setHappinessLevel={setHappinessLevel}
        batheLevel={batheLevel}
        setBatheLevel={setBatheLevel}
      />
    </div>
  );
}

export default App;
