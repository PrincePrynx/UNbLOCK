// backend/poetry.js

const express = require('express');
const router = express.Router();


const poetryPrompts = [
  "Write a poem about the changing seasons.",
  "Create a poem that captures the feeling of a first love.",
  "Write a poem inspired by the sounds of your city.",
  "Compose a poem about the concept of time.",
  "Write a poem that explores the theme of solitude."
];

function getRandomPoetryPrompt() {
  const randomIndex = Math.floor(Math.random() * poetryPrompts.length);
  return poetryPrompts[randomIndex];
}

module.exports = getRandomPoetryPrompt;
module.exports = router;