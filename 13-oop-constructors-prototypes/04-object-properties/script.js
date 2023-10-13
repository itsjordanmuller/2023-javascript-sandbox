function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

rect1 = new Rectangle("Rectangle 1", 20, 20);
rect2 = new Rectangle("Rectangle 2", 10, 10);

// Getting Values of Object Properties
console.log(rect1.name, rect2["name"]);

// Create New Property on Object & Set Value
console.log("Before New Property", rect1);
rect1.color = "red";
console.warn("After New Property", rect1);
