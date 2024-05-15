// DialoguePrompt.js - Component for displaying dialogue prompts

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DialoguePrompt = ({ name }) => {
  const [prompt, setPrompt] = useState('');

  // Function to fetch a dialogue prompt from the backend
  const fetchDialoguePrompt = async () => {
    try {
      const response = await axios.get('/dialogue');
      setPrompt(response.data.prompt);
    } catch (error) {
      console.error('Error fetching dialogue prompt:', error);
    }
  };

  // Fetch a dialogue prompt when the component mounts
  useEffect(() => {
    fetchDialoguePrompt();
  }, []);

  return (
    <div>
      <h2>Dialogue Prompt</h2>
      <p>Hello, {name}! Here's your dialogue prompt:</p>
      <p>{prompt}</p>
      <button onClick={fetchDialoguePrompt}>Refresh</button>
    </div>
  );
};

export default DialoguePrompt;
