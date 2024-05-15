// App.js - Main component for the React app

import React, { useState } from 'react';
import DialoguePrompt from './components/DialoguePrompt';
import PoetryPrompt from './components/PoetryPrompt';
import NonfictionPrompt from './components/NonfictionPrompt';
import FictionPrompt from './components/FictionPrompt';

const App = () => {
  const [name, setName] = useState('');

  // Function to handle input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to UNbLOCK</h1>
      <p>Please enter your name:</p>
      <input type="text" value={name} onChange={handleChange} />
      {name && (
        <div>
          <DialoguePrompt name={name} />
          <PoetryPrompt name={name} />
          <NonfictionPrompt name={name} />
          <FictionPrompt name={name} />
        </div>
      )}
    </div>
  );
};

export default App;
