// Home.js - React component for the Home page

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div className="unblock-block">
        <h1>UNbLOCK</h1>
        <p>Type your name here:</p>
        <input type="text" id="nameInput" placeholder="Your Name" />
        <button id="startButton">Start</button>
      </div>
      <div id="promptGenerator" className="hidden">
        <h2>Welcome, <span id="userName"></span>!</h2>
        <label htmlFor="categorySelect">Choose a category:</label>
        <select id="categorySelect">
          <option value="dialogue"><Link to="/dialogue">Dialogue</Link></option>
          <option value="poetry"><Link to="/poetry">Poetry</Link></option>
          <option value="nonfiction"><Link to="/nonfiction">Nonfiction</Link></option>
          <option value="fiction"><Link to="/fiction">Fiction</Link></option>
        </select>
        <button id="generateButton">Generate Prompt</button>
        <div id="promptResult"></div>
      </div>
    </main>
  );
};

export default Home;
