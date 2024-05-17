
// dialogue.js - Generates dialogue prompts

const dialoguePrompts = [
  "Write a dialogue between two characters who just met for the first time.",
  "Create a conversation where one character reveals a deep secret.",
  "Develop a dialogue where two characters are arguing about something trivial.",
  "Write a dialogue where one character tries to comfort another who is crying.",
  "Imagine a dialogue between two characters planning a surprise party."
];

const generateDialoguePrompt = () => {
  const randomIndex = Math.floor(Math.random() * dialoguePrompts.length);
  return dialoguePrompts[randomIndex];
};

module.exports = {
  generateDialoguePrompt,
};













// // dialogue.js - Logic for generating dialogue prompts

// // Sample dialogue prompts
// const dialoguePrompts = [
//     "Write a conversation between two old friends meeting after a decade.",
//     "Imagine a dialogue between a detective and a suspect in a murder case.",
//     "Create a dialogue between a parent and a child discussing a difficult topic.",
//   ];
  
//   // Function to get a random dialogue prompt
//   function getRandomDialoguePrompt() {
//     const randomIndex = Math.floor(Math.random() * dialoguePrompts.length);
//     return dialoguePrompts[randomIndex];
//   }
  
//   module.exports = {
//     getRandomDialoguePrompt,
//   };
  