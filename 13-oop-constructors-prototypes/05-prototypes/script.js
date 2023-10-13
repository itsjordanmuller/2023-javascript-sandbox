function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect = new Rectangle("Rect", 10, 10);

// When We Log Object, We Get the Properties, Methods, & Prototype Object
console.log(rect);

// 1. Looks in Properties & Methods
// 2. Fails to Find toString
// 3. Moves to Prototypes Object
// 4. Continue Failing to Find Until it Gets to the Nested Prototype Object with the toString Method
// 5. Call the toString method that was just found
console.log(rect.toString());

// When Array is Created, It Inherits Array Methods via the Prototype Object that Gets Added
// Uses the Array Constructor
const arr = [];
console.log(arr);
// The Prototype Object is what lets us use pop, push, unshift, shift, toString, etc.

// String Constructor Used, String Methods Available via Prototype
const string = new String("Hello World!");
console.log(string);

// Get the Prototype of a Specific Object by Calling Method from Object Constructor
console.log(Object.getPrototypeOf(rect));
