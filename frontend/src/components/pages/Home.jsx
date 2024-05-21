// src/components/Home.js

import React, { useState } from "react";
import DialoguePrompt from "../prompts/DialoguePrompt";
import FictionPrompt from "../prompts/FictionPrompt";
import NonfictionPrompt from "../prompts/NonfictionPrompt";
import PoetryPrompt from "../prompts/PoetryPrompt";
import "./Home.css";

const Home = () => {
  const [name, setName] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setEnteredName(name);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="home-container">
      <h1>
        UN<span>b</span>LOCK
      </h1>
      <p>[ a writer's best friend ]</p>
      {!enteredName ? (
        <form onSubmit={handleNameSubmit}>
          <label htmlFor="name">
            Hi! Enter your name<br></br>and let's get writing<br></br>
          </label>
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
        <>
          {!selectedCategory ? (
            <div className="prompt-generator-options">
              <h2>Hello, {enteredName}! Choose a prompt category:</h2>
              <button onClick={() => handleCategorySelect("dialogue")}>
                Dialogue
              </button>
              <button onClick={() => handleCategorySelect("fiction")}>
                Fiction
              </button>
              <button onClick={() => handleCategorySelect("nonfiction")}>
                Nonfiction
              </button>
              <button onClick={() => handleCategorySelect("poetry")}>
                Poetry
              </button>
            </div>
          ) : (
            <div>
              {selectedCategory === "dialogue" && <DialoguePrompt />}
              {selectedCategory === "fiction" && <FictionPrompt />}
              {selectedCategory === "nonfiction" && <NonfictionPrompt />}
              {selectedCategory === "poetry" && <PoetryPrompt />}
            </div>
          )}
        </>
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
