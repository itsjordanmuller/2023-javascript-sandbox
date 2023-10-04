// Function Declaration Syntax
// function add(a, b) {
//   return a + b;
// }

// Arrow Function Syntax
const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

// Compact Arrow Function Syntax with Implicit Return
const subtract = (a, b) => a - b;

console.log(subtract(10, 5));

// Single Parameter Arrow Function
const double = (a) => a * 2;

console.log(double(10));

// Returning an Object
// Surround Brackets with Parenthesis
const createObj = () => ({
  name: "Jordan",
});

console.log(createObj());

const numbers = [1, 2, 3, 4, 5];

// Passing Function into forEach Method
numbers.forEach(function (n) {
  console.log(n);
});

// Compact Arrow Function into Callback
numbers.forEach((n) => console.log(n));
