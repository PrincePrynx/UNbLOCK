// api/prompts.js
const express = require('express');
const router = express.Router();

const getRandomDialoguePrompt = require('./dialogue');
const getRandomFictionPrompt = require('./fiction');
const getRandomNonfictionPrompt = require('./nonfiction');
const getRandomPoetryPrompt = require('./poetry');

router.get('/dialogue', (req, res) => {
  res.json({ prompt: getRandomDialoguePrompt() });
});

router.get('/fiction', (req, res) => {
  res.json({ prompt: getRandomFictionPrompt() });
});

router.get('/nonfiction', (req, res) => {
  res.json({ prompt: getRandomNonfictionPrompt() });
});

router.get('/poetry', (req, res) => {
  res.json({ prompt: getRandomPoetryPrompt() });
});

module.exports = router;
