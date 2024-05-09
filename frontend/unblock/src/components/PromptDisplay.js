import React from 'react';

const PromptDisplay = ({ name, category, prompt }) => {
  return (
    <div className="prompt-display">
      <h2>Welcome, {name}!</h2>
      <p>Choose a prompt from the {category} category:</p>
      <p>{prompt}</p>
    </div>
  );
};

export default PromptDisplay;

