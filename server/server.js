// server.js - Entry point for the Express server

const express = require("express");
const bodyParser = require("body-parser");
const { getRandomDialoguePrompt } = require("./dialogue");
const { getRandomPoetryPrompt } = require("./poetry");
const { getRandomNonfictionPrompt } = require("./nonfiction");
const { getRandomFictionPrompt } = require("./fiction");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Route for generating dialogue prompt
app.get("/dialogue", (req, res) => {
  const prompt = getRandomDialoguePrompt();
  res.json({ prompt });
});

// Route for generating poetry prompt
app.get("/poetry", (req, res) => {
  const prompt = getRandomPoetryPrompt();
  res.json({ prompt });
});

// Route for generating nonfiction prompt
app.get("/nonfiction", (req, res) => {
  const prompt = getRandomNonfictionPrompt();
  res.json({ prompt });
});

// Route for generating fiction prompt
app.get("/fiction", (req, res) => {
  const prompt = getRandomFictionPrompt();
  res.json({ prompt });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
