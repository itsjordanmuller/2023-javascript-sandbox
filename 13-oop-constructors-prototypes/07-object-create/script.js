// Object Literal Full of Keys to Call Functions
const rectanglePrototypes = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
  isSquare: function () {
    return this.width === this.height;
  },
};

// Use Object.create() to Create an Object Without a Constructor Function
function createRectangle(height, width) {
  return Object.create(rectanglePrototypes, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
  });
}

// No Constructor Function in Prototype Object, Simply Uses Object Constructor in It's Own Prototype Object
const rect1 = createRectangle(10, 20);
const rect2 = createRectangle(20, 20);

console.log(rect1);
console.log(rect1.area());
console.log(rect1.perimeter());
console.log(rect1.isSquare());

console.log(rect2);
console.log(rect2.area());
console.log(rect2.perimeter());
console.log(rect2.isSquare());
