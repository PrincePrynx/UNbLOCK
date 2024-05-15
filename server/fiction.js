// fiction.js - Logic for generating fiction prompts

// Sample fiction prompts
const fictionPrompts = [
    "Write a short story about a time traveler stranded in ancient Egypt.",
    "Craft a mystery story set in a small town.",
    "Imagine a dystopian future and write a scene where the protagonist confronts the oppressive regime.",
  ];
  
  // Function to get a random fiction prompt
  function getRandomFictionPrompt() {
    const randomIndex = Math.floor(Math.random() * fictionPrompts.length);
    return fictionPrompts[randomIndex];
  }
  
  module.exports = {
    getRandomFictionPrompt,
  };
  