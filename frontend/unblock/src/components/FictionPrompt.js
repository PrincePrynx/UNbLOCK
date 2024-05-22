// src/components/FictionPrompt.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FictionPrompt = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await axios.get('https://unblock-nelt.onrender.com/api/prompts/fiction');
        setPrompts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the fiction prompts", error);
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Fiction Prompts</h1>
      <ul>
        {prompts.map((prompt, index) => (
          <li key={index}>{prompt}</li>
        ))}
      </ul>
    </div>
  );
};

export default FictionPrompt;
