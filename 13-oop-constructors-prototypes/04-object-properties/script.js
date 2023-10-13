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
console.log("--- CREATE PROPERTY & SET VALUE ---");
console.log("Before New Property", rect1);
rect1.color = "red";
rect2.color = "blue";
console.warn("After New Property", rect1);

// Create New Method on Object
console.log("--- CREATE & CALL METHOD ---");
console.log("Before New Method", rect1);
rect2.perimeter = () => 2 * (rect2.width + rect2.height);
console.warn("After New Method", rect1);
console.log("Use New Method:", rect2.perimeter());

// Delete a Property from an Object
console.log("--- DELETE A PROPERTY ---");
console.log("Before Deleting Property", rect2);
delete rect2.color;
console.warn("After Deleting Property", rect2);

// Delete a Method from an Object
console.log("--- DELETE A PROPERTY ---");
console.log("Before Deleting Method", rect2);
delete rect2.perimeter;
console.warn("After Deleting Method", rect2);

// Check for a Property
console.log("--- CHECK FOR A PROPERTY ---");
console.log("Rect1 has color: ", rect1.hasOwnProperty("color"));
console.log("Rect2 has color: ", rect2.hasOwnProperty("color"));

// Get Keys, Values & Entries
console.log("--- GET KEYS, VALUES & ENTRIES ---");
// Keys
console.log("Keys: ", Object.keys(rect1));
// Values
console.log("Values: ", Object.keys(rect1));
// Entries (Array of Keys and Values)
console.log("Entries: ", Object.entries(rect1));

// Loop Through All Entries in an Object
console.log("--- LOOP THROUGH ENTRIES ---");
for (let [key, value] of Object.entries(rect1)) {
  console.log(`${key} - ${value}`);
}
