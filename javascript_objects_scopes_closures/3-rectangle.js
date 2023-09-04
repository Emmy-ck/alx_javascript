#!/usr/bin/node

// Creating a class Rectangle that defines a rectangle.

class Rectangle {
    // Constructor taking 2 arguments
    constructor(w, h) {
        // Initializing instance attributes width and height
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        } else {
            // Creating an empty object if width and height are invalid
            Object.assign(this, {});
        }
    }
    print() {
        if (this.width && this.height) {
            for (let i = 0; i < this.height; i++) {
                console.log('X'.repeat(this.width));
            }
        }
    }
}

// Exporting this class to be imported and used in other files.

module.exports = Rectangle;
