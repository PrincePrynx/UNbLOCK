// poetry.js - Logic for generating poetry prompts

// Sample poetry prompts
const poetryPrompts = [
    "Write a haiku about the changing seasons.",
    "Compose a sonnet inspired by unrequited love.",
    "Craft a free verse poem about the beauty of nature.",
  ];
  
  // Function to get a random poetry prompt
  function getRandomPoetryPrompt() {
    const randomIndex = Math.floor(Math.random() * poetryPrompts.length);
    return poetryPrompts[randomIndex];
  }
  
  module.exports = {
    getRandomPoetryPrompt,
  };
  