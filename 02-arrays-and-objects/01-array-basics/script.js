// Array Literal
const numbers = [10, 20, 30, 40, 50];

// Array Constructor
const fruits = new Array("Apple", "Watermelon", "Orange");

// Value at a Specific Index
x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favorite fruit is the: ${fruits[1]}`;

// Get Length of an Array
x = numbers.length;

// Set Value at a Specific Index in an Array
fruits[2] = "Strawberry";

// Set Length to Cut Off Array
// fruits.length = 2;

// Ways to Append a Value to an Array at Index
fruits[3] = "Peach";
fruits[fruits.length] = "Blueberry";
x = fruits;

console.log(x);
