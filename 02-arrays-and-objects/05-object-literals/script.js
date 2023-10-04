// Create an Object
const person = {
  name: "Jordan",
  age: 23,
  isAdmin: true,
  address: {
    street: "123 Main St.",
    city: "San Francisco",
    state: "CA",
  },
  hobbies: ["Music", "Cooking", "Coding"],
};

// Log Entire Object
// console.log(person);

// Log Specific Property from an Object
// console.log(person.name);

x = person.age;
x = person["age"];

x = person.address.city;
x = person["address"]["city"];
x = person.hobbies[2];

// Set a Value of a Property
person.name = "Jordan Muller";
person.isAdmin = false;

// Delete an Entire Property
delete person.address;

// Create a New Property and Set It's Value
person.hasChildren = false;

// Assign a Function to a Property in an Object
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Call a Function from an Object
person.greet();

const person2 = {
  "first name": "Jordan",
  "last name": "Muller",
};

x = person2["first name"];

console.log(x);
