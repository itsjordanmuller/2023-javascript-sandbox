const rectangle = {
  name: "Rectangle 1",
  width: 10,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

// This is a Waste of Repeated Code
const rectangle2 = {
  name: "Rectangle 2",
  width: 10,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

// Get a Property from an Object
// console.log(rectangle.name);

// Call a Method from an Object
console.log(rectangle.area());

// Execution Context Creates Window and Assigns it to This
// console.log(this);
