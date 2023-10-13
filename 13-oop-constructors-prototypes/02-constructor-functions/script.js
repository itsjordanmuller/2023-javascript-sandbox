// new is used to create an instance of one of the built-in object types that has a constructor function
// const now = new Date();

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

// Use Constructor Function Using new to Create Instances
const rect1 = new Rectangle("Rectangle 1", 10, 10);
const rect2 = new Rectangle("Rectangle 2", 20, 20);

console.log(rect1);
console.log(rect1.name);
console.log(rect1.area());

console.log(rect2);
console.log(rect2.area());

// Show the Constructor Function for a Specific Object
console.log(rect1.constructor);

// Returns True if Object is an Instance of Constructor Function
console.log(rect2 instanceof Rectangle);
