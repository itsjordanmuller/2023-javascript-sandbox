let x;

const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Utilize Spread to Get Both Objects Out of Nested Structure
const obj3 = { ...obj1, ...obj2 };
// Use Assign to Achieve the Same Result
const obj4 = Object.assign({}, obj1, obj2);

// Create an Array of Objects
const todos = [
  { id: 1, name: "Buy Milk" },
  { id: 1, name: "Pickup Kids From School" },
  { id: 1, name: "Take Out the Trash" },
];

x = todos[0].name;

console.log(x);
