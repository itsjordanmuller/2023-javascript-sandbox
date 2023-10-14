// Parent Class
class Shape {
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log(`Shape Name: ${this.name}`);
  }
}

// Child Class
class Rectangle extends Shape {
  constructor(name, width, height) {
    // Bring in Name from Shape Class
    super(name);

    this.width = width;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);

    this.width = radius;
  }

  logName() {
    console.log(`Circle Name: ${this.name}`);
  }
}

const rect1 = new Rectangle("Rect1", 20, 20);
console.log(rect1);

rect1.logName();

const circ1 = new Circle("Circ1", 15);
circ1.logName();

// Rectangle is Constructed From Both Shape & Rectangle Classes
console.log("Instance of Rectangle? (T/F): ", rect1 instanceof Rectangle);
console.log("Instance of Shape? (T/F): ", rect1 instanceof Shape);
