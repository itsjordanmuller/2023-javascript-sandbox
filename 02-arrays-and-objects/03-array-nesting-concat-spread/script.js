let x;

const fruits = ["Apple", "Orange", "Peach"];
const berries = ["Strawberry", "Blueberry", "Raspberry"];

// Push an Array into Another Array to Nest It
// fruits.push(berries);

// Get a Value from a Nested Array By Going Another Level Down
// x = fruits[3][1];

// Create a New Array with Two Arrays
const allFruits = [fruits, berries];

// Get a Value from the Nested Arrays
x = allFruits[1][2];

// Concatenate the Values of an Array onto Another Array
x = fruits.concat(berries);

// Spread Operator (...)
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

console.log(x);
