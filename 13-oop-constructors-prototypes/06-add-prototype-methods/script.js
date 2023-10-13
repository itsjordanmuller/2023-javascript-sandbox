function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

// Relocate Function from Constructor to Prototype by Using Dot Notation and Removing this
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

const rect = new Rectangle("Rect", 10, 10);

console.log(rect);
// Still Able to Call Method from Prototype Object
console.log(rect.area());
