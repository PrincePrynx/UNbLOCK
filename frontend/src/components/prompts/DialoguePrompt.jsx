import React, { useState, useEffect } from "react";
import { fetchDialoguePrompts } from "../../services/promptService";

const DialoguePrompt = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const data = await fetchDialoguePrompts();
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
      <h1>Dialogue Prompts</h1>
      <ul>
        {prompts.map((prompt, index) => (
          <li key={index}>{prompt}</li>
        ))}
      </ul>
    </div>
  );
};

export default DialoguePrompt;
