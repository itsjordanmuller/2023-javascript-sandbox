# JavaScript Sandbox

## [5. Iteration & Array Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods)

### [A. For Loops](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/01-for-loop)

![For Loops - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/01-for-loop/01-for-loop.png)

In this JavaScript exercise, the focus was on mastering the `for` loop, a fundamental control flow statement used for iteration. The for loop is structured with an initial expression, a condition, an increment expression, and a statement to execute.

#### For Loop Basics
The exercise started with the basic syntax of a for loop, which includes initializing a counter (`let i = 0`), setting a condition (`i <= 10`), and defining an increment expression (`i++`). In the example, a simple if-else block checked if the current number was 7 and outputted a special message if true, or printed the number otherwise.

#### Nested Loops
Next, the exercise explored nested loops, demonstrating how a for loop can be placed inside another. The outer loop iterated from 1 to 10, and for each iteration, the inner loop ran five times, multiplying the outer loop's counter (`i`) by the inner loop's counter (`j`).

#### Looping Through an Array
Finally, the lesson included an example of iterating over an array. The loop went through each element of the `names` array, printing a unique message if the name was "Jordan" or simply outputting the name for all other elements.

<details>
<summary>View JS Code - script.js - A - For Loop</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// For Loop Syntax
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITIAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log("7 is my lucky number");
//   } else {
//     console.log(`Number: ${i}`);
//   }
// }

// Nested Loops
// for (let i = 1; i <= 10; i++) {
//   console.log(`Number: ${i}`);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Looping Through an Array
const names = ["Jordan", "John", "Jane", "Tim", "Tom"];

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Jordan") {
    console.log(`${names[i]} is the best!`);
  } else {
    console.log(names[i]);
  }
}
```
</details>

### [B. Break & Continue](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/02-break-and-continue)

![Break & Continue - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/02-break-and-continue/02-break-and-continue.png)

In this section, the exercise delved into the use of `break` and `continue` statements in JavaScript loops, specifically focusing on the `for` loop. These statements are crucial for controlling the flow of loops.

#### Using `break` in a Loop
The first part of the exercise demonstrated the use of the `break` statement. In a for loop iterating from 0 to 20, when the loop counter (`i`) reached 15, the loop execution was halted using `break`. Before breaking out of the loop, the script printed "Breaking..." to indicate the action. This example showcased how `break` can be used to exit a loop prematurely when a specific condition is met, avoiding the complete traversal of the loop.

#### Using `continue` in a Loop
The second part focused on the `continue` statement. In a similar loop, when the counter reached 13, the script executed a `continue` statement after printing "Skipping 13...". The `continue` statement caused the loop to immediately start the next iteration, effectively skipping all remaining statements in the current iteration. This example highlighted how `continue` is used to skip the current loop iteration and proceed to the next one, based on a certain condition.

Overall, this exercise illustrated the practical applications of `break` and `continue` in controlling loop behavior, which is a valuable aspect of writing efficient and flexible code in JavaScript.

<details>
<summary>View JS Code - script.js - B - Break & Continue</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Break Out of a Loop
// for (let i = 0; i <= 20; i++) {
//   if (i === 15) {
//     console.log("Breaking...");
//     break;
//   }
//   console.log(i);
// }

// Continue to Skip Current Iteration and Move to Next Iteration
for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log("Skipping 13...");
    continue;
  }

  console.log(i);
}
```
</details>

### [C. While & Do While](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/03-while-do-while)

![While & Do While - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/03-while-do-while/03-while-do-while.png)

This exercise focused on understanding and implementing `while` and `do-while` loops in JavaScript. These loops are essential for situations where the number of iterations isn't known beforehand and are based on a condition.

#### While Loop
Initially, the exercise demonstrated a basic `while` loop. The loop started with a counter `i` set to 0 and ran as long as `i` was less than or equal to 20. In each iteration, it printed the current number and then incremented `i`. This showcased how a `while` loop continues to execute as long as the specified condition is true.

#### Looping Over Arrays with While
The exercise also showed how to use a `while` loop to iterate over an array. Starting with `i` at 0, the loop ran until `i` was less than the length of the array. Each iteration printed an element of the array and then incremented `i`. This example highlighted the utility of `while` loops for array traversal when the end condition is based on array length.

#### Nesting While Loops
Next, the exercise covered nested `while` loops. An outer loop ran from 1 to 5, and within it, an inner loop also ran from 1 to 5. The inner loop multiplied the counters of both loops, demonstrating how nested `while` loops can be used for more complex iterations, like generating a multiplication table.

#### Do-While Loop
Lastly, the `do-while` loop was introduced. Unlike the `while` loop, the `do-while` loop executes its block of code at least once before checking the condition. In the example, `i` was initially set to 21, and even though the condition `i <= 20` was false, the loop executed once, printing "Number: 21". This illustrates the unique characteristic of the `do-while` loop: it guarantees that the loop's body is executed at least once.

Through these examples, the exercise provided a comprehensive understanding of how and when to use `while` and `do-while` loops in JavaScript, emphasizing their differences and specific use cases.

<details>
<summary>View JS Code - script.js - C - While & Do While</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// While Loop
// let i = 0;

// while (i <= 20) {
//   console.log(`Number ${i}`);
//   i++;
// }

// Loop Over Arrays
// const arr = [10, 20, 30, 40];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// Nesting While Loops
// let i = 1;

// while (i <= 5) {
//   console.log(`Number: ${i}`);

//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }

//   i++;
// }

// Do While Loop (Code in Do Is Executed Once No Matter What, Then Again While True)
let i = 21;
do {
  console.log(`Number: ${i}`);
  i++;
} while (i <= 20);
```
</details>

### [D. FizzBuzz Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/04-fizzbuzz-challenge)

![FizzBuzz Challenge - Console Head Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/04-fizzbuzz-challenge/04-fizzbuzz-challenge-head.png)

![FizzBuzz Challenge - Console Tail Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/04-fizzbuzz-challenge/04-fizzbuzz-challenge-tail.png)

This exercise tackled the classic "FizzBuzz" challenge, a popular programming task often used in coding interviews and practice sessions. The challenge involves printing numbers from 1 to 100, but with a twist: for multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz", and for multiples of both 3 and 5, print "FizzBuzz".

#### FizzBuzz Logic
- The loop begins with `i` set to 1 and increments `i` until it reaches 100.
- The first condition checked is whether `i` is a multiple of both 3 and 5 (`i % 15 === 0`). If so, "FizzBuzz" is printed. This condition is checked first to ensure that numbers like 15, 30, etc., are correctly identified as multiples of both 3 and 5.
- If the first condition isn't met, the loop then checks if `i` is a multiple of 3 (`i % 3 === 0`). If true, it prints "Fizz".
- Next, it checks if `i` is a multiple of 5 (`i % 5 === 0`). If true, "Buzz" is printed.
- If none of these conditions are met, the loop simply prints the number `i`.

<details>
<summary>View JS Code - script.js - D - FizzBuzz Challenge</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
for (i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```
</details>

### [E. For Of Loop](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/05-for-of-loop)

![For Of Loop - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/05-for-of-loop/05-for-of-loop.png)

This exercise focused on the `for...of` loop in JavaScript, a modern loop statement introduced in ES6 that simplifies the process of iterating over iterable objects such as arrays, strings, and maps.

#### Iterating Over Arrays
Initially, the exercise compared the traditional `for` loop with the `for...of` loop for iterating over arrays. The traditional method involves a counter and accessing array elements by their index. In contrast, the `for...of` loop directly retrieves the value of each element in the array, making the code more concise and readable.

#### Accessing Object Properties in Arrays
The exercise also demonstrated how the `for...of` loop could be used to iterate through an array of objects, conveniently accessing each object's properties. This was exemplified with an array of user objects, where the name property of each user was printed.

#### Looping Over Strings
In addition to arrays, the `for...of` loop can iterate over strings. The exercise showed how each character of a string can be accessed sequentially, which is useful in scenarios where string manipulation or analysis is required.

#### Looping Over Maps
Finally, the exercise introduced iterating over Maps using the `for...of` loop. Maps in JavaScript are key-value pairs, and the loop conveniently allowed access to both the key and value in each iteration. This demonstrated the versatility of the `for...of` loop in handling various data structures.

<details>
<summary>View JS Code - script.js - E - For Of Loop</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const items = ["Book", "Table", "Chair", "Kite"];
const users = [{ name: "Jordan" }, { name: "Kate" }, { name: "Steve" }];

// Default Way to Loop Through Array with For Loop
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// Does the Same Thing, But Shorter
// for (const item of items) {
//   console.log(item);
// }

// Access a Specific Property in An Array
// for (const user of users) {
//   console.log(user.name);
// }

// Loop Over Strings
const str = "Hello World!";

for (const letter of str) {
  console.log(letter);
}

// Loop Over Maps
const map = new Map();
map.set("name", "Jordan");
map.set("age", 23);

for (const [key, value] of map) {
  console.log(key, value);
}
```
</details>

### [F. For In Loop](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/06-for-in-loop)

![For In Loop - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/06-for-in-loop/06-for-in-loop.png)

This exercise introduced the `for...in` loop in JavaScript, a specialized loop statement used for enumerating over the properties of an object, including inherited enumerable properties. It's particularly useful for objects where keys are not necessarily known beforehand or are dynamic.

#### Iterating Over Object Properties
The first part of the exercise demonstrated iterating over the properties of an object using the `for...in` loop. For an object `colorObj` containing color properties, the loop iterated over each property (key), and the corresponding value was accessed using `colorObj[key]`. This method is commonly used to retrieve both keys and values of an object, showcasing the `for...in` loop's effectiveness in handling objects.

#### Iterating Over Array Indices
The exercise also demonstrated how the `for...in` loop could be used with arrays. Although less common than using a `for...of` loop for arrays, `for...in` can iterate over array indices as keys. In the example with the `colorArr` array, the loop printed the value of each array element. However, it's essential to note that `for...in` will iterate over all enumerable properties, including those on the prototype chain, which is not typically desired when working with arrays.

#### Key Points
- The `for...in` loop is ideal for iterating over object properties.
- It can also be used for arrays, but it's less preferred compared to `for...of` because it includes all enumerable properties, not just the array's indices.
- This loop offers a convenient way to explore objects with unknown or dynamic property names.

This exercise effectively demonstrates the utility of the `for...in` loop in JavaScript, particularly in scenarios involving object property enumeration.

<details>
<summary>View JS Code - script.js - F - For In Loop</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const colorObj = {
  color1: "red",
  color2: "orange",
  color3: "yellow",
  color4: "green",
};

// Get Keys & Values in an Object Using a For In Loop
for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ["red", "orange", "yellow", "green"];

// Get Keys in an Array Using a For In Loop
for (const key in colorArr) {
  console.log(colorArr[key]);
}
```
</details>

### [G. forEach](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/07-forEach)

![forEach - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/07-forEach/07-forEach.png)

In this exercise, the focus was on understanding and using the `forEach` method in JavaScript, which is an array method that provides a simple way to iterate over array elements. It's particularly useful for executing a function on each array element.

#### Basic `forEach` Usage
The exercise started with basic examples of using `forEach` on an array of social media platforms. It demonstrated three different syntax variations:
1. Standard function syntax.
2. Arrow function syntax, which provides a more concise way of writing functions.
3. An even shorter arrow function syntax without curly braces for single-statement functions.

These examples illustrated the flexibility of `forEach` in accommodating different function syntaxes while iterating over array elements.

#### Advanced `forEach` Features
The exercise also explored the use of `forEach` with additional parameters. The `forEach` method not only passes the current element to the callback function but also provides the index of the current element and the entire array. This was exemplified by printing the index along with the element.

#### Passing a Defined Function to `forEach`
Additionally, the exercise showed how to pass a predefined function to `forEach`. This approach can make the code more modular and reusable.

#### Using `forEach` on Array of Objects
The final part of the exercise involved using `forEach` on an array of objects, demonstrating how to access specific properties (like `url`) of objects within an array. This is a common use case in real-world applications where data is often structured as arrays of objects.

<details>
<summary>View JS Code - script.js - G - forEach</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const socials = ["LinkedIn", "Facebook", "Instagram", "TikTok"];

// console.log(socials.__proto__);

// Use a forEach Loop
// socials.forEach(function (social) {
//   console.log(social);
// });

// Shorter Version With Arrow Function
// socials.forEach((social) => {
//   console.log(social);
// });

// Even Shorter Version with No Curly Braces
// socials.forEach((social) => console.log(social));

// Pass Index and Array into forEach
// socials.forEach((social, index, arr) =>
//   console.log(`${index} - ${social}`, arr)
// );

// Pass a Function into forEach
// function logSocials(social) {
//   console.log(social);
// }

// socials.forEach(logSocials);

// forEach Method Used on an Object
const socialObjs = [
  { name: "LinkedIn", url: "https://linkedin.com/" },
  { name: "Facebook", url: "https://facebook.com/" },
  { name: "Instagram", url: "https://instagram.com/" },
  { name: "TikTok", url: "https://tiktok.com/" },
];

// Get a Specific Property from the Object Using Dot Notation
socialObjs.forEach((social) => console.log(social.url));
```
</details>

### [H. Filter](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/08-filter)

![Filter - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/08-filter/08-filter.png)

In this exercise, the focus was on using the `filter` method in JavaScript, a powerful array method that creates a new array with all elements that pass the test implemented by the provided function. This method is particularly useful for extracting a subset of elements based on certain criteria from an array.

#### Filtering Even Numbers
The exercise began with a simple example of filtering even numbers from an array. It showed how to use the `filter` method with a standard function, an arrow function, and compared this approach to achieving the same result with a `forEach` loop. This comparison highlighted the conciseness and efficiency of using `filter` over manually iterating and pushing elements into a new array.

#### Filtering Specific Categories of Companies
Next, the exercise demonstrated filtering objects from an array of company objects based on specific property values. One example filtered companies in the "Retail" category. This illustrated how `filter` can be effectively used to select items from an array of objects based on the value of a certain property.

#### Filtering Based on Multiple Conditions
The exercise also included examples of more complex filters, such as finding companies that started in or after 1980 and ended in or before 2005, and companies that lasted 10 years or more. These examples showed how `filter` can handle multiple conditions within its callback function to yield precise subsets of array elements.

#### Filter - Key Points
- The `filter` method offers a succinct way to create new arrays based on specific conditions.
- It can be used with both simple data types and objects, making it versatile for various use cases.
- `filter` increases readability and efficiency in code, especially when compared to manual iteration methods.

<details>
<summary>View JS Code - script.js - H - Filter</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Default Way of Writing Filter with Function
// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// Shorter Version with Arrow Function & No Brackets
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Same But Much Longer with forEach
// const evenNumbers = [];
// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

// console.log(evenNumbers);

const companies = [
  { name: "Company 1", category: "Finance", start: 1981, end: 2004 },
  { name: "Company 2", category: "Retail", start: 1992, end: 2008 },
  { name: "Company 3", category: "Auto", start: 1999, end: 2007 },
  { name: "Company 4", category: "Retail", start: 1989, end: 2010 },
  { name: "Company 5", category: "Technology", start: 2009, end: 2014 },
  { name: "Company 6", category: "Finance", start: 1987, end: 2010 },
  { name: "Company 7", category: "Auto", start: 1986, end: 1996 },
  { name: "Company 8", category: "Technology", start: 2011, end: 2016 },
  { name: "Company 9", category: "Retail", start: 1981, end: 1989 },
];

// Get Only Retail Companies
const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);
console.log("Retail Companies: ", retailCompanies);

// Get Only Companies Started in or After 1980 and Ended in or Before 2005
const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
console.log("Early Companies: ", earlyCompanies);

// Get Only Companies That Lasted 10 Years or More
const longCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log("Long Companies: ", longCompanies);
```
</details>

### [I. Map](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/09-map)

![Map - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/09-map/09-map.png)

In this JavaScript exercise, I focused on the `map` method to manipulate arrays. This method was used to create new arrays by applying functions to each element of an existing array.

1. **Doubling Numbers**: Demonstrated the simplicity of `map` by doubling the values in a number array. A comparison with `forEach` illustrated `map`'s concise approach.
2. **Complex Data Manipulation**: Extracted specific data from an array of company objects, including names, categories, and operation lengths. This showcased `map`'s ability to handle complex data structures.
3. **Advanced Techniques**: Employed chaining `map` methods for sequential transformations and combined `map` with `filter` for more sophisticated data processing, like filtering and doubling even numbers.

This exercise effectively showcased the versatility and power of the `map` method in array manipulation within JavaScript.

<details>
<summary>View JS Code - script.js - I - Map</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop Through Array with map
const doubleNumbers = numbers.map((number) => number * 2);

console.log(doubleNumbers);

// Same with forEach
const doubleNumbers2 = [];

numbers.forEach((number) => {
  doubleNumbers2.push(number * 2);
});

console.log(doubleNumbers2);

const companies = [
  { name: "Company 1", category: "Finance", start: 1981, end: 2004 },
  { name: "Company 2", category: "Retail", start: 1992, end: 2008 },
  { name: "Company 3", category: "Auto", start: 1999, end: 2007 },
  { name: "Company 4", category: "Retail", start: 1989, end: 2010 },
  { name: "Company 5", category: "Technology", start: 2009, end: 2014 },
  { name: "Company 6", category: "Finance", start: 1987, end: 2010 },
  { name: "Company 7", category: "Auto", start: 1986, end: 1996 },
  { name: "Company 8", category: "Technology", start: 2011, end: 2016 },
  { name: "Company 9", category: "Retail", start: 1981, end: 1989 },
];

// Create an Array of Company Names
const companyNames = companies.map((company) => company.name);

console.log(companyNames);

// Create an Array with Just Company & Category
const companyAndCategory = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

console.log(companyAndCategory);

// Create an Array of the Name & Length of Each Company in Years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start,
  };
});

console.log(companyYears);

// Chain map Methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

// Longer Version of Above
const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  });

console.log(squareAndDouble2);

// Chaining Different Methods
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((evenNumber) => evenNumber * 2);

console.log(evenDouble);
```
</details>

### [J. Reduce](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/10-reduce)

![Reduce - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/10-reduce/10-reduce.png)

In this section, I learned about the `reduce` method in JavaScript, a powerful array function that simplifies an array to a single value. This method is particularly useful for aggregating array elements into a cumulative result.

#### Basic Summation with Reduce
I started by summing an array of numbers using `reduce`. The `reduce` function takes two parameters: a callback function and an initial value. In the full version, I defined the callback with a function keyword, which accumulates the sum of the array elements. The initial value is set to 0. 

#### Refactoring with Arrow Functions
To make the code more concise, I refactored the sum calculation using an arrow function. This shorter version accomplishes the same task with less syntax.

#### Alternative Approach: For Loop
For comparison, I implemented the same summation using a traditional for loop, highlighting the efficiency and readability of the `reduce` method.

#### Practical Application: Calculating Total Price
Finally, I applied `reduce` to a more practical example: calculating the total price of items in a shopping cart. Each item in the cart array has a `price` property, and `reduce` accumulates these values to find the total price.

This exercise enhanced my understanding of the `reduce` method, illustrating its versatility in array manipulation and data aggregation in JavaScript.

<details>
<summary>View JS Code - script.js - J - Reduce</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Reduce an Array to a Single Value
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Full Version of Sum with Reduce
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// Shorter Version with Arrow Function
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);

// Using a For Loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

console.log(sum3());

const cart = [
  { id: 1, name: "Product 1", price: 130 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 170 },
];

const total = cart.reduce((acc, product) => acc + product.price, 0);

console.log(total);
```
</details>

### [K. Array Method Challenges](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/11-array-method-challenges)

![Array Method Challenges - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/05-iteration-array-methods/11-array-method-challenges/11-array-method-challenges.png)

In this exercise, I tackled two challenges that involved using different JavaScript array methods to manipulate and process data. These challenges helped me understand how to combine methods like `filter`, `map`, and `reduce` for more complex operations.

#### Challenge 1: Filtering and Mapping Data
The first challenge involved processing an array of people objects. The task was to filter out individuals who are 25 years old or younger and then map their data into a new array. This new array only contains their full name and email address. By chaining `filter` and `map`, I efficiently processed the array in a single, readable statement. The `filter` method isolated the young individuals, and the `map` method transformed each selected object into the required format.

#### Challenge 2: Summing Positive Numbers
The second challenge focused on an array of numbers where the goal was to calculate the sum of all positive numbers. Here, I combined `filter` and `reduce`: first, `filter` was used to remove negative numbers, and then `reduce` aggregated the remaining positive numbers into their total sum. This exercise showcased how `reduce` can be effectively paired with `filter` to compute cumulative values based on conditional criteria.

These challenges deepened my understanding of how array methods can be combined to effectively manipulate and analyze data in JavaScript.

<details>
<summary>View JS Code - script.js - K - Array Method Challenges</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Challenge 1
const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => {
    return {
      name: `${person.firstName} ${person.lastName}`,
      email: person.email,
    };
  });
console.log(youngPeople);

// Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

const sumPositive = numbers
  .filter((number) => number > 0)
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

console.log(sumPositive);
```
</details>