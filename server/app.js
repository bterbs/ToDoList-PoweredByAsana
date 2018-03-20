const express = require('express');
const path = require('path');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('../public/index.html');
});

console.log('The value of PORT is:', process.env.PORT);
// app listening on port 5000 if not otherwise designated (for Heroku deployment)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`the server is listening on ${PORT}`);
});
