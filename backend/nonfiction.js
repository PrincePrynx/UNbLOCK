// nonfiction.js - Logic for generating nonfiction prompts

// Sample nonfiction prompts
const nonfictionPrompts = [
    "Write an essay discussing the impact of social media on mental health.",
    "Compose a blog post about the importance of sustainable living.",
    "Create a research paper outlining the effects of climate change on biodiversity.",
  ];
  
  // Function to get a random nonfiction prompt
  function getRandomNonfictionPrompt() {
    const randomIndex = Math.floor(Math.random() * nonfictionPrompts.length);
    return nonfictionPrompts[randomIndex];
  }
  
  module.exports = {
    getRandomNonfictionPrompt,
  };
  