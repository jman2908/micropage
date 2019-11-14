require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

const axios = require('axios');
var moment = require('moment');
moment().format();

spotify
.search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });