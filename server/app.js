const ejs = require('ejs');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const AsanaApi = require('./asana_api.js');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing

app.use('/', routes);

// app listening on port 5000 if not otherwise designated
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`the server is listening on ${PORT}`);
});
