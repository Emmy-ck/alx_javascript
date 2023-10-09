#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
request(url, (err, res) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('code:', response.statusCode);
    }
});