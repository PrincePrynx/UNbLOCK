// backend/server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const getRandomDialoguePrompt = require('./dialogue');
const getRandomFictionPrompt = require('./fiction');
const getRandomNonfictionPrompt = require('./nonfiction');
const getRandomPoetryPrompt = require('./poetry');

app.use(cors());
app.use(express.json());

app.get('/api/prompts/dialogue', (req, res) => {
  res.json(getRandomDialoguePrompt());
});

app.get('/api/prompts/fiction', (req, res) => {
  res.json(getRandomFictionPrompt());
});

app.get('/api/prompts/nonfiction', (req, res) => {
  res.json(getRandomNonfictionPrompt());
});

app.get('/api/prompts/poetry', (req, res) => {
  res.json(getRandomPoetryPrompt());
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
