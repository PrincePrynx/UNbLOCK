// dialogue.js - Logic for generating dialogue prompts

// Sample dialogue prompts
const dialoguePrompts = [
    "Write a conversation between two old friends meeting after a decade.",
    "Imagine a dialogue between a detective and a suspect in a murder case.",
    "Create a dialogue between a parent and a child discussing a difficult topic.",
  ];
  
  // Function to get a random dialogue prompt
  function getRandomDialoguePrompt() {
    const randomIndex = Math.floor(Math.random() * dialoguePrompts.length);
    return dialoguePrompts[randomIndex];
  }
  
  module.exports = {
    getRandomDialoguePrompt,
  };
  