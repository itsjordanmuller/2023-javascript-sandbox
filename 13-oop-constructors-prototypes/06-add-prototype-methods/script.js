function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

// Relocate Function from Constructor to Prototype by Using Dot Notation and Removing this
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width * this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect1 = new Rectangle("Rect1", 10, 10);
const rect2 = new Rectangle("Rect2", 30, 40);

console.log(rect1);
// Still Able to Call Method from Prototype Object
console.log("Area: ", rect1.area());
console.log("Perimeter: ", rect1.perimeter());
console.log("Square? (T/F): ", rect1.isSquare());
console.log("Name Before: ", rect1.name);
console.log("Name After: ", rect1.changeName("RectOne"));

console.log(rect2);
console.log("Area: ", rect2.area());
console.log("Perimeter: ", rect2.perimeter());
console.log("Square? (T/F): ", rect2.isSquare());
