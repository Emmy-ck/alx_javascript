#!/s/bin/node

const request = require('request');
require.get(process.argv[2]).on('response', function(response) {
    console.log(`code: ${response.statusCode}`);
});