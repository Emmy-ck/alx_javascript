#!/usr/bin/node
// A script that gets the contents of a webpage and saves them into a file
const request = require('request');
const fs = require('fs');
const myPage = process.argv.slice(2);
request(myPage[0], function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(myPage[1], body, function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
});