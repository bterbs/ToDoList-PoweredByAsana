const router = require('express').Router();
const AsanaApi = require('./asana_api.js');

// index routes
router.get('/', (req, res, next) => {
  return res.render('events/index.ejs');
});

// route to access Asana's api endpoint
router.get('/asana', (req, res) => {
  const pID = req.query.project;
  AsanaApi.search(pID)
    .then(results => {
      res.set('Access-Control-Allow-Origin', '*');
      if (req.xhr) {
        // request was AJAX (XHR)
        res.json({ data: results.data.data });
      } else {
        // render html template instead
        console.log('the projectID is ', pID);
        res.render('events/results.ejs', {
          data: results.data.data,
          projectID: pID,
          clickHandler: 'taskRemove()'
        });
      }
    })
    .catch(err => {
      console.error(err);
      return { error: true, message: err.message };
    });
});

module.exports = router;
