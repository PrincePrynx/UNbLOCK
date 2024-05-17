// DialoguePrompt.js - React component for displaying dialogue prompts

import React, { useState } from 'react';
import axios from 'axios';

const DialoguePrompt = () => {
  const [prompt, setPrompt] = useState('');

  const fetchPrompt = async () => {
    try {
      const response = await axios.post('http://localhost:3001/generate-prompt', { category: 'dialogue' });
      setPrompt(response.data.prompt);
    } catch (error) {
      console.error('Error fetching prompt:', error);
    }
  };

  return (
    <div>
      <h2>Dialogue Prompt</h2>
      <button onClick={fetchPrompt}>Generate Prompt</button>
      {prompt && <p>{prompt}</p>}
    </div>
  );
};

export default DialoguePrompt;
