// backend/dialogue.js

const dialoguePrompts = [
  "Write a dialogue between two characters who just met on a blind date.",
  "Write a conversation where one person is trying to convince another to take a huge risk.",
  "Create a dialogue between a parent and child about an important life lesson.",
  "Imagine a dialogue between two old friends who haven't seen each other in years.",
  "Write a dialogue where a character reveals a big secret."
];

function getRandomDialoguePrompt() {
  const randomIndex = Math.floor(Math.random() * dialoguePrompts.length);
  return dialoguePrompts[randomIndex];
}

module.exports = getRandomDialoguePrompt;
