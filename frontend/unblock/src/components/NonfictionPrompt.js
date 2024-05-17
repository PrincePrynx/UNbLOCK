// NonfictionPrompt.js - React component for displaying nonfiction prompts

import React, { useState } from 'react';
import axios from 'axios';

const NonfictionPrompt = () => {
  const [prompt, setPrompt] = useState('');

  const fetchPrompt = async () => {
    try {
      const response = await axios.post('http://localhost:3001/generate-prompt', { category: 'nonfiction' });
      setPrompt(response.data.prompt);
    } catch (error) {
      console.error('Error fetching prompt:', error);
    }
  };

  return (
    <div>
      <h2>Nonfiction Prompt</h2>
      <button onClick={fetchPrompt}>Generate Prompt</button>
      {prompt && <p>{prompt}</p>}
    </div>
  );
};

export default NonfictionPrompt;
