const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const AsanaApi = require('./asana_api.js');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing

app.get('/', (req, res) => {
  res.sendFile('../public/index.html');
});

// route to access Asana's api endpoint
app.get('/asana', (req, res) => {
  const pID = req.query.project;
  AsanaApi.search(pID)
    .then(results => {
      res.set('Access-Control-Allow-Origin', '*');
      res.json(results);
    })
    .catch(err => {
      console.error(err);
      return { error: true, message: err.message };
    });
});

// app listening on port 5000 if not otherwise designated
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`the server is listening on ${PORT}`);
});
