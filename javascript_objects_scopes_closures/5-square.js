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
    // Creating an instance method print() that prints the rectangle using char 'X'
    print() {
        if (this.width && this.height) {
            for (let i = 0; i < this.height; i++) {
                console.log('X'.repeat(this.width));
            }
        }
    }
    /* Creating an instance method rotate() that exchanges the
    width ad the height of the rectangle by 2 */
    rotate() {
        if (this.width && this.height) {
            const temp = this.width;
            this.width = this.height;
            this.height = temp;
        }
    }
    /* Creating an instance methos double() that multiplies the 
    width and the height of the rectangle by 2 */
    double() {
        if (this.width && this.height) {
            this.width *= 2;
            this.height *= 2;
        }
    }
}
// Creating a class Square that defines a square and inherits from Rectangle class
class Square extends Rectangle {
    // Constructor taking 1 argument size
    constructor(size) {
        // Calling the constructor of Rectangle using super()
        super(size, size);
    }
}

// Exporting this class to be imported and used in other files.

module.exports = Rectangle;
