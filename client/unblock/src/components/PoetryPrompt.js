// PoetryPrompt.js - Component for displaying poetry prompts

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PoetryPrompt = ({ name }) => {
  const [prompt, setPrompt] = useState('');

  // Function to fetch a poetry prompt from the backend
  const fetchPoetryPrompt = async () => {
    try {
      const response = await axios.get('/poetry');
      setPrompt(response.data.prompt);
    } catch (error) {
      console.error('Error fetching poetry prompt:', error);
    }
  };

  // Fetch a poetry prompt when the component mounts
  useEffect(() => {
    fetchPoetryPrompt();
  }, []);

  return (
    <div>
      <h2>Poetry Prompt</h2>
      <p>Hello, {name}! Here's your poetry prompt:</p>
      <p>{prompt}</p>
      <button onClick={fetchPoetryPrompt}>Refresh</button>
    </div>
  );
};

export default PoetryPrompt;
