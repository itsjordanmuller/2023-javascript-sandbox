// Constructor Function with Prototype Methods

// function Rectangle(height, width) {
//   this.height = height;
//   this.width = width;
// }

// Rectangle.prototype.area = function () {
//   return this.height * this.width;
// };

// Rectangle.prototype.perimeter = function () {
//   return 2 * (this.height + this.width);
// };

// Rectangle.prototype.isSquare = function () {
//   return this.height === this.width;
// };

// Rectangle.prototype.logArea = function () {
//   console.log("Rectangle Area: " + this.area());
// };

// Object Constructor Using Class
class Rectangle {
  constructor(name, width, height) {
    // console.log("Ran");
    this.name = name;
    this.width = width;
    this.height = height;
  }
}

const square = new Rectangle("Square", 20, 20);
const square2 = new Rectangle("Square", 20, 20);
console.log(square);
