// const { makeQuery } = require('../common/utils');
const axios = require('axios');
// TODO: move this api key to a config
const API_KEY = '0/c18cc4ebb53d0d52a5ccf3873c7b58fc';

function search() {
  // let queryString = makeQuery(options);
  return axios
    .get(`https://app.asana.com/api/1.0/projects/600042698902717/tasks`, {
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
