// Values are Stored on the Stack
const name = "Jordan";
const age = 23;

// Reference Values are Stored on the Heap
const person = {
  name: "John",
  age: 23,
};

let newName = name;
newName = "Jordan";

let newPerson = person;
newPerson.name = "Jordan";

console.log(name, newName);
console.log(person, newPerson);
