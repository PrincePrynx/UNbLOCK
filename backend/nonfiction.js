

// nonfiction.js - Generates nonfiction prompts

const nonfictionPrompts = [
  "Write about a personal experience that changed your life.",
  "Describe a place that holds significant meaning to you and why.",
  "Write an essay on the importance of mental health awareness.",
  "Interview someone you admire and write about their life story.",
  "Explore a historical event and write about its impact on today's world."
];

const generateNonfictionPrompt = () => {
  const randomIndex = Math.floor(Math.random() * nonfictionPrompts.length);
  return nonfictionPrompts[randomIndex];
};

module.exports = {
  generateNonfictionPrompt,
};














// // nonfiction.js - Logic for generating nonfiction prompts

// // Sample nonfiction prompts
// const nonfictionPrompts = [
//     "Write an essay discussing the impact of social media on mental health.",
//     "Compose a blog post about the importance of sustainable living.",
//     "Create a research paper outlining the effects of climate change on biodiversity.",
//   ];
  
//   // Function to get a random nonfiction prompt
//   function getRandomNonfictionPrompt() {
//     const randomIndex = Math.floor(Math.random() * nonfictionPrompts.length);
//     return nonfictionPrompts[randomIndex];
//   }
  
//   module.exports = {
//     getRandomNonfictionPrompt,
//   };
  