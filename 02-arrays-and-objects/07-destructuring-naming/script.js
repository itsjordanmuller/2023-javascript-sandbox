const firstName = "Jordan";
const lastName = "Muller";
const age = 30;

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

const person2 = {
  firstName,
  lastName,
  age,
};

// Destructuring Objects
const todo = {
  id: 1,
  title: "Take Out the Trash",
  user: {
    name: "Jordan",
  },
};

// const id = todo.id;
const {
  id: todoId,
  title,
  user: { name },
} = todo;

// Destructuring Arrays
const numbers = [23, 67, 33, 49];
const [first, second, ...rest] = numbers;

console.log(first, second, rest);
