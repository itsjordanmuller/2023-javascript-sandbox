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
