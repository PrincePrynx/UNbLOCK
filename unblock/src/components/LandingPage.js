import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LandingPage ({ setName }) {
  const [nameInput, setNameInput] = useState('');

  const handleInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleEnterClick = () => {
    setName(nameInput.trim());
  };

  return (
    <div className="landing-page">
      <h1 className="title">UNbLOCK</h1>
      <h3 className="slogan">A writer's choice against creative block!</h3>
      <input
        type="text"
        placeholder="Enter your name here"
        value={nameInput}
        onChange={handleInputChange}
      />
      <button onClick={handleEnterClick}>Enter</button>
      <div className="navigation">
        <Link to="/about">About</Link>
        <Link to="/creator">Creator</Link>
      </div>
    </div>
  );
};

export default LandingPage;
