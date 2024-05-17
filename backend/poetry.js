

// poetry.js - Generates poetry prompts

const poetryPrompts = [
  "Write a poem about the changing seasons.",
  "Create a poem that describes a powerful emotion without naming it.",
  "Compose a poem inspired by a favorite childhood memory.",
  "Write a poem about the beauty of nature.",
  "Develop a poem that tells a story of love and loss."
];

const generatePoetryPrompt = () => {
  const randomIndex = Math.floor(Math.random() * poetryPrompts.length);
  return poetryPrompts[randomIndex];
};

module.exports = {
  generatePoetryPrompt,
};

















// // poetry.js - Logic for generating poetry prompts

// // Sample poetry prompts
// const poetryPrompts = [
//     "Write a haiku about the changing seasons.",
//     "Compose a sonnet inspired by unrequited love.",
//     "Craft a free verse poem about the beauty of nature.",
//   ];
  
//   // Function to get a random poetry prompt
//   function getRandomPoetryPrompt() {
//     const randomIndex = Math.floor(Math.random() * poetryPrompts.length);
//     return poetryPrompts[randomIndex];
//   }
  
//   module.exports = {
//     getRandomPoetryPrompt,
//   };
  