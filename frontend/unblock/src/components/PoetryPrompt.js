// PoetryPrompt.js - React component for displaying poetry prompts

import React, { useState } from 'react';
import axios from 'axios';

const PoetryPrompt = () => {
  const [prompt, setPrompt] = useState('');

  const fetchPrompt = async () => {
    try {
      const response = await axios.post('http://localhost:3001/generate-prompt', { category: 'poetry' });
      setPrompt(response.data.prompt);
    } catch (error) {
      console.error('Error fetching prompt:', error);
    }
  };

  return (
    <div>
      <h2>Poetry Prompt</h2>
      <button onClick={fetchPrompt}>Generate Prompt</button>
      {prompt && <p>{prompt}</p>}
    </div>
  );
};

export default PoetryPrompt;
