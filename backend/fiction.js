// fiction.js - Generates fiction prompts

const fictionPrompts = [
  "Write a story set in a dystopian future where resources are scarce.",
  "Create a tale about a protagonist who discovers they have magical powers.",
  "Develop a story that starts with a character finding a mysterious letter.",
  "Imagine a world where people can communicate with animals. Write a story.",
  "Write a story about a journey to a faraway land filled with strange creatures."
];

const generateFictionPrompt = () => {
  const randomIndex = Math.floor(Math.random() * fictionPrompts.length);
  return fictionPrompts[randomIndex];
};

module.exports = {
  generateFictionPrompt,
};
















// // fiction.js - Logic for generating fiction prompts

// // Sample fiction prompts
// const fictionPrompts = [
//     "Write a short story about a time traveler stranded in ancient Egypt.",
//     "Craft a mystery story set in a small town.",
//     "Imagine a dystopian future and write a scene where the protagonist confronts the oppressive regime.",
//   ];
  
//   // Function to get a random fiction prompt
//   function getRandomFictionPrompt() {
//     const randomIndex = Math.floor(Math.random() * fictionPrompts.length);
//     return fictionPrompts[randomIndex];
//   }
  
//   module.exports = {
//     getRandomFictionPrompt,
//   };
  