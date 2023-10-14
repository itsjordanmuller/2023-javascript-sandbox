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

const rect1 = new Rectangle("Rect1", 20, 20);
console.log(rect1);

rect1.logName();
