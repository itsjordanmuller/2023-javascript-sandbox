function Shape(name) {
  this.name = name;
}

// Add Methods to Shape Prototype
Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`);
};

function Rectangle(name, width, height) {
  Shape.call(this, name);

  this.width = width;
  this.height = height;
}

// Inherit Prototypes from Shape
Rectangle.prototype = Object.create(Shape.prototype);

// Set Prototype Constructors
Rectangle.prototype.constructor = Rectangle;

function Circle(name, radius) {
  Shape.call(this, name);

  this.radius = radius;
}
// Inherit Prototypes from Shape
Circle.prototype = Object.create(Shape.prototype);

// Set Prototype Constructors
Circle.prototype.constructor = Circle;

const rect1 = new Rectangle("Rectangle 1", 20, 20);
rect1.logName();
console.log(rect1);

const circ1 = new Circle("Circle 1", 20);
circ1.logName();
console.log(circ1);
