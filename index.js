const express = require('express');

const app = express();

// app listening on port 5000 if not otherwise designated (for Heroku deployment)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
