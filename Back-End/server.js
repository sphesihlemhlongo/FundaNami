const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const services = require('./data');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the FundaNami backend API!');
});

app.get('/api/services', (req, res) => {
  res.json(services);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  req.send('Contact API is working');
  console.log(`New message from ${name} (${email}): ${message}`);
  res.status(200).json({ success: true, message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
