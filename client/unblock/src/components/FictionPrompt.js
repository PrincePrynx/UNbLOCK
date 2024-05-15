// FictionPrompt.js - Component for displaying fiction prompts

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FictionPrompt = ({ name }) => {
  const [prompt, setPrompt] = useState('');

  // Function to fetch a fiction prompt from the backend
  const fetchFictionPrompt = async () => {
    try {
      const response = await axios.get('/fiction');
      setPrompt(response.data.prompt);
    } catch (error) {
      console.error('Error fetching fiction prompt:', error);
    }
  };

  // Fetch a fiction prompt when the component mounts
  useEffect(() => {
    fetchFictionPrompt();
  }, []);

  return (
    <div>
      <h2>Fiction Prompt</h2>
      <p>Hello, {name}! Here's your fiction prompt:</p>
      <p>{prompt}</p>
      <button onClick={fetchFictionPrompt}>Refresh</button>
    </div>
  );
};

export default FictionPrompt;
