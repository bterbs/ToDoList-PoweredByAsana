const axios = require('axios');

const { API_KEY } = require('../config.js').keys;

function search(pID) {
  let projectID = pID;
  return axios
    .get(`https://app.asana.com/api/1.0/projects/${projectID}/tasks`, {
      headers: { Authorization: `Bearer ${API_KEY}` }
    })
    .then(result => {
      return { data: result.data };
    })
    .catch(err => {
      console.error(err);
      return { error: true, message: err.message };
    });
}

module.exports = {
  search
};
