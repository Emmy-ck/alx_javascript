#!/usr/bin/node

function add (a, b) {
  return a + b;
}
// Exporting the add funtion to use in other modules

module.exports.add = add;
