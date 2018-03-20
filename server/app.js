const express = require('express');
const path = require('path');
const AsanaApi = require('./asana_api.js');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('../public/index.html');
});

// routes to access Asana's api endpoints
app.get('/asana/search', (req, res) => {
  let params = req.query;
  console.log('query::', req.query);
  AsanaApi.search()
    .then(results => {
      res.set('Access-Control-Allow-Origin', '*');
      res.json(results);
    })
    .catch(err => {
      console.error(err);
      return { error: true, message: err.message };
    });
});

// app listening on port 5000 if not otherwise designated (for Heroku deployment)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`the server is listening on ${PORT}`);
});
