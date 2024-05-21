import React, { useState, useEffect } from "react";
import { fetchPoetryPrompts } from "../../services/promptService";

const PoetryPrompt = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const data = await fetchPoetryPrompts();
        setPrompts(data);
        setLoading(false);
      } catch (error) {
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
      <h1>Poetry Prompts</h1>
      <ul>
        {prompts.map((prompt, index) => (
          <li key={index}>{prompt}</li>
        ))}
      </ul>
    </div>
  );
};

export default PoetryPrompt;
