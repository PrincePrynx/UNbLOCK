// backend/nonfiction.js

const nonfictionPrompts = [
  "Write an essay about a moment in your life that changed your perspective.",
  "Describe a place you have visited that left a lasting impression on you.",
  "Write a nonfiction piece about a person who has greatly influenced you.",
  "Reflect on a challenge you overcame and what you learned from it.",
  "Write about an experience that made you understand a different culture better."
];

function getRandomNonfictionPrompt() {
  const randomIndex = Math.floor(Math.random() * nonfictionPrompts.length);
  return nonfictionPrompts[randomIndex];
}

module.exports = getRandomNonfictionPrompt;
