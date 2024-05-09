import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>UNbLOCK</h1>
      <p>A writer’s choice against creative block!</p>
      <Link to="/about">About</Link>
      <Link to="/creator">Creator</Link>
      <button>Enter</button>
    </div>
  );
};

export default LandingPage;

