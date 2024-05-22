// backend/server.js

// backend/server.js

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 5000;

// const getRandomDialoguePrompt = require('./dialogue');
// const getRandomFictionPrompt = require('./fiction');
// const getRandomNonfictionPrompt = require('./nonfiction');
// const getRandomPoetryPrompt = require('./poetry');

// app.use(cors({
//   origin: 'https://unblock-1.onrender.com/'
// }));

// app.use(express.json());

// app.get('/api/prompts/dialogue', (req, res) => {
//   res.json(getRandomDialoguePrompt());
// });

// app.get('/api/prompts/fiction', (req, res) => {
//   res.json(getRandomFictionPrompt());
// });

// app.get('/api/prompts/nonfiction', (req, res) => {
//   res.json(getRandomNonfictionPrompt());
// });

// app.get('/api/prompts/poetry', (req, res) => {
//   res.json(getRandomPoetryPrompt());
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });





const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const promptsRouter = require('./api/prompts');


//// 

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


///

app.use(cors({
  origin: 'https://unblock-1.onrender.com/'
}));

app.use(bodyParser.json());

app.use('/api/prompts', promptsRouter);

app.get('/', (req, res) => {
  res.send('Welcome to UNbLOCK!');

});


// Route to handle form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received message:', { name, email, message });
  // Implement logic to save the data to a database, send email, etc.
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
