// src/components/NonfictionPrompt.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NonfictionPrompt = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/prompts/nonfiction');
        setPrompts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the nonfiction prompts", error);
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
      <h1>Nonfiction Prompts</h1>
      <ul>
        {prompts.map((prompt, index) => (
          <li key={index}>{prompt}</li>
        ))}
      </ul>
    </div>
  );
};

export default NonfictionPrompt;
