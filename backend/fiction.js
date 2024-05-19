// backend/fiction.js
const express = require('express');
const router = express.Router();

const fictionPrompts = [
  "Write a story about a character who discovers a hidden talent that changes their life.",
  "Imagine a world where everyone has a superpower, but your character's power is unique.",
  "Write a fiction piece about a journey to a place no one has ever been before.",
  "Create a story set in a post-apocalyptic world where hope is scarce.",
  "Write a story about a character who makes a choice that alters the course of history."
];

function getRandomFictionPrompt() {
  const randomIndex = Math.floor(Math.random() * fictionPrompts.length);
  return fictionPrompts[randomIndex];
}

module.exports = getRandomFictionPrompt;
module.exports = router;