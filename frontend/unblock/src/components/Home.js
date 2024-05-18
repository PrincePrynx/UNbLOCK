// src/components/Home.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
// import './styles.css';
const Home = () => {
  const [name, setName] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setEnteredName(name);
  };

  const navigateToPrompt = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div className="home-container">
      <h1>UNbLOCK</h1>
      <p>[ a writer's best friend ]</p>
      {!enteredName ? (
        <form onSubmit={handleNameSubmit}>
          <label htmlFor="name">Type your name here:<br></br></label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <button type="submit">Enter</button>
        </form>
      ) : (
        <div className="prompt-generator-options">
          <h2>Hello, {enteredName}! Choose a prompt category:</h2>
          <button onClick={() => navigateToPrompt('dialogue')}>Dialogue</button>
          <button onClick={() => navigateToPrompt('fiction')}>Fiction</button>
          <button onClick={() => navigateToPrompt('nonfiction')}>Nonfiction</button>
          <button onClick={() => navigateToPrompt('poetry')}>Poetry</button>
        </div>
      )}
    </div>
  );
};

export default Home;






























// // Home.js - React component for the Home page

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <main>
//       <div className="unblock-block">
//         <h1>UNbLOCK</h1>
//         <p>Type your name here:</p>
//         <input type="text" id="nameInput" placeholder="Your Name" />
//         <button id="startButton">Start</button>
//       </div>
//       <div id="promptGenerator" className="hidden">
//         <h2>Welcome, <span id="userName"></span>!</h2>
//         <label htmlFor="categorySelect">Choose a category:</label>
//         <select id="categorySelect">
//           <option value="dialogue"><Link to="/dialogue">Dialogue</Link></option>
//           <option value="poetry"><Link to="/poetry">Poetry</Link></option>
//           <option value="nonfiction"><Link to="/nonfiction">Nonfiction</Link></option>
//           <option value="fiction"><Link to="/fiction">Fiction</Link></option>
//         </select>
//         <button id="generateButton">Generate Prompt</button>
//         <div id="promptResult"></div>
//       </div>
//     </main>
//   );
// };

// export default Home;
