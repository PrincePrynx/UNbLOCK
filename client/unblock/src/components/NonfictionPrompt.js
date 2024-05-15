// NonfictionPrompt.js - Component for displaying nonfiction prompts

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NonfictionPrompt = ({ name }) => {
  const [prompt, setPrompt] = useState('');

  // Function to fetch a nonfiction prompt from the backend
  const fetchNonfictionPrompt = async () => {
    try {
      const response = await axios.get('/nonfiction');
      setPrompt(response.data.prompt);
    } catch (error) {
      console.error('Error fetching nonfiction prompt:', error);
    }
  };

  // Fetch a nonfiction prompt when the component mounts
  useEffect(() => {
    fetchNonfictionPrompt();
  }, []);

  return (
    <div>
      <h2>Nonfiction Prompt</h2>
      <p>Hello, {name}! Here's your nonfiction prompt:</p>
      <p>{prompt}</p>
      <button onClick={fetchNonfictionPrompt}>Refresh</button>
    </div>
  );
};

export default NonfictionPrompt;
