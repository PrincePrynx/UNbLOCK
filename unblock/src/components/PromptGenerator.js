import React from 'react';

function PromptGenerator ({ category }) {
  // Function to generate prompts based on the selected category
  const generatePrompts = () => {
    // Implement prompt generation logic here
    return [
      'Prompt 1 for ' + category,
      'Prompt 2 for ' + category
    ];
  };

  const prompts = generatePrompts();

  return (
    <div className="prompt-generator">
      <h2>Prompts for {category}</h2>
      <ul>
        {prompts.map((prompt, index) => (
          <li key={index}>{prompt}</li>
        ))}
      </ul>
    </div>
  );
};

export default PromptGenerator;
