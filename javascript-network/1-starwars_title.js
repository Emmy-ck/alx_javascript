#!/usr/bin/node

const request = require('request');
const movieId = process.argv.slice(2);
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/' + movieId[0];
request(apiUrl, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(body).title);
  }
});