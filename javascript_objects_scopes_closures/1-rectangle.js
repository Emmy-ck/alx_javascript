#!/usr/bin/node

// Creating an empty class Rectangle that defines a rectangle.

class Rectangle {
    // Constructor taking 2 arguments
    constructor(w, h) {
        // Initializing instance attributes width and height
        this.width = w;
        this.height = h;
    }
}

// Exporting this class to be imported and used in other files

module.exports = Rectangle;