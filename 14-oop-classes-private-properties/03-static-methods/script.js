class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  static getClass() {
    return "Rectangle";
  }
}

const rect1 = new Rectangle("Rect1", 10, 10);
console.log(rect1.area());

// This Won't Work, Since the Method is Static
// console.log(rect1.getClass());
// Call Method from the Class Instead
console.log(Rectangle.getClass());
