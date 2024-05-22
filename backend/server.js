// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const promptsRouter = require('./api/prompts');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/prompts', promptsRouter);

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
