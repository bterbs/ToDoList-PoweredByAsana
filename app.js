const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// app listening on port 5000 if not otherwise designated (for Heroku deployment)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
