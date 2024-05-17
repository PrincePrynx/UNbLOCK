const express = require('express');
const app = express();
const PORT = 3001;

const dialoguePrompts = require('./dialogue');
const poetryPrompts = require('./poetry');
const nonfictionPrompts = require('./nonfiction');
const fictionPrompts = require('./fiction');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to generate prompts based on category
app.post('/generate-prompt', (req, res) => {
  const { category } = req.body;

  let prompt = '';
  switch (category) {
    case 'dialogue':
      prompt = dialoguePrompts.generateDialoguePrompt();
      break;
    case 'poetry':
      prompt = poetryPrompts.generatePoetryPrompt();
      break;
    case 'nonfiction':
      prompt = nonfictionPrompts.generateNonfictionPrompt();
      break;
    case 'fiction':
      prompt = fictionPrompts.generateFictionPrompt();
      break;
    default:
      return res.status(400).send('Invalid category');
  }

  res.json({ prompt });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


































// // server.js - Entry point for the Express server

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const router = require('./routes/router')


// const { getRandomDialoguePrompt } = require("./dialogue");
// const { getRandomPoetryPrompt } = require("./poetry");
// const { getRandomNonfictionPrompt } = require("./nonfiction");
// const { getRandomFictionPrompt } = require("./fiction");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware for parsing JSON bodies
// app.use(bodyParser.json());

// // Route for generating dialogue prompt
// app.get("/dialogue", (req, res) => {
//   const prompt = getRandomDialoguePrompt();
//   res.json({ prompt });
// });

// // Route for generating poetry prompt
// app.get("/poetry", (req, res) => {
//   const prompt = getRandomPoetryPrompt();
//   res.json({ prompt });
// });

// // Route for generating nonfiction prompt
// app.get("/nonfiction", (req, res) => {
//   const prompt = getRandomNonfictionPrompt();
//   res.json({ prompt });
// });

// // Route for generating fiction prompt
// app.get("/fiction", (req, res) => {
//   const prompt = getRandomFictionPrompt();
//   res.json({ prompt });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
