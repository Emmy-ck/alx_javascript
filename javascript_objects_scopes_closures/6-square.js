#!/usr/bin/node
// Creating a class Square that defines a square and inherits from Square of file 5-Square.js

class Square extends require('./5-square') {
    // Creating a class method charPrint(c) that prints rectangle using char c
    charPrint(c = 'X') {
        if (this.width && this.height) {
            for (let i = 0; i < this.height; i++) {
                console.log(c.repeat(this.width));
            }
        }
    }
}
// Exporting this class to be imported and used in other files.

module.exports = Square;
