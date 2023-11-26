# JavaScript Sandbox
Self-Paced Learning Sandbox for JavaScript with Node.js, Jest, Webpack, JSON, HTML & CSS

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9.svg?style=for-the-badge&logo=Webpack&logoColor=black)
![JSON](https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

## [1. Variables & Data Types](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types)

## [2. Arrays & Objects](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects)

### [A. Array Basics](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/01-array-basics)

![Array Basics Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/02-arrays-and-objects/01-array-basics/01-array-basics.png)

This exercise focuses on the fundamentals of arrays in JavaScript. It starts with creating arrays using two different methods: the array literal and the array constructor. The array literal method is demonstrated with `const numbers = [10, 20, 30, 40, 50]`, and the array constructor is shown through `const fruits = new Array("Apple", "Watermelon", "Orange")`. 

The exercise then explores accessing and manipulating array elements. It shows how to access the value at a specific index, such as `numbers[0]` or `fruits[1]`, and even combining values from different indices. For example, `x = numbers[0] + numbers[3]` adds the first and fourth elements of the `numbers` array.

Another key aspect covered is determining the length of an array using the `.length` property, which is crucial for understanding the size and iterating over arrays.

Modifying arrays is another focal point. The script demonstrates how to replace an existing element, like changing the third fruit from "Orange" to "Strawberry". Additionally, it touches on setting the length of an array to truncate it, though this part is commented out.

Appending new elements to an array is illustrated in two ways: by directly setting a value at a specific index (`fruits[3] = "Peach"`) and by using the `.length` property to append at the end (`fruits[fruits.length] = "Blueberry"`).

<details>
<summary>View JS Code - script.js - A - Array Basics</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
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
```
</details>

### [B. Array Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/02-array-methods)

![Array Methods Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/02-arrays-and-objects/02-array-methods/02-array-methods.png)

In this portion, the focus was on exploring various array methods in JavaScript, demonstrating how they can manipulate and interrogate array data. The script began with a basic array declaration, `const arr = [50, 40, 30, 20, 10];`, and then delved into various methods that modify or inspect the array.

1. **Adding and Removing Elements**: The `.push()` method was used to add a value to the end of the array, while `.pop()` was utilized to remove the last element. Similarly, `.unshift()` and `.shift()` were demonstrated to add and remove elements from the beginning of the array, respectively.

2. **Reversing the Array**: The `.reverse()` method was used to reverse the order of the array elements, showcasing how to manipulate the array's sequence.

3. **Checking for Values**: The script showed how to use `.includes()` to check if a specific value is present in the array. This is useful for conditional statements and validations within array operations.

4. **Finding Element Index**: The `.indexOf()` method was used to find the index of a particular element, demonstrating how to locate the position of a value within an array.

5. **Slicing and Splicing**: The exercise went through `.slice()` and `.splice()` methods. While `.slice()` was used to create a new array from a portion of the existing array, `.splice()` was shown in a commented-out section, indicating its use for removing or replacing elements in the array.

6. **Combining Methods**: The script concluded with an example of chaining multiple array methods. It used `.splice()` to remove elements, followed by `.reverse()` to reverse the order, then converted the result to a string with `.toString()`, and finally used `.charAt(0)` to get the first character of that string.

<details>
<summary>View JS Code - script.js - B - Array Methods</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let x;
const arr = [50, 40, 30, 20, 10];

// Push a Value Onto the End of an Array
arr.push(0);

// Pop a Value Off the End of an Array
arr.pop(0);

// Unshift a Value Onto the Front of an Array
arr.unshift(60);

// Shift a Value Off the Front of an Array
arr.shift(60);

// Reverse the Order of the Array
arr.reverse();

// Check if an Array Includes Values
x = arr.includes(100);
x = arr.includes(30);

// Check the Index of a Value
x = arr.indexOf(10);

// Slice an Array from 1st to 2nd
x = arr.slice(1);
x = arr.slice(1, 4);

// Splice an Array Starts at 1st, Goes for 2nd
// x = arr.splice(1, 4);

// Use Multiple Methods, Building on One Another
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);
```
</details>

### [C. Array Nesting, Concatenation & Spread](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/03-array-nesting-concat-spread)

![Array Nesting, Concatenation & Spread Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/02-arrays-and-objects/03-array-nesting-concat-spread/03-array-nesting-concat-spread.png)

This exercise delved into more advanced array manipulation techniques in JavaScript, focusing on array nesting, concatenation, the spread operator, and some static methods on array objects.

1. **Nesting Arrays**: The script initially explored nesting arrays within other arrays. Although the code for pushing an array (`berries`) into another (`fruits`) to create a nested array was commented out, it set the stage for understanding multi-dimensional arrays.

2. **Accessing Nested Array Elements**: The script demonstrated how to access elements in nested arrays, such as `allFruits[1][2]`, which navigates through the nested structure to retrieve a specific value.

3. **Concatenating Arrays**: The exercise showcased the `.concat()` method to combine `fruits` and `berries` into a new array. This method is essential for merging arrays without altering the original arrays.

4. **Spread Operator**: The script introduced the use of the spread operator (`...`), a more modern way to concatenate or expand arrays. It was used to combine `fruits` and `berries` into a single array, demonstrating a concise and powerful feature of ES6.

5. **Flattening Arrays**: The `.flat()` method was used on a nested array `arr` to flatten it, converting the array from multi-level to a single-level array, thereby simplifying the structure for easier manipulation.

6. **Static Methods on Array Objects**:
   - `Array.isArray()`: This method was used to check if a given value is an array, an essential check in many programming scenarios.
   - `Array.from()`: Demonstrated to create an array from an array-like or iterable object, like converting a string `"12345"` into an array of its characters.
   - `Array.of()`: This method was used to create an array from a set of values, providing a simple way to convert individual values into an array format.

<details>
<summary>View JS Code - script.js - C - Array Nesting, Concatenation & Spread</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
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

// Static Methods on Array Objects

// Check if Something is an Array
x = Array.isArray("Hello");

// Create an Array from an Array Like Value
x = Array.from("12345");

const a = 1;
const b = 2;
const c = 3;

// Another Way of Creating Arrays from Values
x = Array.of(a, b, c);

console.log(x);
```
</details>

### [D. Array Challenges](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/04-array-challenge)

![Array Challenges Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/02-arrays-and-objects/04-array-challenges/04-array-challenges.png)

#### Challenge 1
The first challenge involved a series of operations on an array `arr = [1, 2, 3, 4, 5]`. The task was to:
1. Add `0` to the beginning of the array using `.unshift(0)`.
2. Append `6` to the end of the array with `.push(6)`.
3. Reverse the order of the array using `.reverse()`.

The expected result was `[6, 5, 4, 3, 2, 1, 0]`, and the exercise provided a clear demonstration of how combining these array methods can effectively transform an array's structure and content.

#### Challenge 2
The second challenge required more complex operations involving two arrays, `arr1 = [1, 2, 3, 4, 5]` and `arr2 = [5, 6, 7, 8, 9, 10]`. The task was to:
1. Create a new array by slicing the first four elements of `arr1`.
2. Combine this sliced array with `arr2` to form a single array.
3. Flatten the resulting array to ensure it was a single-level array.

To achieve this, the solution used `Array.of(arr1.slice(0, 4), arr2).flat()`, creating a nested array with the sliced `arr1` and `arr2`, and then flattening it to achieve the desired result: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

<details>
<summary>View JS Code - script.js - D - Array Challenges</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Challenge 1
const arr = [1, 2, 3, 4, 5];

arr.unshift(0);
arr.push(6);
arr.reverse();

console.log(arr);
// Expected Result: [6, 5, 4, 3, 2, 1, 0];

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr3 = Array.of(arr1.slice(0, 4), arr2).flat();

console.log(arr3);
// Expected Result: [1,2,3,4,5,6,7,8,9,10]
```
</details>

### [E. Object Literals](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/05-object-literals)

![Object Literals Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/02-arrays-and-objects/05-object-literals/05-object-literals.png)

This exercise explored the use and manipulation of **object literals** in JavaScript. An object literal is a collection of **key-value pairs**, and it's a fundamental part of JavaScript for organizing and storing data.

1. **Creating an Object**: The exercise started by creating an object `person` with various properties, including nested objects and arrays. This demonstrated the flexibility of object literals in holding different types of data.

2. **Accessing Object Properties**: Various ways to access object properties were illustrated, such as using dot notation (`person.age`) and bracket notation (`person["age"]`). This also included accessing nested properties like `person.address.city` and elements of an array within an object (`person.hobbies[2]`).

3. **Modifying Object Properties**: The script showed how to modify existing properties, such as updating `person.name` to "Jordan Muller" and changing `person.isAdmin` to `false`. This highlighted how objects in JavaScript are mutable.

4. **Deleting Properties**: It demonstrated the deletion of properties using the `delete` keyword, as shown by removing the `address` property from the `person` object.

5. **Adding New Properties**: The exercise included adding a new property (`hasChildren`) and setting its value, showcasing the dynamic nature of JavaScript objects.

6. **Function as a Property**: The script also assigned a function to a property in the object (`person.greet`). This function, when called, used the `this` keyword to access the object's properties, reinforcing the concept of methods in objects.

7. **Handling Unconventional Property Names**: The example with `person2` illustrated how to handle property names that aren't valid identifiers (like "first name"), requiring bracket notation for access (`person2["first name"]`).

<details>
<summary>View JS Code - script.js - E - Object Literals</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
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
```
</details>

### [F. Object Spread Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/06-object-spread-methods)

![Object Spread Methods Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/02-arrays-and-objects/06-object-spread-methods/06-object-spread-methods.png)

This exercise went into more advanced aspects of working with objects in JavaScript, particularly focusing on the object spread syntax, object methods, and handling arrays of objects.

1. **Object Creation and Property Assignment**: The script began by creating an object `todo` using the `new Object()` syntax and then adding properties to it (`id`, `name`, `completed`). This approach demonstrates an alternative way of creating objects in JavaScript.

2. **Accessing Nested Object Properties**: It showed how to access deeply nested properties, like `person.address.coords.lat`, highlighting the process of drilling down into nested objects.

3. **Spread Syntax for Object Merging**: The exercise introduced the object spread syntax (`{ ...obj1, ...obj2 }`) to merge `obj1` and `obj2` into a new object `obj3`. This ES6 feature provides a concise and readable way to combine objects.

4. **Object.assign for Merging**: In contrast, `Object.assign({}, obj1, obj2)` was used to achieve a similar result as the spread syntax, merging `obj1` and `obj2` into `obj4`. This method offers more flexibility and is part of older JavaScript versions.

5. **Array of Objects**: The script included an array `todos` containing multiple objects, each representing a todo item. Accessing properties of these objects, like `todos[0].name`, was demonstrated, which is common in JavaScript for handling collections of similar objects.

6. **Object.keys, Object.values, Object.entries**: The exercise utilized `Object.keys(todo)`, `Object.values(todo)`, and `Object.entries(todo)` to extract keys, values, and key-value pairs from an object, respectively. These methods are crucial for iterating over objects and manipulating their data.

7. **Checking Property Existence**: The use of `todo.hasOwnProperty("name")` and `todo.hasOwnProperty("age")` showed how to check if an object contains a specific property, which is a common requirement in conditional logic and data validation.

<details>
<summary>View JS Code - script.js - F - Object Spread Methods</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
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

// Get All Keys from an Object and Put Them Into an Array
x = Object.keys(todo);

// Get Length of the Properties of an Object
x = Object.keys(todo).length;

// Get All Values from an Object and Put Them Into an Array
x = Object.values(todo);

// Get an Array of the Key Value Pairs
x = Object.entries(todo);

// Check if an Object Has a Specific Property
x = todo.hasOwnProperty("name");
x = todo.hasOwnProperty("age");

console.log(x);
```
</details>

### [G. Destructuring & Naming](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/07-destructuring-naming)

![Destructuring & Naming Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/02-arrays-and-objects/07-destructuring-naming/07-destructuring-naming.png)

In this JavaScript exercise, I explored the concepts of object property shorthand, object destructuring, and array destructuring, which are ES6 features enhancing code conciseness and readability.

**Object Property Shorthand**: The exercise started with basic variable definitions for `firstName`, `lastName`, and `age`. It then demonstrated two approaches to construct an object: the traditional key-value assignment in `person`, and the ES6 property shorthand in `person2`. The shorthand syntax, used in `person2`, is more efficient, especially when the property names are the same as the variable names.

**Destructuring Objects**: The script then focused on object destructuring using a `todo` object. This technique allows for extracting multiple properties from an object into separate variables in a single line. In the provided example, properties `id`, `title`, and `name` from the `user` object within `todo` are destructured. Notably, the destructuring syntax also facilitates renaming properties during assignment, as seen with `id` being renamed to `todoId`.

**Destructuring Arrays**: The exercise included array destructuring as well, using the `numbers` array. This method enables the assignment of array elements to individual variables in a succinct manner. For instance, the first two elements are assigned to `first` and `second`, while the rest of the elements are gathered into an array named `rest`. This approach is particularly useful for easily accessing specific elements and managing the remaining elements.

<details>
<summary>View JS Code - script.js - G - Destructuring & Naming</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
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
```
</details>

### [H. JSON Introduction](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/08-json-intro)

![JSON Introduction Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/02-arrays-and-objects/08-json-intro/08-json-intro.png)

This JavaScript exercise introduced the basics of working with JSON (JavaScript Object Notation), a lightweight data-interchange format commonly used for data storage and communication in web applications.

**JavaScript Object to JSON String**: The script started with a JavaScript object `post`, containing properties like `id`, `title`, and `body`. It demonstrated how to convert this object into a JSON string using `JSON.stringify(post)`. This process, known as serialization, is essential for transmitting data in a text format that can be easily sent over a network or stored in a file.

**Parse JSON String to JavaScript Object**: The next part of the exercise involved parsing the JSON string back into a JavaScript object. This was achieved using `JSON.parse(str)`, where `str` is the JSON string representation of the `post` object. Parsing is crucial for converting data received as JSON back into a usable JavaScript object.

**Array of Objects and JSON**: The script also handled an array of objects `posts`, each representing a blog post. It showcased the conversion of this array into a JSON string using `JSON.stringify(posts)`. This example highlighted JSON's ability to represent more complex data structures, including arrays and nested objects.

**External JSON Data (todo.json)**: Additionally, an external JSON file `todo.json` was referenced, containing a simple array of todo items. This part of the exercise underlined how JSON is used in real-world scenarios, where data is often stored and exchanged in JSON format between different parts of an application or between different applications.

<details>
<summary>View JSON File - todo.json - H - JSON Introduction</summary>
<br>

![JSON](https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white)

```json
[
  {
    "id": "1",
    "title": "Take out trash"
  }
]
```
</details>

<details>
<summary>View JS Code - script.js - H - JSON Introduction</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const post = {
  id: 1,
  title: "Post One",
  body: "This is the body of the post!",
};

// Convert a JavaScript Object to JSON String
const str = JSON.stringify(post);
x = post;

// Parse JSON
const obj = JSON.parse(str);
x = obj;

const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is the body of the post!",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is the body of the post!",
  },
];
x = posts;

const str2 = JSON.stringify(posts);
x = str2;

console.log(x);
```
</details>

### [I. Object Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/09-object-challenge)

![Object Challenge Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/02-arrays-and-objects/09-object-challenge/09-object-challenge.png)

In this challenge, I tackled a challenge involving object manipulation and JSON conversion in JavaScript, centered around a library database scenario.

**Setting Up the Library Database**: The script began by creating an array `library`, consisting of book objects. Each book object contained properties such as `title`, `author`, and a nested `status` object with boolean flags (`own`, `reading`, `read`).

**Updating Status Properties**: The next step involved modifying the `status` property of each book. Specifically, the `read` status of all books in the library was updated to `true`, illustrating how to access and modify properties of objects within an array.

**Destructuring and Accessing Data**: The script then demonstrated object destructuring with the first book in the library. The line `const { title: firstBook } = library[0]` extracted the `title` property from the first book object and assigned it to a new variable `firstBook`. This approach provides an efficient way to retrieve specific properties from objects.

**Converting to JSON**: The final part of the exercise showcased the conversion of the updated `library` array into a JSON string using `JSON.stringify(library)`. This process is essential when preparing data for storage or transmission as it converts the JavaScript array into a standardized, text-based format.

Overall, this challenge highlighted essential skills in JavaScript object manipulation and JSON handling. It provided a practical scenario of managing a library database, demonstrating how to update object properties, retrieve specific data using destructuring, and convert data structures into a JSON format.

<details>
<summary>View JS Code - script.js - I - Object Challenge</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
library = [
  {
    title: "Title 1",
    author: "Author 1",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Title 2",
    author: "Author 2",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Title 3",
    author: "Author 3",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];
console.log(firstBook);

library = JSON.stringify(library);

console.log(library);
```
</details>

## [3. Functions & Scope](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope)

### [A. Function Basics](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/01-function-basics)

![Function Basics Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/03-functions-scope/01-function-basics/01-function-basics.png)

In this exercise, I explored the basics of functions in JavaScript, focusing on creation, invocation, parameters, and return values.

I started by defining a basic function, `sayHello`, which simply logs "Hello World!" to the console. This function does not take any parameters and serves as an introduction to the syntax of function declaration. Then, I moved on to functions with parameters. I created a function `add` that takes two numbers as parameters and logs their sum. This function demonstrates how to pass arguments to a function and use them within its scope.

I then covered the important concept of return values in functions. The `subtract` function returns the result of subtracting two numbers. This is a key aspect of functions, showing how they can return data to the place where they are called. It also illustrates that any code after the `return` statement in a function does not execute, as seen with the `console.log` statement after the return.

Finally, I demonstrated how to store the returned value from a function in a variable. I did this by assigning the result of `subtract(10, 2)` to a constant `result`, and then logging it alongside another invocation of `subtract(20, 5)`. This part of the exercise underscores the practical application of functions in storing and manipulating data.

<details>
<summary>View JS Code - script.js - A - Function Basics</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Basic Function
function sayHello() {
  console.log("Hello World!");
}

// Invoke Function
sayHello();

// Function with Parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

// Invoke Function by Passing Arguments
add(5, 10);

// Return Result Instead of Logging
function subtract(num1, num2) {
  return num1 - num2;
  // Nothing After the Return Will Run
  console.log("After the return");
}

// Set a Variable to the Returned Value of the Function
const result = subtract(10, 2);
console.log(result, subtract(20, 5));
```
</details>

### [B. Parameters & Arguments](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/02-params-arguments)

![Parameters & Arguments Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/03-functions-scope/02-params-arguments/02-params-arguments.png)

In this JavaScript exercise, I explored the nuances of parameters and arguments, covering default values, rest parameters, and passing objects and arrays as arguments.

The exercise began with exploring functions with default parameter values. In the `registerUser` function, a default value of `"User"` is set for the `user` parameter. This demonstrates how to handle scenarios where a function might be called without an argument, ensuring the function still operates correctly by providing a fallback value.

Next, I examined the concept of function scope, specifically in the context of variables. I noted that variables defined within a function, like `user` in `registerUser`, are not accessible outside of the function, as seen in the commented-out `console.log(user)` line.

The exercise then introduced rest parameters with the `sum` function. Rest parameters allow functions to accept an indefinite number of arguments as an array, providing flexibility in how functions are invoked. I demonstrated this by summing a series of numbers passed as individual arguments.

Passing objects as parameters was another key concept covered. The `loginUser` function takes a `user` object as a parameter and returns a string containing the user's name and ID. This part highlighted how objects can be used to group related data and pass it to functions.

Similarly, I explored passing arrays to functions with the `getRandom` function, which selects a random element from an array. This example showed the utility of arrays in functions, especially when dealing with a collection of items.

<details>
<summary>View JS Code - script.js - B - Parameters & Arguments</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Function with No Default Value for Parameter
// function registerUser(user) {
//   return user + " is registered";
// }

// Function with Default Value Set for Parameter
function registerUser(user = "User") {
  return user + " is registered";
}

// User is Not Defined Due to Scope
// console.log(user);

console.log(registerUser("Jordan"));

// Undefined Value When no Arguments are Passed
console.log(registerUser());

// Rest Parameters Create an Array
function sum(...numbers) {
  let total = 0;

  // Loop to Sum all Numbers in an Array
  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Objects as Parameters
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "Jordan",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "John",
  })
);

// Arrays as Parameters
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5]);
```
</details>

### [C. Global Scope](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/03-global-scope)

![Global Scope Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/03-functions-scope/03-global-scope/03-global-scope.png)

In this JavaScript exercise, I focused on understanding global function scope, specifically examining the behavior of the global scope, function scope, block scope, and the concept of variable shadowing.

The exercise began with a demonstration of window methods. The `window.alert()` function is a method of the global `window` object in browsers, showing how JavaScript interacts with the browser environment. It also highlighted that methods of the `window` object can be called directly without referencing `window`, as seen with the `alert()` function.

I then introduced a variable `x` in the global scope with a value of 100. This part of the exercise served to establish the presence of a globally scoped variable that can be accessed anywhere in the script.

The `run` function demonstrated the concept of function scope and how properties of the `window` object can be accessed within a function. I logged the `innerWidth` property of the `window` object, both directly and via the `window` reference, to show their equivalence. Within the `run` function, I also declared a function-scoped constant `y`, illustrating that variables defined within a function are limited to that function's scope.

After calling `run()`, I logged the globally scoped variable `x`, reinforcing the idea that global variables are accessible throughout the script.

The exercise concluded with an exploration of block scope within an `if` statement. I declared a new constant `x` and another constant `z` inside the block. This showcased variable shadowing, where the inner `x` shadows the global `x`, and block-scoped variables like `z` that are only accessible within the block.

<details>
<summary>View JS Code - script.js - C - Global Scope</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Window Methods
// window.alert("Hello");
// alert("World!");

const x = 100;

// Function with Window Properties
function run() {
  console.log(window.innerWidth);
  console.log(innerWidth);
  // Function Scope
  const y = 50;
  console.log(y, "in function");
}

run();

// Global Scope
console.log(x, "in global");

// Block Scope
if (true) {
  // Variable Shadowing
  const x = 25;
  const z = 75;
  console.log(z, "in block");
  console.log(z + x);
}
```
</details>

### [D. Block Scope](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/04-block-scope)

![Block Scope Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/03-functions-scope/04-block-scope/04-block-scope.png)

In this section, I explored the intricacies of block scope and the differences in variable declaration using `const`, `let`, and `var`. The exercise highlighted how the scope of variables affects their accessibility in different parts of a script.

The exercise started by defining a constant `x` in the global scope with a value of 100. This set the stage for understanding the accessibility of global variables within block scopes.

Within an `if` block, I declared another constant `y` with a value of 200. I demonstrated that variables declared within a block (like `y`) are accessible within that block, as evidenced by logging the sum of `x` and `y`. However, trying to access `y` outside its block scope results in a ReferenceError, reinforcing the concept of block-level scope.

The script also included a `for` loop where I declared a variable `i` with `let`. This showed that variables declared with `let` within loops are also block-scoped and are not accessible outside their block.

I further illustrated block scope with another `if` block where I declared variables `a`, `b`, and `c` using `const`, `let`, and `var` respectively. Here, I demonstrated that while `const` and `let` maintain block-level scope, `var` does not, as `c` was accessible outside its block.

The function `run` was used to demonstrate function-level scope, particularly for variables declared with `var`. The variable `d`, declared with `var` inside `run`, was not accessible outside the function, showing that `var` has function scope when used inside functions.

Lastly, I examined the accessibility of variables declared with `const` and `var` in relation to the `window` object. The exercise concluded by highlighting that `const` variables are not properties of the `window` object and thus not accessible via `window`, whereas `var` variables are.

<details>
<summary>View JS Code - script.js - D - Block Scope</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const x = 100;

if (true) {
  const y = 200;
  console.log(x + y);
}

// Reference Error: y is not defined at this scope
// console.log(x + y);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Reference Error: i is not defined at this scope
// console.log(i);

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

// Accessible When var is Used at a Block Level
console.log(c);

function run() {
  var d = 100;
  console.log(d);
}

// Not Accessible When var is Used at a Function Level
// Reference Error: d is not defined at this scope
// console.log(d);

const foo = 1;
var bar = 2;

// Const is Not Accessible from Window Object
console.log(window.foo);
// Var Is Accessible from Window Object
console.log(window.bar);
```
</details>

### [E. Nested Scope](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/05-nested-scope)

![Nested Scope Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/03-functions-scope/05-nested-scope/05-nested-scope.png)

In this exercise, I delved into nested scopes, examining how scopes interact within functions and blocks, and the accessibility of variables in different levels of nesting.

The exercise began with the `first` function, which contains a nested function `second`. Within `first`, I declared a constant `x` with a value of 100. Inside `second`, I declared another constant `y` with a value of 200. By logging the sum of `x` and `y` inside `second`, I demonstrated how inner functions can access variables from their parent scopes. However, trying to access `y` from the outer function `first` results in an error, as inner scope variables are not accessible in outer scopes.

The `first` function also showcased the need to call the inner function `second` explicitly for it to execute. This part of the exercise emphasized the concept of function invocation within nested function structures.

The script then explored nested scopes within block statements. I declared a constant `x` within an `if` block, and nested another `if` block inside it, where I declared a constant `y`. In this nested block, I was able to access both `x` and `y`, demonstrating how block scopes work similarly to function scopes in terms of variable accessibility. The nested block structure also reinforced that variables declared in an inner scope are not accessible in the outer scope.

Throughout this exercise, I illustrated the principle of lexical scoping in JavaScript, where the accessibility of variables is determined by their position within nested blocks or functions. Which helped me with understanding how variables interact across different levels of scope in JavaScript.

<details>
<summary>View JS Code - script.js - E - Nested Scope</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y);
  }

  // Can't Access Nested Scopes, Only Parent Scopes
  // console.log(y);

  // First Wont Run Without Second Being Called Inside
  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  // console.log(x + y);
}
```
</details>

### [F. Declaration vs. Expression](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/06-declaration-vs-expression)

![Declaration vs. Expression Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/03-functions-scope/06-declaration-vs-expression/06-declaration-vs-expression.png)

In this example, I delved into the difference between `function declarations` and `function expressions` in JavaScript, focusing particularly on the concept of **hoisting**.

I discovered that regular function declarations are hoisted, meaning they can be called before they are defined in the code. This was demonstrated with the `addDollarSign` function, where I successfully called the function before its declaration in the script. This function, when called, simply concatenates a dollar sign (`"$"`) to the passed value.

On the other hand, function expressions are not hoisted. This means they cannot be used before they are set in the script. This concept was illustrated by the commented-out call to `addPlusSign`, a function expression. If this line were to be uncommented and executed, it would result in an error because the function expression is not available until after it is defined. The `addPlusSign` function, similar to `addDollarSign`, appends a plus sign (`"+"`) to the provided value.

Through this exercise, I gained a clearer understanding of how JavaScript treats function declarations and expressions differently, especially regarding their availability in code due to hoisting. This knowledge is crucial for writing error-free and predictable JavaScript code, especially in scenarios where the order of function definition and usage is important.

<details>
<summary>View JS Code - script.js - F - Declaration vs. Expression</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Hoisting Allows A Regular Function Declaration to Be Used Before the Function is Defined In Code
console.log(addDollarSign(10));

// Function Declaration
function addDollarSign(value) {
  return "$" + value;
}

// Expressions Are Not Available Until Set
// console.log(addPlusSign(50));

// Function Expression
const addPlusSign = function (value) {
  return "+" + value;
};
```
</details>

### [G. Arrow Functions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/07-arrow-functions)

![Arrow Functions Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/03-functions-scope/07-arrow-functions/07-arrow-functions.png)

In this exercise, I delved into arrow functions in JavaScript, a concise and modern way to write functions introduced in ES6. Arrow functions are especially suited for anonymous functions and offer a more succinct syntax compared to traditional function expressions.

The exercise began with a comparison between the traditional function declaration and the arrow function syntax. I converted a function named `add`, initially written in the traditional format, into an arrow function. This function demonstrates the basic structure of an arrow function, taking two parameters and returning their sum. Following this, I explored the compact arrow function syntax with implicit return, as seen in the `subtract` function, which omits curly braces and the `return` keyword for single-expression functions.

I also explored single-parameter arrow functions, where parentheses around the parameter can be omitted, as illustrated in the `double` function. Another interesting aspect was returning object literals directly from arrow functions. This requires enclosing the object brackets with parentheses to differentiate the object from the function's body, demonstrated in the `createObj` function.

Finally, I applied arrow functions in array methods. I replaced a traditional function in the `forEach` method with an arrow function for more concise and readable code. This practical application highlighted the utility of arrow functions in enhancing code readability and efficiency, especially in callback scenarios.

<details>
<summary>View JS Code - script.js - G - Arrow Functions</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
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
```
</details>

### [H. IIFE - (Immediately Invoked Function Expression)](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/08-iife)

![Immediately Invoked Function Expression Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/03-functions-scope/08-iife/08-iife.png)

In this example, I explored the concept of **Immediately Invoked Function Expressions** (IIFE) in JavaScript. IIFEs are functions that are executed as soon as they are defined, providing a powerful tool for encapsulating code and managing scope.

The first part of the exercise involved defining a function that declares a `user` variable and a `hello` function within an IIFE. By wrapping these declarations in an IIFE, I ensured that they do not pollute the global scope. The `user` variable and `hello` function were thus confined to the scope of the IIFE, demonstrated by the fact that calling `hello()` outside the IIFE resulted in a `ReferenceError`.

I also experimented with passing arguments to an IIFE. In another example, I passed the string `"Jordan"` to an IIFE, which then concatenated this string with `"Hello "` and logged the result. This showcased how IIFEs can be used not just for isolating code but also for executing code with specific arguments immediately.

In the `otherscript.js` file, I declared the `user` variable again, but this time in the global scope, outside any IIFE. This helped me understand the significance of IIFEs in avoiding variable naming conflicts and scope-related issues in larger applications. 

<details>
<summary>View JS Code - script.js - H - Immediately Invoked Function Expression</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// SyntaxError: user has already been declared
// const user = "John";

// Immediately Invoked Function Expressions
(function () {
  const user = "John";
  console.log(user);

  const hello = () => console.log("Hello World!");
  hello();
})();

// ReferenceError: hello is not defined at this scope
// hello();

(function (name) {
  console.log("Hello " + name);
})("Jordan");
```
</details>

<details>
<summary>View JS Code - otherscript.js - H - Immediately Invoked Function Expression</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const user = "Jordan";
console.log(user);

```
</details>

### [I. Function Challenges](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/09-function-challenges)

![Function Challenges Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/03-functions-scope/09-function-challenges/09-function-challenges.png)

In this section, I tackled a series of function challenges in JavaScript, each designed to test and enhance my understanding of function creation, arrow function syntax, and their practical applications.

**Challenge 1** focused on temperature conversion from Fahrenheit to Celsius. I first created a traditional function named `getCelsius` that takes a Fahrenheit temperature and returns its Celsius equivalent. Then, I rewrote this function using arrow function syntax as `getC`, demonstrating the more concise format. Finally, I combined this with another arrow function, `toTempC`, which adds the Celsius symbol to the output, illustrating the composability of functions in JavaScript.

**Challenge 2** dealt with finding the minimum and maximum values in an array. I wrote a function named `minMax` that takes an array of numbers and uses the `Math.min()` and `Math.max()` functions along with the spread operator to determine the smallest and largest values, respectively. This function returns an object containing both values, showcasing how functions can return complex data types like objects.

**Challenge 3** involved an Immediately Invoked Function Expression (IIFE). This IIFE calculates the area of a rectangle, taking length and width as parameters. The function immediately executes with the provided dimensions (10 and 5), and outputs a formatted string describing the area of the rectangle. This challenge illustrated the use of IIFEs for encapsulating functionality and executing it on the spot, without the need for calling the function separately.

Through these challenges, I gained a deeper understanding of different ways to define and use functions in JavaScript, including traditional functions, arrow functions, and IIFEs. Each challenge provided insight into how these different forms can be applied in various scenarios, enhancing my ability to write versatile and effective JavaScript code.

<details>
<summary>View JS Code - script.js - I - Function Challenges</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Challenge 1
function getCelsius(tempFahrenheit) {
  return (5 / 9) * (tempFahrenheit - 32);
}
console.log(getCelsius(32));

const getC = (tempF) => (5 / 9) * (tempF - 32);
console.log(getC(212));

const toTempC = (num) => num + "\xB0C";
console.log(toTempC(getC(100)));

// Challenge 2
function minMax(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
((length, width) => {
  const area = length * width;

  const output = `Area of Rectangle with Width ${width} and Length ${length} is ${area}`;

  console.log(output);
})(10, 5);
```
</details>

### [J. Execution Context in Action](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/10-execution-context-in-action)

![Execution Context in Action Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/03-functions-scope/10-execution-context-in-action/10-execution-context-in-action.png)

In this example, I explored the concept of execution context in JavaScript through a simple program involving variables and a function. Execution context refers to the environment in which a JavaScript code is executed, including information about the variables, functions, and this keyword.

The script starts by declaring two constants, `x` and `y`, with values 100 and 50, respectively. These constants are stored in the global execution context, which is the base level context in which all JavaScript code initially runs.

The focus then shifts to a function named `getSum`, which takes two parameters, `n1` and `n2`. Within this function, a new execution context is created. This context is specific to each call of the `getSum` function and contains its own set of variables. In this case, the variable `sum` is declared, which is the result of adding `n1` and `n2`. The function then returns this sum.

Two different calls to the `getSum` function are made. The first call passes `x` and `y` as arguments, resulting in a sum of 150. The second call directly passes the numbers 10 and 5, resulting in a sum of 15. Each call creates its own execution context, independent of the other. The results of these calls are stored in `sum1` and `sum2`, both of which exist in the global execution context.

By logging `sum1` and `sum2`, the script demonstrates the final outcome of these separate execution contexts interacting within the global context. The console output shows the two different sums calculated by separate calls to the `getSum` function.

<details>
<summary>View JS Code - script.js - J - Execution Context in Action</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const x = 100;
const y = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);
```
</details>

### [K. Call Stack](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/11-call-stack)

![Call Stack Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/03-functions-scope/11-call-stack/11-call-stack.png)

In this JavaScript example, I delved into the concept of the call stack, an essential component of JavaScript's execution model. The call stack follows the Last In, First Out (LIFO) principle, meaning that the last function that gets pushed onto the stack is the first to be popped off once it completes its execution.

The exercise began by defining three functions: `first`, `second`, and `third`. Each function, when called, logs a message indicating its name. Initially, these functions were called sequentially: `first()`, followed by `second()`, and finally `third()`. In this setup, each function completes its execution before the next one begins, demonstrating a simple, linear call stack operation.

The script was then modified to illustrate a more complex call stack scenario. In the new version, the `first` function calls `second` within it, and `second` in turn calls `third`. This nesting of function calls demonstrates how the call stack accumulates frames.

When `first()` is called, it's pushed onto the stack and starts executing. Inside `first`, `second()` is called, pausing `first`'s execution and pushing `second` onto the stack. The same happens when `second` calls `third`. The `third` function is pushed onto the stack, executes and logs its message, and then is popped off the stack. The process then continues with `second` and finally `first`, each completing their execution and being removed from the stack in reverse order.

This demonstration of nested function calls shows how the call stack works in JavaScript. Each function call creates a new frame on the stack, and as each function completes its execution, its frame is removed from the stack.

<details>
<summary>View JS Code - script.js - K - Call Stack</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Stacks are LIFO: Last in First Out

// One at a Time on the Stack
function first() {
  console.log("first...");
}

function second() {
  console.log("second...");
}

function third() {
  console.log("third...");
}

first();
second();
third();

// First Stays Open While Second and Third are Being Used
function first() {
  console.log("first...");
  second();
}

function second() {
  console.log("second...");
  third();
}

function third() {
  console.log("third...");
}

first();
```
</details>

## [4. Logic & Control Flow](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow)

### [A. If Statements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/01-if-statements)

<img src="https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/04-logic-control-flow/01-if-statements/comparison-operators.png" width="600px" height="auto" alt="Comparison Operators Chart"/>

![If Statements - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/04-logic-control-flow/01-if-statements/01-if-statements.png)

In this exercise, I explored the use of `if` statements in JavaScript, which are fundamental for controlling the flow of code based on certain conditions.

#### Basic `if` Statements
I began with simple `if` statements to understand their basic structure. In these examples, I used `if (true)` and `if (false)` to demonstrate how the code block within an `if` statement executes only when the condition is true.

#### Comparing Variables
Next, I compared two variables, `x` and `y`, using relational operators:
- `x > y`: This condition was true, so the corresponding console message was displayed.
- `x === y`: This condition was false, hence the code inside this block did not execute.
- `x !== y`: As this condition was true, the code block executed and displayed the message.

#### Shorthand Syntax
Finally, I experimented with a shorthand syntax for an `if` statement. While it's a compact way to write conditions, it's not typically recommended for clarity and maintainability of code. This section helped me understand the importance of `if` statements in decision-making within a JavaScript program and highlighted best practices in writing clear and maintainable conditional statements.

<details>
<summary>View JS Code - script.js - A - If Statements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// If True, Then Run The Following Code
if (true) {
  console.log("This is true!");
}

// Will Not Run Because Expression is False
if (false) {
  console.log("This is not true!");
}

const x = 10;
const y = 5;

// x > y is true, so it runs
if (x > y) {
  console.log(`${x} is greater than ${y}`);
}

// x === y is false, so it doesn't run
if (x === y) {
  console.log(`${x} is equal to ${y}`);
}

// x !== y is true, so it runs
if (x !== y) {
  console.log(`${x} is NOT equal to ${y}`);
}

// Shorthand If Statement Not The Best Syntax
if (x > y)
  console.log(`${x} is greater than ${y}`), console.log("This is also true");
else console.log("Else this");
```
</details>

### [B. Else If Nesting](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/02-else-if-nesting)

![Else If Nesting - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/04-logic-control-flow/02-else-if-nesting/02-else-if-nesting.png)

This exercise went into the concepts of `else if` nesting and using multiple conditions in `if` statements in JavaScript, showcasing how to create more complex decision-making structures.

#### Else If and Nested If Statements
I used a `Date` object to get the current hour and then implemented a series of `if`, `else if`, and `else` statements to display different messages based on the time of day. This included:
- Greetings like "Good morning!" or "Good night!" based on the time.
- Additional nested `if` statements to execute more specific tasks, like "Wake Up!" at 6 AM or "Time for Bed!" after 8 PM.

#### Multiple Conditions in If Statements
Furthermore, I explored how to incorporate multiple conditions within a single `if` statement using logical operators:
- **AND (`&&`)**: Used to check if it is work time (between 7 AM and 3 PM).
- **OR (`||`)**: Used to remind to brush teeth at 6 AM or 8 PM.

This exercise helped me understand how to use `else if` and nested `if` statements to handle multiple conditions and create more complex logical flows in JavaScript. It also highlighted the effectiveness of logical operators for combining multiple conditions in a single statement.

<details>
<summary>View JS Code - script.js - B - Else If Nesting</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const d = new Date(10, 30, 2022, 20, 0, 0);
const hour = d.getHours();

// If, Else If, and Else
// if (hour < 12) {
//   console.log("Good morning!");
// } else if (hour < 18) {
//   console.log("Good afternoon!");
// } else {
//   console.log("Good night!");
// }

// Nested If
if (hour < 12) {
  console.log("Good morning!");

  if (hour === 6) {
    console.log("Wake Up!");
  }
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good night!");

  if (hour >= 20) {
    console.log("Time for Bed!");
  }
}

// Multiple Conditions in an If Statement
// AND
if (hour >= 7 && hour < 15) {
  console.log("It is work time!");
}

// OR
if (hour === 6 || hour === 20) {
  console.log("Brush your teeth!");
}
```
</details>

### [C. Switches](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/03-switches)

![Switches - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/04-logic-control-flow/03-switches/03-switches.png)

In this exercise, I focused on understanding and using the `switch` statement in JavaScript, a useful alternative to multiple `if` statements when dealing with multiple cases based on a single value.

#### Using Switch with a Variable
I started by using a `Date` object to determine the current month. The `switch` statement was then used to match the `month` variable against various cases:
- For each month (January, February, March), a corresponding message was logged.
- The `default` case was used to handle all other months, logging "It is not Jan, Feb, or Mar".

#### Switch with a Boolean Expression
Next, I demonstrated an interesting use of the `switch` statement with a boolean expression. Instead of matching against a specific value, the cases were conditions:
- `case hour < 12`: This checked if it was morning and displayed "Good morning!".
- `case hour < 18`: This checked for afternoon times to display "Good afternoon!".
- The `default` case covered all remaining hours, outputting "Good night!".

This exercise helped me understand how `switch` statements offer a clean and readable way to handle multiple conditional branches in JavaScript. It also showed the versatility of `switch` by using it both with standard value matching and with boolean expressions for more dynamic condition checking.

<details>
<summary>View JS Code - script.js - C - Switches</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const d = new Date(2022, 4, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log("It is January");
    break;
  case 2:
    console.log("It is February");
    break;
  case 3:
    console.log("It is March");
    break;
  default:
    console.log("It is not Jan, Feb, or Mar");
}

switch (true) {
  case hour < 12:
    console.log("Good morning!");
    break;
  case hour < 18:
    console.log("Good afternoon!");
    break;
  default:
    console.log("Good night!");
}
```
</details>

### [D. Calculator Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/04-calculator-challenge)

![Calculator Challenge - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/04-logic-control-flow/04-calculator-challenge/04-calculator-challenge.png)

In the "Calculator Challenge", I implemented a simple calculator function in JavaScript using a `switch` statement to handle different arithmetic operations based on the provided operator.

#### Function Overview
- The function `calculator` takes three parameters: `num1`, `num2`, and `operator`.
- The `switch` statement within the function assesses the `operator` to determine the operation to perform.

#### Handling Different Operations
- For each case (`"+"`, `"-"`, `"*"`, `"/"`), the function performs the corresponding arithmetic operation on `num1` and `num2`.
- After the operation, it immediately returns the result, eliminating the need for a `break` statement (though included for clarity).
- The `default` case handles invalid operators, returning an error message.

#### Test Cases
- The function is tested with different sets of inputs and operators (`+`, `-`, `*`, `/`, and an invalid operator `&`), demonstrating its versatility and error-handling capability.

This exercise demonstrated the practical use of `switch` statements in creating a function that can handle multiple scenarios. It also showcased how to build a basic calculator function in JavaScript that is both flexible and user-friendly, with clear error messages for unsupported operations.

<details>
<summary>View JS Code - script.js - D - Calculator Challenge</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      return "Error, Operator Not Found\nPlease use +, -, *, or /";
  }
}

console.log(calculator(5, 2, "+"));
console.log(calculator(5, 2, "-"));
console.log(calculator(5, 2, "*"));
console.log(calculator(5, 2, "/"));
console.log(calculator(5, 2, "&"));
```
</details>

### [E. Truthy & Falsy Values](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/05-truthy-falsy)

![Truthy & Falsy Values - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/04-logic-control-flow/05-truthy-falsy/05-truthy-falsy.png)

This exercise focused on understanding the concepts of `truthy` and `falsy` values in JavaScript. These values play a crucial role in conditionals and type coercion.

#### Falsy Values
Falsy values in JavaScript include:
- `false`
- `0`
- Empty strings (`""` or `''`)
- `null`
- `undefined`
- `NaN` (Not a Number)

These values are considered false when encountered in a boolean context, as demonstrated by the conditional check using `const x = false`. The `else` block executes because `x` is falsy.

#### Truthy Values
Truthy values are essentially everything that is not falsy. This includes:
- `true`
- Non-empty strings, like `"0"`, `" "`, or `"false"`
- Empty arrays (`[]`) and objects (`{}`)
- Empty functions

For instance, the non-empty string `email` is truthy, leading to the execution of the corresponding `if` block.

#### Handling Special Cases
Special attention was given to handling edge cases like `0` and empty arrays or objects. For example, a workaround for zero (falsy) being treated as having no children is using `!isNaN(children)`, and for empty arrays and objects, checking their length (`posts.length > 0`) or key count (`Object.keys(user).length > 0`) respectively.

#### Loose vs Strict Equality
Lastly, the exercise demonstrated the difference between loose equality (`==`) and strict equality (`===`). Loose equality allows for type coercion, leading to `false == 0`, `"" == 0`, and `null == undefined` being true. In contrast, strict equality checks for both value and type equality, rendering all these comparisons false.

<details>
<summary>View JS Code - script.js - E - Truthy & Falsy Values</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Falsy Values:
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

const x = false;

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

// Truthy Values:
// - Everything else that is not falsy
// - true
// - "0" (0 as a string)
// - " " (Space in a String)
// - "false" (False in a String)
// - [] (Empty Array)
// - {} (Empty Object)
// - function () {} (Empty Function)

const email = "test@test.com";

if (email) {
  console.log("You passed in an email");
}

console.log(Boolean(email));

// Truthy and False Caveats
const children = 0;

// Evaluates as False, Since 0 is Falsy
// if (children) {
// Possible Workaround By Checking If Not Equal to Undefined
// if (children !== undefined) {
// Another Workaround For This Issue
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter a number of children");
}

// Checking for Empty Arrays
const posts = [];

// No Posts Is Never Shown Since Empty Array Isn't Falsy
// if (posts) {
// Workaround for Checking Empty Array
if (posts.length > 0) {
  console.log("List Posts");
} else {
  console.log("No Posts");
}

// Checking for Empty Objects
const user = {};

// Empty Object Always Evaluates as Truthy
// if (user) {
// Workaround for Checking Empty Objects
if (Object.keys(user).length > 0) {
  console.log("List User");
} else {
  console.log("No User");
}

// Loose Equality (==)
console.log(false == 0);
console.log("" == 0);
console.log(null == undefined);

// Equal To (Including Type) (===)
console.log(false === 0);
console.log("" === 0);
console.log(null === undefined);
```
</details>

### [F. Logical Operators](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/06-logical-operators)

![Logical Operators - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/04-logic-control-flow/06-logical-operators/06-logical-operators.png)

This exercise delves into the use of logical operators in JavaScript, specifically focusing on the `AND (&&)`, `OR (||)`, and `Nullish Coalescing (??)` operators. Each operator has distinct behavior that influences how expressions are evaluated.

#### AND Operator (`&&`)
- **General Rule**: Returns the first falsy value encountered, or the last value if all are truthy.
- **Example Use**: `console.log(10 > 20 && 30 > 15 && 40 > 30)` evaluates to `false` because the first condition is false.
- **Returning Last Truthy Value**: In the cases of `10 && 20` and `10 && 20 && 30`, since all values are truthy, `a` is assigned the last value (20 and 30, respectively).
- **Returning First Falsy Value**: For `10 && "" && 0 && 30`, `a` is assigned `""` (the first falsy value).

#### OR Operator (`||`)
- **General Rule**: Returns the first truthy value encountered, or the last value if all are falsy.
- **Example Use**: `console.log(10 > 20 || 30 > 15)` outputs `true` because at least one condition is true.
- **Returning First Truthy Value**: In `10 || 20` and `0 || 20`, `b` is assigned 10 and 20 respectively.
- **Returning Last Value**: For `0 || null || undefined`, `b` is assigned `undefined`, the last value in the chain.

#### Nullish Coalescing Operator (`??`)
- **Function**: Returns the right-side operand if the left-side operand is `null` or `undefined`.
- **Returning Left Side**: In `10 ?? 20` and `"" ?? 30`, `c` is assigned the left-side operand as it's neither `null` nor `undefined`.
- **Returning Right Side**: For `null ?? 20` and `undefined ?? 30`, `c` is assigned the right-side operand due to the left being `null` or `undefined`.

#### Practical Application
- **AND in Conditional Rendering**: The pattern `posts.length > 0 && console.log(posts[0])` demonstrates using `&&` for conditional rendering. Since `posts.length > 0` is true, the second expression executes.

In summary, this exercise provided a comprehensive understanding of how JavaScript evaluates expressions with logical operators, highlighting the importance of understanding operator precedence and the nuances of each operator for effective coding.

<details>
<summary>View JS Code - script.js - F - Logical Operators</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// AND - First Isn't True, So the Whole Thing is False
console.log(10 > 20 && 30 > 15 && 40 > 30);

// OR - Only One Needs to Be True
console.log(10 > 20 || 30 > 15);

// && will return first falsy value or the last value
let a;

// Returns Last Value
a = 10 && 20;
a = 10 && 20 && 30;

// Returns First Falsy Value
a = 10 && "" && 0 && 30;
a = 10 && 0 && 30;

console.log(a);

const posts = ["Post 1", "Post 2"];
// Common Way of Using && Operator, Returns Last Value Since Expression Evaluates to False
posts.length > 0 && console.log(posts[0]);

// || Will return the first truthy value or the last value
let b;

// Returns First Truthy Value
b = 10 || 20;
b = 0 || 20;

// Returns the Last Value
b = 0 || null || undefined;

console.log(b);

// ?? Returns the right side operand when the left is null or undefined - Known as a Nullish Coalescing Operator
let c;

// Returns Left Side Since Left Side is Not Null or Undefined
c = 10 ?? 20;
c = "" ?? 30;

// Returns the Right Side Since Left is Null/Undefined
c = null ?? 20;
c = undefined ?? 30;

console.log(c);
```
</details>

### [G. Logical Assignment](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/07-logical-assignment)

![Logical Assignment - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/04-logic-control-flow/07-logical-assignment/07-logical-assignment.png)

In this exercise, the focus was on understanding and implementing the logical assignment operators in JavaScript: `||=`, `&&=`, and `??=`. These operators provide a more concise way of writing certain types of conditional assignments.

#### Logical OR Assignment (`||=`)
- **Usage**: Assigns the right-hand value to the variable if the variable's current value is falsy.
- **Example**: 
  - Traditional method: Using an `if` statement to assign `10` to `a` if `a` is falsy.
  - Simplified method: `a = a || 10`.
  - Most compact form: `a ||= 10`.
- In the example, `a` is initially `false` (a falsy value), so using `||=` assigns `10` to `a`.

#### Logical AND Assignment (`&&=`)
- **Usage**: Assigns the right-hand value to the variable if the variable's current value is truthy.
- **Example**:
  - Traditional method: Using an `if` statement to assign `30` to `b` if `b` is truthy.
  - Simplified method: `b = b && 30`.
  - Most compact form: `b &&= 30`.
- Here, `b` starts as `20` (a truthy value), so using `&&=` updates `b` to `30`.

#### Nullish Coalescing Assignment (`??=`)
- **Usage**: Assigns the right-hand value to the variable if the variable's current value is `null` or `undefined`.
- **Example**:
  - Traditional method: Using an `if` statement to assign `20` to `c` if `c` is `null` or `undefined`.
  - Simplified method: `c = c ?? 30`.
  - Most compact form: `c ??= 30`.
- In this case, `c` is initially `null`, so `??=` assigns `20` to `c`.

Overall, this exercise demonstrated the efficiency and readability benefits of using logical assignment operators. These operators provide a more concise and expressive way to write conditional assignments, reducing the need for more verbose conditional statements.

<details>
<summary>View JS Code - script.js - G - Logical Assignment</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// ||= Assigns the Right Side Value Only if the Left is a Falsy Value

let a = false;

// Normal If Statement
if (!a) {
  a = 10;
}

// Compact Using ||
a = a || 10;

// Even Smaller Using ||=
a ||= 10;

console.log(a);

// &&= Assigns the Right Side Value Only if the Left is a Truthy Value

let b = 20;

if (b) {
  b = 30;
}

// Compact Using &&
b = b && 30;

// Even Smaller Using &&=
b &&= 30;

console.log(b);

// ??= Assigns the Right Side Value Only if the Left is null or Undefined

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

// Compact Using ??
c = c ?? 30;

// Even Smaller Using ??=
b ??= 30;

console.log(c);
```
</details>

### [H. Ternary Operator](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/08-ternary-operator)

![Ternary Operator - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/04-logic-control-flow/08-ternary-operator/08-ternary-operator.png)

This exercise explored the use of the ternary operator in JavaScript, a concise way to perform conditional operations. The ternary operator is often used as a more compact alternative to the `if-else` statement, especially for simple conditional logic and assignments.

#### Basic Ternary Operator
- **Structure**: `condition ? exprIfTrue : exprIfFalse`.
- **Example**: The code compares an `age` variable to determine voting eligibility. The ternary operator succinctly replaces the traditional `if-else` statement, providing a more streamlined syntax.
  
#### Ternary Operator for Variable Assignment
- **Usage**: To assign values to variables based on a condition.
- **Example**: `const canVote1 = age >= 18 ? true : false;` assigns a boolean value based on the age condition, and `const canVote2 = age >= 18 ? "You Can Vote!" : "You Can't Vote Yet...";` assigns a string message.

#### Ternary with Multiple Statements
- **Functionality**: The ternary operator can execute multiple statements. This is done by enclosing statements in parentheses and separating them with commas.
- **Example**: The `auth` variable is used to either display a welcome message and set the `redirect` variable to "/dashboard" if `auth` is true, or show an access denied message and set `redirect` to "/login" if `auth` is false.

#### Logical AND as an Alternative
- For scenarios where an action should only happen if a condition is true, and there's no alternative action for the false case, `&&` can be used as an alternative. For example, `auth && console.log("Welcome to the Dashboard")` only logs the message if `auth` is true.

#### Using `alert()` with the Ternary Operator
- **Scenario**: The exercise demonstrated using `alert()` within a ternary operation to provide immediate feedback based on the `auth` variable.
- **Example**: 
  - If `auth` is `true`, the user sees "Welcome to the Dashboard!" in an alert box, and `redirect` is set to "/dashboard".
  - If `auth` is `false`, the user sees "Access Denied" in an alert box, and `redirect` is set to "/login".
- **Syntax**: `const redirect = auth ? (alert("Welcome to the Dashboard"), "/dashboard") : (alert("Access Denied"), "/login");`.
- This approach combines the conditional logic and user interaction within a single line, showcasing how ternary operators can effectively streamline code that includes browser-specific functions like `alert()`.

![Ternary Operator - Browser Alert Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/04-logic-control-flow/08-ternary-operator/08-ternary-operator-alert.png)

The use of `alert()` within a ternary operator is a clear example of how JavaScript can interact with the browser environment to create dynamic and responsive web applications. This method is particularly useful for scenarios where immediate user feedback is crucial, such as authentication processes or form submissions.

<details>
<summary>View JS Code - script.js - H - Ternary Operator</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const age = 17;

// Using an If Statement
if (age >= 18) {
  console.log("You Can Vote!");
} else {
  console.log("You Can't Vote Yet...");
}

// Using a Ternary Operator
age >= 18 ? console.log("You Can Vote!") : console.log("You Can't Vote Yet...");

// Assigning a Conditional Value to a Variable
const canVote1 = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "You Can Vote!" : "You Can't Vote Yet...";

console.log(canVote1);
console.log(canVote2);

// Multiple Statements

const auth = true;
// let redirect;

// if (auth) {
//   alert("Welcome to the Dashboard!");
//   redirect = "/dashboard";
// } else {
//   alert("Access Denied");
//   redirect = "/login";
// }

// Does The Same As Above Code, Just Shorter
const redirect = auth
  ? (alert("Welcome to the Dashboard"), "/dashboard")
  : (alert("Access Denied"), "/login");

console.log(redirect);

// auth ? console.log("Welcome to the Dashboard") : null;
// Instead You Can Use:
auth && console.log("Welcome to the Dashboard");
```
</details>

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

## [6. Document Object Model](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model)

### [A. DOM (Document Object Model) Introduction](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/01-dom-intro)

![DOM (Document Object Model) Introduction - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/01-dom-intro/01-dom-intro-console.png)

![DOM (Document Object Model) Introduction - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/01-dom-intro/01-dom-intro-site.png)

In this introductory section, I explored the basics of the Document Object Model (DOM) in JavaScript, which is a crucial concept for web development. The DOM allows JavaScript to interact with and manipulate the HTML and CSS of a webpage, enabling dynamic content and user interactivity.

#### Understanding the `document` Object
The exercise began with understanding the `document` object, a central part of the DOM that represents the entire HTML document. By logging `window.document` and using `console.dir(document)`, I examined the properties and methods available on the `document` object. This helped me understand how JavaScript can access and manipulate different parts of a web page.

#### Targeting Specific Elements
I then moved on to targeting specific portions of the document, such as `document.body`, to access and manipulate the body of the HTML document. The `innerHTML` and `innerText` properties were used to check and manipulate the content of these elements. Additionally, I explored accessing links through `document.links`.

#### Manipulating HTML Content
The exercise also covered how to replace or insert HTML content. I learned that `document.body.innerHTML` can change the entire HTML content of the body element, and `document.write` can insert new content into the document.

#### Element Selection Techniques
Lastly, I practiced selecting HTML elements using their ID with `document.getElementById` and the more versatile `document.querySelector`. These methods are fundamental for targeting and manipulating specific elements on a page.

This introduction to the DOM was a fundamental step in understanding how JavaScript interacts with web pages, forming the basis for dynamic and interactive web development.

<details>
<summary>View HTML Code - index.html - A - Document Object Model Introduction</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Intro</title>
  </head>
  <body>
    <div id="main">
      <h1>DOM Intro</h1>
      <a href="https://google.com">Google</a>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - A - Document Object Model Introduction</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// We Can Log Document from the Window
console.log(window.document);
// Use dir to check Properties & Methods of the Document
// No Need to Use window, since it's the top level object
console.dir(document);

// Different Portions of the Document Can Be Targeted
console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.body.innerText);
console.log(document.links);

// Replace Everything in the innerHTMl with The Following
// document.body.innerHTML = "<h1>Hello World!</h1>";

// Inserts as the next element in the Document
// document.write("Hello from JS!");

// Selecting Using a Specific ID
console.log(document.getElementById("main"));
const main = document.getElementById("main");
// main.innerHTML = "<h1>Hello from main!</h1>";

// Using a Query Selector
document.querySelector("#main h1").innerText = "Hello DOM!";
```
</details>

### [B. Examining Document Object Properties](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/02-examining-document-object-properties)

![Examining Document Object Properties - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/02-examining-document-object-properties/02-examining-document-object-properties-site.png)

![Examining Document Object Properties - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/02-examining-document-object-properties/02-examining-document-object-properties-console.png)

In this exercise, I built a simple shopping list application using HTML, CSS, and JavaScript, focusing on DOM manipulation and basic styling.

#### HTML Structure (`index.html`)
The HTML file establishes the structure of the shopping list application:
- A header displaying the title 'Shopping List'.
- A form for adding new items, including an input field and an 'Add Item' button.
- A filter input to search through the list items.
- A pre-populated list of items (Apples, Orange Juice, Oreos, Milk) each with a delete button.
- A 'Clear All' button to remove all items from the list.
- External links to Font Awesome for icons and a separate CSS stylesheet.

#### JavaScript Functionality (`script.js`)
The JavaScript file explores different methods to interact with the DOM:
- Accessing and manipulating various document properties like `documentElement`, `head`, `body`, `doctype`, `domain`, `URL`, `characterSet`, `contentType`.
- Experimenting with forms, links, and images within the document.
- Converting HTML collections to arrays to use array methods like `forEach`.

#### CSS Styling (`style.css`)
The CSS file provides styling to enhance the visual appeal:
- Basic resets and global styles using the Poppins font.
- Styling for the form, input fields, buttons, and the list of items.
- Responsive design adjustments for smaller screens.

Overall, this exercise demonstrates fundamental web development skills, including HTML structure creation, applying CSS for styling, and using JavaScript for basic DOM interactions and manipulations.

<details>
<summary>View HTML Code - index.html - B - Examining Document Object Properties</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - B - Examining Document Object Properties</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let output;

// Deprecated Method
// output = document.all;
// output = document.all[10];
// output = document.all.length;

// Everything In the HTML
output = document.documentElement;

// Just Head
output = document.head;
// Just Body
output = document.body;

// Children in Collections
output = document.head.children;
output = document.body.children;

// Various Misc. Methods
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Forms
// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;

// Set an ID on an Element
// document.forms[0].id = "new-id";

// Links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = "www.google.com";
// output = document.links[0].id = "google-link";
// output = document.links[0].className = "google-class";
// output = document.links[0].classList;
// output = document.links[0].classList.add("google-class");
// output = document.links[0].classList.remove("google-class");

// Images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Can't Use for Each without Creating an Array
const forms = Array.from(document.forms);
// document.forms.forEach((form) => console.log(form));
forms.forEach((form) => console.log(form));

console.log(output);
```
</details>

<details>
<summary>View CSS Code - style.css - B - Examining Document Object Properties</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [C. DOM Selectors for Single Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/03-dom-selectors-single-elements)

![DOM Selectors for Single Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/03-dom-selectors-single-elements/03-dom-selectors-single-elements-site.png)

![DOM Selectors for Single Elements - Console Output Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/03-dom-selectors-single-elements/03-dom-selectors-single-elements-console-1.png)

![DOM Selectors for Single Elements - Console Output Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/03-dom-selectors-single-elements/03-dom-selectors-single-elements-console-2.png)

In this exercise, I focused on understanding and using JavaScript DOM selectors to manipulate single elements within the document.

#### Key JavaScript Concepts Explored (`script.js`)

1. **Selecting Elements by ID**
   - Used `document.getElementById()` to select elements by their ID.
   - Accessed and modified properties like `id`, `title`, `className`, and used `setAttribute` to update class attributes.

2. **Manipulating Content and Styles**
   - Changed the content of the title element (`<h1>`) using `textContent`, `innerText`, and `innerHTML`.
   - Applied inline CSS styling to the title element, adjusting properties like `color`, `backgroundColor`, `padding`, and `borderRadius`.

3. **Using Query Selector**
   - Utilized `document.querySelector()` to select the first occurrence of specified elements, IDs, classes, and attributes.
   - Selected and modified the inner text and style of the second list item and the first item within a list.

#### JavaScript Code Implementation
The exercise was practical in demonstrating how to select and manipulate single elements using different methods. Key activities included:
- Changing the title text and style dynamically.
- Selecting elements in various ways (e.g., by tag name, ID, class, nth-child).
- Experimenting with the flexibility of `querySelector` in selecting specific elements and modifying their properties.

<details>
<summary>View HTML Code - index.html - C - DOM Selectors for Single Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1 id="app-title">Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - C - DOM Selectors for Single Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Get Element by ID
// document.getElementById();

// console.log(document.getElementById("app-title"));
// console.log(document.getElementById("app-title").id);
// console.log(document.getElementById("app-title").className);
// console.log(document.getElementById("app-title").getAttribute("id"));

// Set Attributes
// document.getElementById("app-title").id = "new-id";
document.getElementById("app-title").title = "Shopping List";
document.getElementById("app-title").setAttribute("class", "title");

// Set a Variable to Avoid Repeating Code
const title = document.getElementById("app-title");

// Get/Change Content
console.log(title);
title.textContent = "Hello World!";
title.innerText = "Hello Again!";
title.innerHTML = "<strong>Shopping List</strong>";

// Change Styles
title.style.color = "yellow";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// Query Selector
// document.querySelector()

// First Element
console.log(document.querySelector("h1"));
// First Element with ID app-title
console.log(document.querySelector("#app-title"));
// First Element with Class of container
console.log(document.querySelector(".container"));
// First Input Element with Text Set as Type Attribute
console.log(document.querySelector("input[type='text']"));
// 2nd List Item Element
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

// Use these Methods on Other Elements
const list = document.querySelector("ul");
console.log(list);
// Get's the First li inside of Our Current Location, ul
const firstItem = list.querySelector("li");
firstItem.style.color = "blue";
```
</details>

<details>
<summary>View CSS Code - style.css - C - DOM Selectors for Single Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [D. DOM Selectors for Multiple Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/04-dom-selectors-multiple-elements)

![DOM Selectors for Multiple Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/04-dom-selectors-multiple-elements/04-dom-selectors-multiple-elements-site.png)

![DOM Selectors for Multiple Elements - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/04-dom-selectors-multiple-elements/04-dom-selectors-multiple-elements-console.png)

In this JavaScript exercise, the focus was on using different methods to select and manipulate multiple elements within the DOM.

#### Key Concepts in JavaScript (`script.js`)

1. **Selecting Multiple Elements Using `querySelectorAll`**
   - `document.querySelectorAll()` returns a NodeList, which can be directly used with methods like `forEach`.
   - This method was used to select all elements with the class `.item` and apply styles and content changes.

2. **Manipulating NodeList Items**
   - Applied styles to each item in the NodeList.
   - Demonstrated how to remove an element and change HTML content within selected elements.

3. **Selecting Elements by Class Name with `getElementsByClassName`**
   - `document.getElementsByClassName()` returns an HTMLCollection, which requires conversion to an array to use array methods.
   - Showcased how to convert this collection into an array and then iterate over it.

4. **Selecting Elements by Tag Name**
   - `document.getElementsByTagName()` was used to select all `<li>` elements, returning an HTMLCollection.
   - Accessed and modified content of specific list items.

#### Implementing the Code
The exercise provided practical insights into:
- The differences between NodeList and HTMLCollection, and how to interact with each.
- The versatility of `querySelectorAll` for selecting multiple elements with a specific pattern.
- The importance of converting HTMLCollections to arrays for broader functionality.

#### Practical Application
This exercise is crucial for understanding DOM manipulation in web development, particularly when dealing with multiple elements. It teaches how to select, access, and modify multiple elements efficiently, which is a fundamental skill in creating dynamic and interactive web pages.

<details>
<summary>View HTML Code - index.html - D - DOM Selectors for Multiple Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1 id="app-title">Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li class="item">
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li class="item">
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li class="item">
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li class="item">
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - D - DOM Selectors for Multiple Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Query Selector for All Elements
// document.querySelectorAll()

// Returns a NodeList of Items
const listItems = document.querySelectorAll(".item");
console.log(listItems);
console.log(listItems[1]);
console.log(listItems[1].innerText);

// Use a forEach to Loop Through NodeList to Style Each Item
// listItems.forEach((item, index) => {
//   item.style.color = "red";

//   if (index === 1) {
//     item.remove();
//   }
//   if (index === 0) {
//     item.innerHTML = `
//         Pomegranates
//         <button class="remove-item btn-link text-red">
//         <i class="fa-solid fa-xmark"></i>
//         </button>
//     `;
//   }
// });

// Get Elements by Class Name
// Returns an HTMLCollection instead of a NodeList
// No Need for . for class
const listItems2 = document.getElementsByClassName("item");
console.log(listItems2);

// Must Convert to An Array Before Using forEach
const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

// Get Elements by Tag Name
// Returns HTML Collection
const listItems3 = document.getElementsByTagName("li");
console.log(listItems3[0].innerText);
```
</details>

<details>
<summary>View CSS Code - style.css - D - DOM Selectors for Multiple Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [E. Traversing the DOM - Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/05-traversing-the-dom-elements)

![Traversing the DOM - Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/05-traversing-the-dom-elements/05-traversing-the-dom-elements-site.png)

![Traversing the DOM - Elements - Console Output Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/05-traversing-the-dom-elements/05-traversing-the-dom-elements-console-1.png)

![Traversing the DOM - Elements - Console Output Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/05-traversing-the-dom-elements/05-traversing-the-dom-elements-console-2.png)

![Traversing the DOM - Elements - Console Output Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/05-traversing-the-dom-elements/05-traversing-the-dom-elements-console-3.png)

![Traversing the DOM - Elements - Console Output Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/05-traversing-the-dom-elements/05-traversing-the-dom-elements-console-4.png)

This exercise focused on learning how to traverse the Document Object Model (DOM) in JavaScript, which is a crucial skill for dynamically manipulating web pages.

#### Key JavaScript Concepts and Implementations (`script.js`)

1. **Accessing Child Elements**
   - Used `parent.children` to access direct child elements of a parent node.
   - Modified the text and style of specific children using indices, like `parent.children[1].innerText`.

2. **Manipulating First and Last Child Elements**
   - `parent.firstElementChild` and `parent.lastElementChild` were used to easily access and modify the first and last child elements of a parent.

3. **Parent Element Selection**
   - Demonstrated how to select a parent element from a child using `child.parentElement`.
   - Applied styling to the parent element by accessing it through its child.

4. **Sibling Element Navigation**
   - Navigated to sibling elements using `nextElementSibling` and `previousElementSibling`.
   - Adjusted styles of sibling elements to visually demonstrate the traversal.

#### Practical Application
This exercise is essential for understanding DOM manipulation in web development, particularly when dealing with nested elements. It teaches how to:
- Navigate the DOM tree efficiently using parent and child relationships.
- Select and manipulate elements relative to a known node (sibling, parent, child).
- Apply dynamic changes to a webpage’s structure and appearance using JavaScript.

#### Understanding the DOM Hierarchy
DOM traversal is about understanding the hierarchical structure of HTML documents and manipulating elements based on their relationships. This exercise lays the foundation for creating interactive and dynamic content in web applications, where understanding and manipulating the structure of the DOM is crucial.

<details>
<summary>View HTML Code - index.html - D - Traversing the DOM - Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Traversing The DOM</title>
  </head>
  <body>
    <div class="container">
      <h1>Traversing The DOM</h1>
      <div class="parent">
        <!-- Children -->
        <div class="child">Child 1</div>
        <div class="child">Child 2</div>
        <div class="child">Child 3</div>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - D - Traversing the DOM - Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let output;

// Get Child Elements
const parent = document.querySelector(".parent");
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

// Specific Children Element
parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

// First Element Child
parent.firstElementChild.innerText = "Child One";
// Last Element Child
parent.lastElementChild.innerText = "Child Three";

// Get Parent Elements from a Child

const child = document.querySelector(".child");

output = child.parentElement;
// Style the Parent by Selecting the Child and Traversing to Parent
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

// Sibling Elements
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem;
output = secondItem.nextElementSibling;

// Select Next Sibling
secondItem.nextElementSibling.style.color = "green";
// Select Previous Sibling
secondItem.previousElementSibling.style.color = "orange";

console.log(output);
```
</details>

<details>
<summary>View CSS Code - style.css - D - Traversing the DOM - Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-weight: 300;
  margin-bottom: 20px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

.parent div {
  list-style: none;
  margin-bottom: 10px;
}
```
</details>

### [F. Traversing the DOM - Nodes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/06-traversing-the-dom-nodes)

![Traversing the DOM - Nodes - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/06-traversing-the-dom-nodes/06-traversing-the-dom-nodes-site.png)

![Traversing the DOM - Nodes - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/06-traversing-the-dom-nodes/06-traversing-the-dom-nodes-console.png)

This JavaScript exercise focused on traversing the DOM using node properties, allowing for a deeper understanding of the DOM's structure and how nodes can be manipulated.

#### Key JavaScript Concepts and Implementations (`script.js`)

1. **Child Nodes Traversal**
   - Explored `parent.childNodes` to access all child nodes, including text nodes (whitespace, line breaks) and element nodes.
   - Accessed and manipulated specific nodes using indices, such as `parent.childNodes[3].textContent` and `parent.childNodes[5].style.color`.

2. **Understanding Node Properties**
   - Worked with properties like `textContent`, `nodeName`, `innerHTML`, `outerHTML`, and `innerText` to understand different aspects of nodes.
   - Demonstrated the difference between element nodes and text nodes in the child nodes list.

3. **First and Last Child Nodes**
   - Used `parent.firstChild` and `parent.lastChild` to access the first and last child nodes of a parent element.
   - Modified the content of the last child node.

4. **Parent Node Selection**
   - Compared `child.parentNode` and `child.parentElement` to understand their similarities.
   - Styled the parent node to visually demonstrate node traversal.

5. **Sibling Node Navigation**
   - Navigated between sibling nodes using `nextSibling` and `previousSibling`.
   - Highlighted the difference between sibling elements and sibling nodes.

#### Practical Application
This exercise is crucial in understanding how to:
- Navigate and manipulate a more comprehensive range of nodes within the DOM.
- Distinguish between different types of nodes (element, text) and their properties.
- Apply dynamic changes to a webpage's structure, encompassing not just elements but also text nodes and other node types.

#### Understanding Node Types in the DOM
This section provides insight into the complexity of the DOM structure beyond just elements, including text and other node types.

<details>
<summary>View HTML Code - index.html - F - Traversing the DOM - Nodes</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Traversing The DOM</title>
  </head>
  <body>
    <div class="container">
      <h1>Traversing The DOM</h1>
      <div class="parent">
        <!-- Children -->
        <div class="child">Child 1</div>
        <div class="child">Child 2</div>
        <div class="child">Child 3</div>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - F - Traversing the DOM - Nodes</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let output;

// Working with All Child Nodes
const parent = document.querySelector(".parent");
output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[5].style.color = "red";

// First Child
output = parent.firstChild;
// Last Child
output = parent.lastChild;
output = parent.lastChild.textContent = "Hello";

// Parent Node
const child = document.querySelector(".child");

output = child.parentNode;
output = child.parentElement;
child.parentNode.style.backgroundColor = "#ccc";

// Siblings
const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;
// Next Sibling
output = secondItem.nextSibling;
// Previous Sibling
output = secondItem.previousSibling;

console.log(output);
```
</details>

<details>
<summary>View CSS Code - style.css - F - Traversing the DOM - Nodes</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-weight: 300;
  margin-bottom: 20px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

.parent div {
  list-style: none;
  margin-bottom: 10px;
}
```
</details>

### [G. Create Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/07-create-elements)

![Create Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/07-create-elements/07-create-elements-site.png)

This JavaScript exercise demonstrates the process of creating and appending new elements to the DOM, a fundamental skill for dynamic web content manipulation.

#### Key JavaScript Concepts and Implementations (`script.js`)

1. **Creating a New Element**
   - Utilized `document.createElement("div")` to create a new `div` element.
   - Set the class, ID, and other attributes of the newly created element.

2. **Adding Text to the Element**
   - Rather than using `innerText`, created a text node with `document.createTextNode("Hello World!")` and appended it to the `div`.
   - This approach is more efficient and modular, allowing for better control over text content.

3. **Appending the Element to the DOM**
   - Demonstrated two methods of appending the new element:
     - Appended to the end of the body using `document.body.appendChild(div)`.
     - Appended to the bottom of an unordered list (`ul`) using `document.querySelector("ul").appendChild(div)`.

<details>
<summary>View HTML Code - index.html - G - Create Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - G - Create Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Create a div Element
const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My Element");

// Not the Best Way to Be Doing Things
// div.innerText = "Hello World!";

const text = document.createTextNode("Hello World!");
div.appendChild(text);

// Append div to the Bottom of the Body
document.body.appendChild(div);

// Append div to the Bottom of the Unordered List
document.querySelector("ul").appendChild(div);
```
</details>

<details>
<summary>View CSS Code - style.css - G - Create Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [H. List Item - innerHTML vs createElement](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/08-list-item-innerHTML-vs-createElement)

![List Item - innerHTML vs createElement - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/08-list-item-innerHTML-vs-createElement/08-list-item-innerHTML-vs-createElement-site.png)

![List Item - innerHTML vs createElement - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/08-list-item-innerHTML-vs-createElement/08-list-item-innerHTML-vs-createElement-console.png)

In this JavaScript exercise, two different methods were explored for creating and appending list items to the DOM, each with its own characteristics and use cases.

- **innerHTML** is quick and convenient for static or less dynamic content, where performance is not the key concern.
- **createElement** and **appendChild** are more suitable for dynamic content manipulation, where performance and security are critical.

#### Quick & Dirty Method: Using innerHTML (`createListItem` function)

1. **Approach**
   - This method creates a new `li` element and sets its `innerHTML` directly.
   - The HTML content, including a text node and a button with an icon, is assigned in one go as a template literal.

2. **Pros and Cons**
   - **Pros**: Simple and quick to write, especially for complex HTML structures.
   - **Cons**: Less performant for repetitive tasks, potentially insecure if not properly sanitized (risk of XSS attacks).

3. **Use Case**
   - Best for scenarios where the HTML structure is complex but does not change often.

#### Performant & Clean Method: Using createElement (`createNewItem` function)

1. **Approach**
   - This method builds the `li` element piece by piece using `createElement` and `appendChild`.
   - Each part of the list item (text node, button, icon) is created separately and appended to the parent element.

2. **Pros and Cons**
   - **Pros**: More performant, especially in scenarios with repetitive tasks or dynamic content changes. It's also safer against XSS attacks.
   - **Cons**: More verbose and complex, especially for intricate HTML structures.

3. **Use Case**
   - Ideal for situations where content is dynamically generated or updated frequently.

This exercise also highlights the importance of choosing the right approach based on the specific needs of the application, balancing between ease of development, performance, and security.

<details>
<summary>View HTML Code - index.html - H - List Item - innerHTML vs createElement</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - H - List Item - innerHTML vs createElement</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Quick & Dirty
function createListItem(item) {
  const li = document.createElement("li");
  li.innerHTML = `
${item}
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>
`;
  document.querySelector("ul").appendChild(li);
}

createListItem("Eggs");

// Performant & Clean
function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);

  li.appendChild(button);

  console.log(li.innerHTML);

  document.querySelector("ul").appendChild(li);
}

createNewItem("Cheese");
```
</details>

<details>
<summary>View CSS Code - style.css - H - List Item - innerHTML vs createElement</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [I. Refactor to Multiple Functions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/09-refactor-to-multiple-functions)

![Refactor to Multiple Functions - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/09-refactor-to-multiple-functions/09-refactor-to-multiple-functions-site.png)

In this exercise, I refactored the shopping list application to create more organized and modular approach by breaking down the item creation process into separate, reusable functions. This approach enhances readability, maintainability, and scalability of the code.

#### Breakdown of Functions in `script.js`

1. **`createNewItem` Function**
   - Creates a new list item (`li`) element.
   - Appends a text node (the item's name) to the `li`.
   - Calls `createButton` to add a delete button to each item.
   - Appends the newly created `li` to the list (`ul`).

2. **`createButton` Function**
   - Creates a new button element.
   - Sets its class to the passed `classes` argument.
   - Calls `createIcon` to add an icon to the button.
   - Returns the fully constructed button.

3. **`createIcon` Function**
   - Creates an `i` element (commonly used for icons).
   - Sets its class to the provided `classes` argument.
   - Returns the icon element.

#### Usage Example
- `createNewItem("Cheese")` and `createNewItem("Sauce")` are used to add new items to the list.

#### Advantages of This Approach

1. **Modularity**: Each function has a clear, singular purpose. This makes the code easier to understand and maintain.
2. **Reusability**: Functions like `createButton` and `createIcon` can be reused in other parts of the application, reducing code duplication.
3. **Scalability**: Adding new features or modifying existing ones becomes easier because changes can be made in small, isolated parts.
4. **Readability**: Each function's name clearly describes its functionality, making the code more readable and understandable.

<details>
<summary>View HTML Code - index.html - I - Refactor to Multiple Functions</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - I - Refactor to Multiple Functions</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

createNewItem("Cheese");
createNewItem("Sauce");
```
</details>

<details>
<summary>View CSS Code - style.css - I - Refactor to Multiple Functions</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [J. Insert Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/10-insert-elements)

![Insert Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/10-insert-elements/10-insert-elements-site.png)

This exercise focuses on different techniques for inserting elements into the Document Object Model (DOM), an essential aspect of interactive web development. The main file, `script.js`, demonstrates four distinct methods for dynamically adding content to a webpage.

#### Key JavaScript Techniques Demonstrated

1. **Using `insertAdjacentElement`**
   - A new `<h1>` element is created and inserted before a specified element using `insertAdjacentElement("beforebegin", element)`.
   - This method is exemplified by adding a heading before the filter section in the HTML.

2. **Applying `insertAdjacentText`**
   - The `insertAdjacentText` method is used to insert plain text adjacent to an existing element.
   - In the exercise, this is shown by adding text before the first list item.

3. **Incorporating `insertAdjacentHTML`**
   - This method allows for inserting HTML formatted text. 
   - The script adds a `<h2>` heading after the 'Clear All' button using `insertAdjacentHTML("afterend", html)`.

4. **Utilizing `insertBefore`**
   - `insertBefore` is used to insert an element before another within a parent element.
   - Demonstrated by adding a new list item before the third item in the list.

Whether it's adding new interactive elements, updating text, or modifying the structure of the page, these techniques are fundamental for creating responsive and engaging web applications. The exercise effectively demonstrates the versatility and power of JavaScript in DOM manipulation.

<details>
<summary>View HTML Code - index.html - J - Insert Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - J - Insert Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement("beforebegin", h1);
}

insertElement();

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector("li:first-child");
  item.insertAdjacentText("beforebegin", "insertAdjacentText");
}

insertText();

// insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.insertAdjacentHTML("afterend", "<h2>insertAdjacentHTML</h2>");
}

insertHTML();

// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.textContent = "insertBefore";

  const thirdItem = document.querySelector("li:nth-child(3)");
  ul.insertBefore(li, thirdItem);
}

insertBeforeItem();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
```
</details>

<details>
<summary>View CSS Code - style.css - J - Insert Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [K. Custom Insert After Function Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/11-custom-insertafter-challenge)

![Custom Insert After Function Challenge - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/11-custom-insertafter-challenge/11-custom-insertafter-challenge-site.png)

This exercise demonstrates the implementation of a custom `insertAfter` function in JavaScript, filling a common need in DOM manipulation not directly provided by standard JavaScript methods.

#### Overview of the Exercise

The exercise involves creating a function named `insertAfter` that allows developers to insert a new DOM element immediately after an existing one. This function is especially useful because, unlike `insertBefore`, JavaScript does not natively include an `insertAfter` method.

#### Key JavaScript Functionality (`script.js`)

1. **Creating the `insertAfter` Function**
   - The function takes two parameters: `newEl` (the new element to insert) and `existingEl` (the existing element after which the new element is to be inserted).
   - It leverages the `insertBefore` method by targeting the next sibling of `existingEl`. If the next sibling exists, `newEl` is inserted before it. Otherwise, `newEl` is added at the end of the parent element.

2. **Implementing the Function**
   - A new `<li>` element is created and its content is set.
   - The function is then called with this new element and the first item of the list (`li:first-child`) as arguments, inserting the new element after the first item in the list.

The `insertAfter` function is a handy tool for situations where elements need to be added in a specific order not natively supported by existing JavaScript methods. This kind of problem-solving and custom function creation is a key skill for efficient web development.

<details>
<summary>View HTML Code - index.html - K - Custom Insert After Function Challenge</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - K - Custom Insert After Function Challenge</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New element to insert
const li = document.createElement("li");
li.textContent = "Insert Me After!";

// Existing element to insert after
const firstItem = document.querySelector("li:first-child");

insertAfter(li, firstItem);
```
</details>

<details>
<summary>View CSS Code - style.css - K - Custom Insert After Function Challenge</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [L. Replacing Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/12-replacing-elements)

![Replacing Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/12-replacing-elements/12-replacing-elements-site.png)

This exercise is designed to teach the intricacies of replacing elements in the DOM, a key concept in dynamic web development. Through various functions in the `script.js` file, the exercise explores different approaches to replace elements in an HTML document.

#### Key JavaScript Implementations (`script.js`)

1. **Replacing the First Item**
   - Selects the first list item using `document.querySelector("li:first-child")`.
   - Creates a new list item and replaces the first item using `replaceWith`.

2. **Replacing the Second Item**
   - Identifies the second list item with `document.querySelector("li:nth-child(2)")`.
   - Uses `outerHTML` to replace the entire HTML of the second list item.

3. **Replacing All List Items**
   - Retrieves all list items into a NodeList using `document.querySelectorAll("li")`.
   - Iterates over each item and replaces their content. The function uses a ternary operator to vary the replacement text based on the index.

4. **Replacing a Child Element in the Header**
   - Selects the header and the `<h1>` element within it.
   - Creates a new `<h2>` element and replaces the `<h1>` element using `replaceChild`.

This exercise provides a hands-on approach to learning how to replace elements in the DOM and enables me to update the UI dynamically in response to user interactions or data changes, covering a range of scenarios from replacing a single element to updating multiple elements simultaneously.

<details>
<summary>View HTML Code - index.html - L - Replacing Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - L - Replacing Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Replace First
function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replaced First!";

  firstItem.replaceWith(li);
}

replaceFirstItem();

// Replace Second
function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<li>Replaced Second!</li>";
}

replaceSecondItem();

// Replace All
function replaceAllItems() {
  const items = document.querySelectorAll("li");

  //   items.forEach((item, index) => {
  //     item.outerHTML = "<li>Replaced All!</li>";
  //   });

  // Using a Ternary to Have Condition for Specific Index
  items.forEach((item, index) =>
    index === 1
      ? (item.innerHTML = "Second Item!")
      : (item.innerHTML = "Replaced All!")
  );
}

replaceAllItems();

// Replace Child from Parent
function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping List";

  header.replaceChild(h2, h1);
}

replaceChildHeading();
```
</details>

<details>
<summary>View CSS Code - style.css - L - Replacing Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [M. Remove Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/13-remove-elements)

![Remove Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/13-remove-elements/13-remove-elements-site.png)

This exercise provides a practical demonstration of how to remove elements from the DOM using JavaScript, a fundamental skill for dynamic web page manipulation. The provided `script.js` file contains several functions, each illustrating a different method of removing elements.

#### Key JavaScript Techniques (`script.js`)

1. **Removing an Item by ID**
   - Targets the 'Clear All' button using its ID (`#clear`) and removes it from the DOM using the `remove()` method.
   - This demonstrates the simplest way to remove an element when its ID is known.

2. **Removing a Child Element**
   - Selects the first list item (`li:first-child`) and its parent (`ul`).
   - Uses `removeChild` method on the parent element to remove the specified child element.
   - This approach is useful when you have a reference to the parent element.

3. **Removing an Item by Specific Index**
   - Retrieves all list items as a NodeList and removes a specific item based on its index.
   - This method involves selecting the parent element (`ul`) and then removing the child (`li`) at the specified index using `removeChild`.

4. **Removing an Item Without Selecting Parent**
   - Similar to the previous method, but instead of using the parent element to remove the child, it directly calls `remove()` on the selected list item.
   - This approach is more straightforward and does not require selecting the parent element.

Whether it's removing items from a list, clearing form inputs, or dynamically adjusting the layout based on user interactions, these techniques are very important. This exercise effectively demonstrates multiple ways to achieve element removal, providing a versatile toolkit for developers to manage the DOM effectively.

<details>
<summary>View HTML Code - index.html - M - Remove Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - M - Remove Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Remove Item Based on ID
function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

removeClearButton();

// Remove Child
function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

removeFirstItem();

// Remove an Item with a Specific Index
function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  //   const li = document.querySelector(`li:nth-child(${itemNumber}`);
  const li = document.querySelectorAll("li")[itemNumber - 1];

  ul.removeChild(li);
}

removeItem(2);

// Another Example Without Parent Selection
function removeItemNew(itemNumber) {
  const li = document.querySelectorAll("li");

  li[itemNumber - 1].remove();
}

removeItemNew(2);
```
</details>

<details>
<summary>View CSS Code - style.css - M - Remove Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [N. Styles & Classes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/14-styles-classes)

![Styles & Classes - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/14-styles-classes/14-styles-classes-site.png)

This exercise demonstrates how to manipulate styles and classes in the Document Object Model (DOM) using JavaScript. It covers essential techniques for dynamically changing the appearance and behavior of web page elements. The `script.js` file contains a function `run()` that illustrates various ways to add, remove, and toggle classes, as well as change inline styles.

#### Summary of `index.html`

The `index.html` file provides the structure for a web page focused on demonstrating adding and removing styles and classes using JavaScript. It includes a standard HTML5 document structure with a linked CSS stylesheet (`style.css`). The body of the document contains a heading (`<h1>`), a paragraph (`<p>`) with the class "card", an unordered list (`<ul>`) with class "item-list items" consisting of five list items (`<li>`), and a button to trigger the JavaScript function. The script `script.js` is linked at the end of the body to enable interaction.

#### Key JavaScript Concepts (`script.js`)

1. **Working with `className` and `classList`**
   - The exercise explores the use of `className` to get and set the class attribute of an element.
   - It introduces `classList`, a more versatile property that provides methods like `add`, `remove`, `toggle`, and `replace` for class manipulation.
   - These methods allow for adding new classes, removing existing ones, toggling classes on and off, and replacing one class with another.

2. **Changing Inline Styles**
   - Demonstrates how to directly modify the inline styles of elements using JavaScript.
   - In this example, the color of list items is changed dynamically, with a specific color assigned based on the index of the item.

#### Summary of `style.css`

The `style.css` file contains styling rules for the web page. It sets the font family for the body to 'Arial' and a line-height of 1.3 for better readability. The CSS also defines styles for two classes: `.hidden`, which hides elements by setting `display` to none, and `.card`, which styles elements with a light gray background, border, and padding. The `.dark` class alters the background to dark gray and the text color to white, providing a contrasting theme. These styles are integral to the demonstration of class manipulation in the associated JavaScript file.

#### Practical Application

Manipulating styles and classes is a fundamental aspect of creating interactive and dynamic web pages. It allows developers to respond to user interactions by changing the visual aspects of the page, such as highlighting, hiding, or emphasizing certain elements. This exercise provides a practical understanding of how to:
- Dynamically update the styling of elements to reflect changes in the application state or user interaction.
- Use class manipulation methods to add or remove features from elements, making the page more interactive and responsive.

#### Example Usage

In this exercise, when the 'Run' button is clicked, the JavaScript function `run()` is executed. This function can change the appearance of paragraphs and list items on the page, demonstrating real-time DOM manipulation commonly used in web applications. For instance, it can be used to highlight active menu items, show or hide elements based on user actions, or apply theme changes across the website.

<details>
<summary>View HTML Code - index.html - N - Styles & Classes</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Adding & Removing Styles & Classes</title>
  </head>
  <body>
    <h1>Adding & Removing Styles & Classes</h1>

    <p class="card">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
      quasi odio dicta nisi voluptate tempora corporis reprehenderit optio qui
      eos officiis nostrum cupiditate delectus, accusamus adipisci non, amet
      quis provident.
    </p>

    <ul class="item-list items">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>

    <button>Run</button>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - N - Styles & Classes</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  // className
  //   console.log(itemList.className);
  //   text.className = "card dark";
  // classList
  //   console.log(itemList.classList);
  //   itemList.classList.forEach((c) => console.log(c));
  //   text.classList.add("dark");
  //   text.classList.remove("card");
  //   text.classList.toggle("hidden");
  //   text.classList.toggle("dark");
  //   text.classList.replace("card", "dark");

  // Change Style
  //   itemList.style.lineHeight = "3";

  items.forEach((item, index) => {
    item.style.color = "red";

    if (index === 2) {
      item.style.color = "blue";
    }
  });
}

document.querySelector("button").onclick = run;
```
</details>

<details>
<summary>View CSS Code - style.css - N - Styles & Classes</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.3;
}

.hidden {
  display: none;
}

.card {
  background: #f4f4f4;
  border: 1px #ccc solid;
  padding: 15px;
}

.dark {
  background: #333;
  color: #fff;
}
```
</details>

## [7. Events](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events)

### [A. Event Listeners](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/01-event-listeners/shopping-list)

![Event Listeners - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/01-event-listeners/01-event-listeners-site.png)

### [B. Mouse Events](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/02-mouse-events/shopping-list)

![Mouse Events - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/02-mouse-events/02-mouse-events-site.png)

### [C. Event Object](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/03-event-object/shopping-list)

![Event Object - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/03-event-object/03-event-object-site.png)

### [D. Keyboard Events](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/04-keyboard-events/shopping-list)

![Keyboard Events - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/04-keyboard-events/04-keyboard-events-site.png)

### [E. Event Keycodes Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/05-event-keycode-project/event-keycodes)

![Event Keycodes Project - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/05-event-keycode-project/05-event-keycodes-site-1.png)

![Event Keycodes Project - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/05-event-keycode-project/05-event-keycodes-site-2.png)

![Event Keycodes Project - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/05-event-keycode-project/05-event-keycodes-site-3.png)

![Event Keycodes Project - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/05-event-keycode-project/05-event-keycodes-site-4.png)

![Event Keycodes Project - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/05-event-keycode-project/05-event-keycodes-site-5.png)

![Event Keycodes Project - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/05-event-keycode-project/05-event-keycodes-site-6.png)

![Event Keycodes Project - Site Image 7](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/05-event-keycode-project/05-event-keycodes-site-7.png)

![Event Keycodes Project - Site Image 8](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/05-event-keycode-project/05-event-keycodes-site-8.png)

### [F. Input Events](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/06-input-events/shopping-list)

![Input Events - Site Image - 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/06-input-events/06-input-events-site-1.png)

![Input Events - Site Image - 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/06-input-events/06-input-events-site-2.png)

![Input Events - Site Image - 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/06-input-events/06-input-events-site-3.png)

![Input Events - Site Image - 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/06-input-events/06-input-events-site-4.png)

![Input Events - Site Image - 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/06-input-events/06-input-events-site-5.png)

![Input Events - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/06-input-events/06-input-events-console-1.png)

### [G. Form Submissions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/07-form-submission/shopping-list)

![Form Submission - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/07-form-submission/07-form-submission-site-1.png)

![Form Submission - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/07-form-submission/07-form-submission-site-2.png)

![Form Submission - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/07-form-submission/07-form-submission-site-3.png)

![Form Submission - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/07-form-submission/07-form-submission-console-1.png)

![Form Submission - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/07-form-submission/07-form-submission-console-2.png)

![Form Submission - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/07-form-submission/07-form-submission-console-3.png)

### [H. Event Bubbling](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/08-event-bubbling/shopping-list)

![Event Bubbling - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/08-event-bubbling/08-event-bubbling-site-1.png)

![Event Bubbling - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/08-event-bubbling/08-event-bubbling-site-2.png)

![Event Bubbling - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/08-event-bubbling/08-event-bubbling-site-3.png)

![Event Bubbling - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/08-event-bubbling/08-event-bubbling-site-4.png)

### [I. Event Delegation](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/09-event-delegation/shopping-list)

![Event Delegation - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/09-event-delegation/09-event-delegation-site-1.png)

![Event Delegation - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/09-event-delegation/09-event-delegation-site-2.png)

![Event Delegation - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/09-event-delegation/09-event-delegation-site-3.png)

![Event Delegation - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/09-event-delegation/09-event-delegation-site-4.png)

![Event Delegation - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/09-event-delegation/09-event-delegation-site-5.png)

![Event Delegation - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/09-event-delegation/09-event-delegation-site-6.png)

![Event Delegation - Site Image 7](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/09-event-delegation/09-event-delegation-site-7.png)

![Event Delegation - Site Image 8](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/09-event-delegation/09-event-delegation-site-8.png)

![Event Delegation - Site Image 9](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/09-event-delegation/09-event-delegation-site-9.png)

### [J. Window Events](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/10-window-events)

![Window Events - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/10-window-events/10-window-events-site-1.png)

![Window Events - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/10-window-events/10-window-events-site-2.png)

![Window Events - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/10-window-events/10-window-events-site-3.png)

![Window Events - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/10-window-events/10-window-events-site-4.png)

![Window Events - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/10-window-events/10-window-events-site-5.png)

![Window Events - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/10-window-events/10-window-events-site-6.png)

![Window Events - Site Image 7](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/10-window-events/10-window-events-site-7.png)

![Window Events - Site Image 8](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/10-window-events/10-window-events-site-8.png)

![Window Events - Site Image 9](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/10-window-events/10-window-events-site-9.png)

![Window Events - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/10-window-events/10-window-events-console-1.png)

![Window Events - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/07-events/10-window-events/10-window-events-console-2.png)

## [8. Shopping List Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/08-shopping-list-project/shopping-list)

## [9. Asynchronous JavaScript](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript)

### [A. setTimeout & clearTimeout](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/01-settimeout-cleartimeout)

![setTimeout & clearTimeout - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/01-settimeout-cleartimeout/01-settimeout-cleartimeout-site-1.png)

![setTimeout & clearTimeout - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/01-settimeout-cleartimeout/01-settimeout-cleartimeout-site-2.png)

![setTimeout & clearTimeout - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/01-settimeout-cleartimeout/01-settimeout-cleartimeout-site-3.png)

![setTimeout & clearTimeout - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/01-settimeout-cleartimeout/01-settimeout-cleartimeout-console-1.png)

In this exercise, I explored the use of JavaScript's `setTimeout` and `clearTimeout` functions, learning how to manage timed tasks and cancel them if needed. The HTML setup includes a simple button to interact with the JavaScript code.

#### `setTimeout` Function
- The `setTimeout` function is used to execute a function or a block of code after a specified delay. In this example, two `setTimeout` calls were initially commented out: one using an anonymous function and another calling the `changeText` function after a 2000-millisecond delay.
- The `changeText` function, when invoked, changes the text content of the `<h1>` element to "Hello from callback". This function is later set to execute after 3000 milliseconds using `setTimeout`, and the timer ID is stored in the `timerId` constant.

#### `clearTimeout` Function
- The `clearTimeout` function is demonstrated to cancel a scheduled timeout set with `setTimeout`. This is tied to a button click event in the HTML. When the button with id "cancel" is clicked, the `clearTimeout` function is called with `timerId`, effectively cancelling the scheduled `changeText` function if it hasn't executed yet.

### [B. setInterval & clearInterval](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/02-setinterval-clearinterval)

![setInterval & clearInterval - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/02-setinterval-clearinterval/02-setinterval-clearinterval-site-1.png)

![setInterval & clearInterval - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/02-setinterval-clearinterval/02-setinterval-clearinterval-site-2.png)

![setInterval & clearInterval - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/02-setinterval-clearinterval/02-setinterval-clearinterval-site-3.png)

![setInterval & clearInterval - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/02-setinterval-clearinterval/02-setinterval-clearinterval-site-4.png)

![setInterval & clearInterval - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/02-setinterval-clearinterval/02-setinterval-clearinterval-site-5.png)

This exercise focuses on using JavaScript's `setInterval` and `clearInterval` functions to create and control repeating actions on a web page. The HTML structure includes two buttons for starting and stopping a color change effect on the webpage's body.

#### `setInterval` Function
- `setInterval` is used to repeatedly call a function or execute a code snippet, with a fixed time delay between each call. This exercise initially includes a commented-out example that prints the current timestamp every second.
- The `startChange` function, when activated, sets up an interval using `setInterval`. It calls `changeRandomColor` every 1000 milliseconds (1 second). This interval is only set up if it hasn't been already, as checked by the `intervalID` variable.
- `changeRandomColor` generates a random color and applies it to the body's background. It uses `Math.random` to create a random hex color.

#### `clearInterval` Function
- `clearInterval` is demonstrated to stop the ongoing interval set by `setInterval`. The `stopChange` function, when invoked, uses `clearInterval` with `intervalID` to stop the color change.

#### Event Listeners
- Two event listeners are added to the "Start Color Change" and "Stop Color Change" buttons. Clicking these buttons triggers `startChange` and `stopChange` respectively, demonstrating real-time control over the interval.

This exercise is a practical demonstration of how to create and control timed, repeating actions in JavaScript.

### [C. Callbacks](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/03-callbacks)

![Callbacks - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/03-callbacks/03-callbacks-site-1.png)

![Callbacks - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/03-callbacks/03-callbacks-site-2.png)

![Callbacks - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/03-callbacks/03-callbacks-site-3.png)

![Callbacks - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/03-callbacks/03-callbacks-site-4.png)

In this exercise, I explored the concept of callbacks in JavaScript, a fundamental aspect of asynchronous programming. The exercise includes an HTML structure with a button and a div element for displaying posts, accompanied by CSS for styling.

#### Callback Function for Button
- The first part of the JavaScript code demonstrates a simple callback function. When the button is clicked, the `toggle` function is called as a callback. This function toggles the class "danger" on the button, changing its background color as defined in the CSS.
- The `addEventListener` method is used to attach the `toggle` function to the button's click event, showcasing how callbacks are used in event handling.

#### Asynchronous Callbacks with `setTimeout`
- The next part of the script demonstrates asynchronous callbacks using `setTimeout`. The `createPost` function simulates a time-consuming task (like fetching data from a server) using `setTimeout`. After a delay, it adds a new post to the `posts` array and then calls a callback function.
- The callback function here is `getPosts`, which also uses `setTimeout` to mimic a delay. It renders all posts in the `posts` array to the `#posts` div in the HTML. This function is passed as a callback to `createPost`, ensuring that posts are only rendered after the new post is added.

#### Practical Application
- This exercise illustrates how callbacks can manage asynchronous tasks such as API calls, database operations, or any operations that require waiting for a task to complete before proceeding.
- The usage of `setTimeout` to mimic network requests or database operations is a common practice in learning and prototyping JavaScript applications.

### [D. AJAX & XHR](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/04-ajax-xhr)

![AJAX & XHR - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/04-ajax-xhr/04-ajax-xhr-site-1.png)

![AJAX & XHR - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/04-ajax-xhr/04-ajax-xhr-site-2.png)

![AJAX & XHR - Movies JSON Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/04-ajax-xhr/04-ajax-xhr-json.png)

This exercise delves into the basics of AJAX (Asynchronous JavaScript and XML) using the XMLHttpRequest (XHR) object in JavaScript. The focus is on fetching data from a remote source and dynamically updating the web page content without reloading the page.

#### XMLHttpRequest (XHR) Object
- An instance of the `XMLHttpRequest` object is created to handle the data request. This object is a key component in AJAX, allowing for asynchronous communication between client and server.
- The `xhr.open("GET", "https:api.github.com/users/itsjordanmuller/repos")` line initializes the request, specifying the HTTP method ('GET') and the URL of the data source. In this case, it is set to retrieve data from a GitHub API endpoint.

#### Handling Response States
- The `onreadystatechange` event listener is used to handle changes in the state of the request. The XHR object has different states (from 0 to 4), with 4 indicating that the request is completed and the response is ready.
- Inside the event listener, a check is made to ensure that the `readyState` is 4 (request completed) and the `status` is 200 (successful HTTP response). If these conditions are met, the response is processed.

#### Processing and Displaying Data
- The received data is parsed from JSON format using `JSON.parse(this.responseText)`. This step converts the JSON response into a JavaScript object or array.
- The parsed data (an array of repository information from GitHub) is then iteratively processed. For each repository, a new list item (`li`) is created, filled with the repository's name and description, and appended to the unordered list (`ul`) with the ID `results` in the HTML.

#### Styling
- CSS is used to style the web page, applying fonts from Google Fonts and basic styling for elements like the body, headings, buttons, and the list items.

### [E. Joke Generator Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/05-joke-generator-challenge/chuck-joke-generator-start)

![Joke Generator Challenge - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/05-joke-generator-challenge/05-joke-generator-site-1.png)

![Joke Generator Challenge - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/05-joke-generator-challenge/05-joke-generator-site-2.png)

![Joke Generator Challenge - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/05-joke-generator-challenge/05-joke-generator-site-3.png)

This exercise showcases how fetch data from an API and update the web page dynamically in JavaScript. The application is a simple Chuck Norris joke generator.

#### Web Page Structure and Styling
- The HTML structure includes a `div` container with a heading, a `div` for displaying the joke, and a button to trigger fetching a new joke.
- CSS is used for styling, applying a modern, clean look with a color scheme, shadows, and typography using the 'Roboto' font from Google Fonts.

#### Fetching Jokes using AJAX
- The core functionality is built in the `script.js` file. It defines the `getJoke` function, which makes an AJAX request to the Chuck Norris Jokes API.
- An `XMLHttpRequest` object is created and configured with `xhr.open("GET", "https://api.chucknorris.io/jokes/random")`, specifying a GET request to the API's endpoint.

#### Handling the Response
- The `onreadystatechange` event listener checks if the request is completed (`readyState === 4`) and successful (`status === 200`). Upon success, it parses the JSON response and updates the `jokeText` element's inner text with the new joke.
- If the request fails (i.e., not reaching readyState 4 and status 200), it displays an error message in the joke text area.

#### Interactivity
- The `jokeBtn` button is set up with an event listener that calls `getJoke` upon a click, thus enabling the user to fetch a new joke every time the button is clicked.
- The `getJoke` function is also called once when the script loads, ensuring that a joke is displayed as soon as the page loads.

This exercise effectively demonstrates the use of AJAX for real-time data fetching and dynamic content update in web applications, a key technique for creating interactive and responsive web experiences.

### [F. Callback Hell](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/06-callback-hell)

![Callback Hell - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/06-callback-hell/06-callback-hell-console-1.png)

![Callback Hell - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/06-callback-hell/06-callback-hell-console-2.png)

![Callback Hell - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/06-callback-hell/06-callback-hell-console-3.png)

![Callback Hell - Console Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/06-callback-hell/06-callback-hell-console-4.png)

![Callback Hell - Console Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/06-callback-hell/06-callback-hell-console-5.png)

This exercise introduces the concept of "Callback Hell" in JavaScript, a common issue when dealing with multiple nested callbacks, particularly in asynchronous operations like AJAX requests.

#### Callback Hell Demonstration
- The JavaScript code in `script.js` defines a function `getData` that makes an AJAX request to a specified endpoint and executes a callback function when the data is successfully retrieved.
- The AJAX requests are intentionally delayed by a random time (between 1 to 4 seconds) using `setTimeout` to simulate network latency and asynchronous behavior.
- The concept of "Callback Hell" is demonstrated by nesting successive `getData` calls within each other's callbacks. The data from `movies.json`, `actors.json`, and `directors.json` are requested in sequence, with each subsequent request initiated only after the previous one completes.
- This nesting results in deeply nested code structure, which is commonly referred to as "Callback Hell" or "The Pyramid of Doom" due to its triangular shape and the difficulty in reading and maintaining such code.

#### Challenges of Callback Hell
- This pattern makes the code hard to read and understand, especially as the number of nested callbacks increases.
- Error handling becomes more complex, and the code is prone to issues like callback nesting and scope creep.
- Debugging and maintenance of such code can be challenging.

#### Alternative Approaches
- In modern JavaScript development, alternatives like Promises and async/await are often used to avoid callback hell. These features provide cleaner and more readable syntax for handling asynchronous operations.

This exercise effectively demonstrates the problems associated with deep nesting of callbacks, highlighting the need for better patterns and practices in managing asynchronous JavaScript code.

### [G. Promises](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/07-promises)

![Promises - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/07-promises/07-promises-console-1.png)

![Promises - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/07-promises/07-promises-console-2.png)

![Promises - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/07-promises/07-promises-console-3.png)

![Promises - Console Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/07-promises/07-promises-console-4.png)

This exercise provides a hands-on experience with JavaScript Promises, a powerful feature for handling asynchronous operations. Promises offer a more manageable and readable approach to asynchronous code compared to traditional callback patterns.

#### Introduction to Promises
- A `Promise` in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more synchronous fashion.
- The exercise starts with creating a simple `Promise` that resolves after a 1-second delay, simulating an asynchronous task. This is achieved using `setTimeout`.

#### Consuming Promises
- The first promise (`promise`) demonstrates the basic structure but is commented out for the focus on a more complex example.
- The `getUser` promise simulates fetching user data asynchronously. It randomly decides to either resolve (with user data) or reject (with an error message) after a 1-second delay.
- The `then`, `catch`, and `finally` methods are chained to `getUser`. The `then` method is called if the promise is resolved, displaying the user data. The `catch` method handles any errors, and `finally` executes code after the promise is either resolved or rejected, indicating the completion of the promise's lifecycle.

#### Asynchronous Nature of Promises
- The `console.log("Hello from global scope!");` line demonstrates the non-blocking nature of JavaScript. This line runs immediately, not waiting for the promises to resolve or reject, highlighting the asynchronous execution model of JavaScript.

#### Benefits of Using Promises
- Promises provide a cleaner and more robust way of handling asynchronous operations compared to nested callbacks. They help in avoiding callback hell.
- They make error handling more straightforward and readable with the `catch` method.
- Promises support chaining, allowing for a sequence of asynchronous operations to be performed in a more readable and maintainable way.

This exercise effectively introduces the basics of Promises, a key concept in modern JavaScript for managing asynchronous operations, making code more readable, maintainable, and less prone to errors.

### [H. Callback to Promise](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/08-callback-to-promise)

![Callback to Promise - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/08-callback-to-promise/08-callback-to-promise-console-1.png)

![Callback to Promise - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/08-callback-to-promise/08-callback-to-promise-console-2.png)

This exercise demonstrates refactoring asynchronous JavaScript code from using callbacks to Promises, a modern approach that enhances code readability and error handling.

#### Refactoring to Use Promises
- The `createPost` function is refactored to return a `Promise`. The promise resolves if a post is successfully added (simulated with a `setTimeout` and a conditional check) and rejects if there's an error.
- The `getPosts` function remains the same, but its invocation changes. It's now called as a part of the promise chain, being executed after the promise from `createPost` resolves.
- Error handling is improved by using a `catch` method, which calls the `showError` function to display an error message. This structure makes the error handling more centralized and straightforward.

#### Promise Chain
- The creation of a new post (`{ title: "Post Three", body: "This is post" }`) is followed by `.then(getPosts)`. This ensures that `getPosts` is called only after the post is successfully added.
- `.catch(showError)` handles any errors that might occur during the post creation process. This chaining approach is more readable and maintainable compared to nested callbacks.

#### Styling and HTML Structure
- The HTML structure includes a `div` for displaying posts and a heading.
- CSS styling is applied to give a clean and modern look to the posts display, using the 'Poppins' font and basic styling elements like background color and padding.

This exercise effectively shows the transition from a callback-based asynchronous operation to a promise-based approach, highlighting the benefits of Promises in terms of code clarity, error handling, and maintainability in JavaScript applications.

### [I. Promise Chaining](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/09-promise-chaining)

![Promise Chaining - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/09-promise-chaining/09-promise-chaining-console.png)

This exercise provides an excellent demonstration of promise chaining in JavaScript, a technique that allows for sequential execution of asynchronous tasks in a clear and readable manner.

#### Understanding Promise Chaining
- Promise chaining is a method of executing a sequence of asynchronous tasks one after the other. Each `.then()` in the chain waits for the previous promise to be resolved or rejected before executing.

#### The Promise Setup
- The exercise begins with the creation of a new `Promise`. This promise is set up to either resolve with a user object (`{ name: "John", age: 30 }`) or reject with an error message after a delay of 1 second. In this case, the promise is configured to always reject due to `let error = true;`.

#### Chaining `.then()` and `.catch()`
- The first `.then()` block is designed to run if the promise resolves. It logs the user object and returns the user's name. However, due to the promise's configuration, this block will not execute in this scenario.
- The second `.then()` receives the name returned from the first `.then()` and logs it. It then returns the length of the name.
- The third `.then()` is set to receive the name length and log it.
- The `.catch()` block catches any errors that occur in the promise chain. In this case, since the promise is set to reject, this block will execute, logging the error message.
- Interestingly, after the `.catch()` block, another `.then()` is chained. This is a key feature of promise chaining, where a `.then()` can follow a `.catch()`. This block will execute regardless of whether the promise was resolved or rejected. Here, it logs a message along with a value (123 if the `.catch()` block executed, undefined otherwise).

#### Error Handling and Flow Control
- The exercise effectively illustrates how promise chaining can be used for both successful execution flows and error handling.
- The `.catch()` block in the chain ensures that any errors are caught and handled, preventing the entire chain from breaking on failure.
- The final `.then()` demonstrates that the chain can continue even after an error has been caught and handled.

This example of promise chaining is a clear illustration of managing asynchronous operations in JavaScript. It shows how to handle success and error cases cleanly and how promises can be used to create a sequence of asynchronous tasks with straightforward error handling and flow control.

### [J. Promises vs Callback Hell](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/10-promises-vs-callback-hell)

![Promises vs Callback Hell - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/10-promises-vs-callback-hell/10-promises-vs-callback-hell-console-1.png)

![Promises vs Callback Hell - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/10-promises-vs-callback-hell/10-promises-vs-callback-hell-console-2.png)

![Promises vs Callback Hell - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/10-promises-vs-callback-hell/10-promises-vs-callback-hell-console-3.png)

![Promises vs Callback Hell - Console Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/10-promises-vs-callback-hell/10-promises-vs-callback-hell-console-4.png)

![Promises vs Callback Hell - Console Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/10-promises-vs-callback-hell/10-promises-vs-callback-hell-console-5.png)

This exercise demonstrates the advantage of using Promises over traditional callback-based approaches, often referred to as "Callback Hell," particularly in the context of making multiple dependent asynchronous requests.

#### Refactoring from Callbacks to Promises
- In a typical "Callback Hell" scenario, multiple nested callbacks would be used to handle the sequence of AJAX requests, leading to deeply nested and potentially confusing code.
- This example, however, employs Promises to handle the same sequence of operations, resulting in more readable and maintainable code.

#### The `getData` Function
- `getData` is a function that returns a Promise. It uses the `XMLHttpRequest` (XHR) object to perform an AJAX request to the given endpoint.
- The function encapsulates the asynchronous nature of the XHR request within a Promise. The Promise is resolved when the data is successfully retrieved and parsed as JSON, or rejected if an error occurs (e.g., if the status code is not 200).

#### Promise Chaining
- The script fetches data from three different JSON files (`movies.json`, `actors.json`, `directors.json`) in sequence. 
- Each `.then()` handles the resolution of the previous Promise, logs the retrieved data, and initiates the next data request by returning another Promise from `getData`.
- This linear chain of `.then()` calls provides a clear, sequential flow of asynchronous operations, avoiding the pitfalls of nested callbacks.

#### Error Handling
- The `.catch()` at the end of the chain catches any errors that might occur during any of the asynchronous operations. This centralized error handling is a significant advantage over nested callbacks, where each callback would need its error handling logic.

#### Advantages of This Approach
- **Readability and Maintenance**: The code is much more readable and easier to follow than nested callbacks. Each step in the sequence is clearly laid out, and the logic is not buried in multiple layers of nested functions.
- **Error Handling**: Errors are easier to manage with Promises. A single `.catch()` can handle any error that occurs at any point in the promise chain.
- **Scalability**: Adding more asynchronous steps to the sequence is as simple as adding another `.then()`, without increasing the complexity of the code.

In summary, this exercise effectively illustrates the benefits of using Promises for handling sequences of asynchronous operations, offering a cleaner, more manageable alternative to callback-based approaches.

### [K. Promise All](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/11-promise-all)

![Promise All - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/11-promise-all/11-promise-all-console-1.png)

![Promise All - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/11-promise-all/11-promise-all-console-2.png)

This exercise demonstrates the use of `Promise.all()` in JavaScript, a method particularly useful for handling multiple independent promises simultaneously. The script makes several asynchronous data requests and waits for all of them to be resolved or rejected.

#### The `getData` Function
- The `getData` function remains the same as in previous examples. It creates a promise that wraps an XMLHttpRequest to fetch data from a given endpoint and resolves or rejects based on the success of the request.

#### Multiple Promises
- Separate promises are created for fetching data from `movies.json`, `actors.json`, and `directors.json`. Additionally, a `dummyPromise` is created, which immediately resolves with the string "Hello world!".
- These promises are independent of each other, meaning their outcomes are not sequentially dependent.

#### Using `Promise.all()`
- `Promise.all()` takes an array of promises and returns a new promise that resolves when all of the input promises have resolved, or rejects if any of the promises are rejected.
- In this script, `Promise.all()` is used to handle the array of promises: `[moviesPromise, actorsPromise, directorsPromise, dummyPromise]`.
- When `Promise.all()` resolves, it returns an array of results corresponding to the input promise array. This is handled in the `.then()` method, where `data` contains the resolved values of all promises in the same order as they were passed to `Promise.all()`.
- If any of the promises in the array are rejected, `Promise.all()` will immediately reject, and the error will be caught and logged in the `.catch()` method.

#### Benefits of `Promise.all()`
- **Efficiency**: It allows for concurrent execution of multiple promises, which can be more efficient than waiting for each promise to resolve sequentially.
- **Simplicity**: It simplifies the handling of multiple promises, providing a single point to handle success or failure of all promises.
- **Predictability**: The order of results in the resolved array corresponds to the order of the promises passed in, making it predictable and easy to associate results with their respective promises.

This exercise effectively demonstrates how `Promise.all()` can be used to manage multiple asynchronous operations, making it a valuable tool for scenarios where multiple independent asynchronous tasks need to be coordinated.

## [10. Fetch & Async Await](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await)

### [A. Fetch Basics](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/01-fetch-basics)

![Fetch Basics - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/01-fetch-basics/01-fetch-basics-console.png)

In this section, I explored the basics of using the Fetch API in JavaScript, a powerful tool for making network requests and handling responses. This exercise involved fetching data from various sources, including local files and external APIs, and integrating it with a simple HTML structure.

#### HTML Setup
- The HTML file contains a basic structure with a heading tag (`<h1>`) for displaying fetched data and a reference to the JavaScript file (`script.js`).

#### JSON Data
- A JSON file named `movies.json` lists movie titles and their release years. This file serves as a local data source for practicing fetch requests.

#### JavaScript Fetch Operations
- The `script.js` file includes examples of fetching data using different methods.
  - **Fetching Local JSON File**: The script demonstrates how to fetch a local JSON file (`movies.json`) and parse it as JSON. This is done using `fetch("./movies.json").then(response => response.json()).then(data => console.log(data))`.
  - **Fetching Local Text File**: A local text file (`test.txt`) is fetched to demonstrate retrieving and logging text content.
  - **Fetching External API Data**: The script also fetches data from an external API (`https://api.github.com/users/itsjordanmuller`) and updates the `h1` element with fetched data.

#### Key Concepts
- **Fetch Syntax**: The exercise emphasizes the syntax and structure of fetch requests, chaining `.then()` for handling asynchronous operations.
- **Response Methods**: It showcases the use of `.json()` and `.text()` methods for handling different types of responses.
- **DOM Manipulation**: The example with the GitHub API demonstrates basic DOM manipulation by updating HTML content with fetched data.

This exercise provides a fundamental understanding of how to make HTTP requests using the Fetch API in JavaScript, an essential skill for web development.

### [B. Random User Generator Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/02-random-user-project/random-user-generator)

![Random User Generator Project - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/02-random-user-project/02-random-user-site-1.png)

![Random User Generator Project - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/02-random-user-project/02-random-user-site-2.png)

![Random User Generator Project - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/02-random-user-project/02-random-user-site-3.png)

![Random User Generator Project - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/02-random-user-project/02-random-user-site-4.png)

This JavaScript project is a practical demonstration of using the Fetch API to dynamically retrieve and display user data from an external source. It incorporates modern web design with Tailwind CSS and interactive elements to create a user-friendly interface for generating random user profiles.

#### HTML Structure
- The `index.html` file establishes the webpage layout, including a title, a button to trigger user data generation, and a display area for the user's information.
- Tailwind CSS is used for styling, ensuring a responsive and modern design.

#### Fetching User Data
- The `script.js` file contains the main functionality of the project.
- A fetch request is made to the `randomuser.me` API, which returns random user data in JSON format.
- The response includes various user details such as name, email, phone, location, date of birth, gender, and profile picture.

#### Dynamic Content Update
- Upon receiving the data, the script dynamically updates the content of the webpage to display the fetched user information, including their name, email, phone, location, and age.
- The user's profile picture is also updated accordingly.
- Additionally, the background color of the webpage changes based on the gender of the fetched user: steel blue for male, rebeccapurple for female, and default gray for other genders.

#### Interactive Elements
- A button labeled "Generate User" triggers the fetch request and subsequent display update.
- A custom CSS spinner animation is included to enhance the interactive experience, providing visual feedback during data loading.

#### Spinner CSS
- `spinner.css` provides styling for the spinner animation, creating a visually appealing loading indicator.
- The animation is achieved using keyframes and is triggered when the user data is being fetched.

Overall, this project serves as an excellent example of combining HTML, CSS, and JavaScript to create a dynamic and interactive web application. It demonstrates key concepts such as API fetching, DOM manipulation, event handling, and modern web styling techniques.

### [C. Fetch Options](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/03-fetch-options)

![Fetch Options - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/03-fetch-options/03-fetch-options-console.png)

This exercise delves into the utilization of the Fetch API for making HTTP POST requests in JavaScript. It focuses on how to send data to a server and handle the response, demonstrating the use of various options in the fetch function.

#### HTML Structure
- The `index.html` file is simple, containing just a title and a script tag that links to the JavaScript file (`script.js`). This minimal setup is sufficient for running the JavaScript code that handles the fetch request.

#### JavaScript Functionality
- In `script.js`, the primary focus is on the `createPost` function. This function is designed to send a POST request to the specified URL (`https://jsonplaceholder.typicode.com/posts`), which is a placeholder service for testing and prototyping web applications.
- The function accepts an object with `title` and `body` properties as its argument. This object represents the data to be sent to the server.

#### Making a POST Request
- The fetch function is used to send a POST request. The key elements in this operation are:
  - **Method**: The method option is set to `"POST"`, indicating the type of HTTP request being made.
  - **Body**: The body of the request is a stringified JSON object containing the `title` and `body` of the post. This is done using `JSON.stringify`.
  - **Headers**: The headers option is used to set HTTP headers. In this example, `Content-Type` is set to `"application/json"` to inform the server that the request body is a JSON string. Additionally, custom headers like `hello: "World"` and `token: "abc123"` are included for demonstration purposes.

#### Handling the Response
- The response from the fetch request is processed with two `.then()` calls. The first one converts the response to JSON format (`res.json()`), and the second one logs the data to the console.
- This approach demonstrates how to handle and parse the JSON response from the server.

#### Practical Application
- By creating and executing the `createPost` function with a sample post object, this exercise showcases a practical implementation of making POST requests in a web application.
- It provides a foundational understanding of sending data to a server and managing responses, which is a critical aspect of web development, especially in creating interactive and data-driven applications.

This exercise is valuable for learners to grasp the concepts of HTTP requests, specifically POST requests, and how they can be effectively utilized in JavaScript using the Fetch API.

### [D. Typicode Todos Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/04-typicode-todos-mini-project/typicode-todos)

![Typicode Todos Project - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-site-1.png)

![Typicode Todos Project - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-site-2.png)

![Typicode Todos Project - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-site-3.png)

![Typicode Todos Project - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-site-4.png)

![Typicode Todos Project - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-site-5.png)

![Typicode Todos Project - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-console.png)

This project demonstrates the creation of a simple Todo application using HTML, CSS, and JavaScript, integrating with the JSONPlaceholder API for handling Todos. It provides a practical example of CRUD (Create, Read, Update, Delete) operations in web development.

#### HTML Structure
- The `index.html` file sets up the basic structure of the Todo application, including a header, a form for adding new todos, and a div (`#todo-list`) where the todo items will be displayed.
- The application is styled using an external stylesheet (`style.css`) and Google Fonts.

#### JavaScript Functionality
- `script.js` contains the logic for the application. It interacts with the JSONPlaceholder API to perform various actions on the todos.

##### Key Functions:
1. **getTodos**: Fetches the initial list of todos from the API and displays them on the page. Each todo is added to the DOM with `addTodoToDOM`.
2. **addTodoToDOM**: Takes a todo object and appends it to the todo list in the DOM. It also applies the 'done' class to completed todos.
3. **createTodo**: Handles the creation of new todos. It sends a POST request to the API with the new todo data and adds the returned todo to the DOM.
4. **toggleCompleted**: Toggles the completion status of a todo item when clicked. It updates the todo's status on the API using `updateTodo`.
5. **updateTodo**: Sends a PUT request to the API to update the completion status of a todo.
6. **deleteTodo**: Handles deleting a todo. It sends a DELETE request to the API and removes the todo from the DOM.

#### Event Listeners
- The application sets up event listeners for loading todos on DOMContentLoaded, submitting the form to create new todos, clicking on a todo to mark it as complete, and double-clicking to delete a todo.

#### CSS Styling
- `style.css` provides the visual styling for the application. It uses the Poppins font from Google Fonts and applies basic styling for layout, input fields, buttons, and todo items.
- The `.done` class changes the background of completed todos to differentiate them visually.

This mini project is a great example of how to build a functional web application that interacts with an external API for data management. It covers essential web development concepts, including asynchronous JavaScript for API requests, DOM manipulation, and event handling, along with fundamental CSS styling.

### [E. Fetch Error Handling](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/05-fetch-error-handling)

![Fetch Error Handling - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/05-fetch-error-handling/05-fetch-error-handling-console.png)

This exercise explores error handling in JavaScript using the Fetch API, which is crucial for robust web applications. It demonstrates how to handle different types of errors that may occur during network requests, including HTTP errors (like 404 or 500 status codes) and network failures.

#### HTML Structure
- The `index.html` file includes a basic HTML setup with a title and a script tag linking to the `script.js` file. This structure is sufficient for running and testing the JavaScript code.

#### JavaScript Error Handling Mechanisms
- In `script.js`, various scenarios are simulated to demonstrate how to handle errors in fetch requests.
  
  ##### Handling HTTP Status Errors:
  - **404 (Not Found) and 500 (Server Error)**: The script makes a fetch request to `https://httpstat.us/500`, which simulates a server error. The response status is checked, and custom error messages are thrown based on the status code. For example, if the status is 404, it throws a "Not Found Error", and for a 500 status, it throws a "Server Error".
  - **General Error Handling**: An additional condition checks for any non-200 status codes and throws a "Request Failed" error. This is a more general approach to handling unsuccessful responses.
  - The script also includes commented-out examples for a successful request (`https://httpstat.us/200`) and for using `response.ok` to check if the response was successful.

  ##### Handling Network Errors:
  - **Network Failure**: A simulated network error is commented out in the script, where an invalid URL is used (`https:/hello123.net`). This type of error typically results in a `TypeError` with a message like "Failed to Fetch".
  - The `.catch()` block is designed to handle these errors by logging them to the console.

#### Error Logging
- In both scenarios (HTTP status errors and network errors), the `.catch()` block is used to catch and log errors. This is an essential part of error handling, as it allows developers to see what went wrong and possibly inform users about the issue.

#### Key Concepts
- **Error Propagation**: The use of `throw new Error()` in the `.then()` block for HTTP errors allows the error to be propagated to the `.catch()` block.
- **Network vs HTTP Errors**: The script differentiates between network failures and HTTP status errors, demonstrating how to handle each type separately.
- **Response Properties**: The script uses `response.status`, `response.ok`, and `response.statusText` to assess the nature of the response and decide on the error handling strategy.

This exercise is a practical demonstration of implementing error handling in web applications using the Fetch API. It emphasizes the importance of robust error handling mechanisms for creating reliable and user-friendly web applications.

![Random User Generator Project - Fetch Error Handling - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/05-fetch-error-handling/05-random-user-error-handling-console-1.png)

![Random User Generator Project - Fetch Error Handling - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/05-fetch-error-handling/05-random-user-error-handling-console-2.png)

This project enhances the Random User Generator application with error handling capabilities, making it more robust and user-friendly. It uses the Fetch API to retrieve user data from an external source and displays it on the webpage, implementing error handling to manage failed requests gracefully.

#### HTML Structure
- The `index.html` file sets up the webpage with a simple layout, including a button to generate random user data and a section to display the user information.
- The page uses Tailwind CSS for styling, ensuring a modern and responsive design.

#### JavaScript Functionality
- `script.js` contains the core logic of the application. It fetches user data from the `randomuser.me` API and handles both successful and failed requests.

##### Key Functions:
1. **fetchUser**: Initiates the fetch request to the API. It shows a loading spinner while the request is being processed.
2. **Error Handling**: If the fetch request fails (e.g., due to an incorrect URL or server issues), the function catches the error and displays a user-friendly message in the user display area.
3. **displayUser**: On a successful fetch, this function updates the webpage with the user's information, including name, email, phone, location, and age.
4. **Spinner Functions**: `showSpinner` and `hideSpinner` control the visibility of the loading spinner, providing visual feedback during data loading.

#### CSS Styling
- `spinner.css` provides custom styling for the spinner animation, creating an engaging visual effect during data loading.
- The spinner is designed to be a circular loader with keyframe animations for a smooth rotating effect.

#### Event Listeners
- An event listener is attached to the "Generate User" button to trigger the `fetchUser` function when clicked.
- The `fetchUser` function is also called on page load to display a user immediately.

#### Error Display
- In case of an error, the application displays a red-colored error message, ensuring the user is informed about any issues during data retrieval.

This project is an excellent example of implementing error handling in web applications. It demonstrates the importance of providing feedback to users during asynchronous operations and gracefully handling errors to improve the overall user experience. The combination of Fetch API, modern JavaScript practices, and CSS animations makes it a valuable learning tool for web development.

### [F. Async Await](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/06-async-await)

![Async Await - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/06-async-await/06-async-await-console-1.png)

![Async Await - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/06-async-await/06-async-await-console-2.png)

This project focuses on demonstrating the use of `async` and `await` in JavaScript, a syntactical feature that simplifies working with asynchronous operations like API requests or timer functions. The goal is to show how these keywords make code that deals with promises more readable and easier to write.

#### HTML Structure
- The `index.html` file sets up a basic webpage with a title and a script tag linking to `script.js`. This structure is all that's needed to run and showcase the JavaScript functionality.

#### JavaScript Exploration
- `script.js` contains multiple functions illustrating different ways to handle asynchronous code, comparing traditional promise-based approaches with `async` and `await`.

##### Key Elements:
1. **Promise Example**: The script begins with a simple promise that resolves with user data after a 1-second delay. This demonstrates the basic setup of a promise in JavaScript.

2. **Using Async and Await**:
   - **getPromise Function**: This function uses `async` and `await` to wait for the promise to resolve before logging the response. It's a basic demonstration of turning a promise-based operation into synchronous-looking code.
   - **getUsers Function**: A more complex example where an asynchronous fetch request is made to retrieve user data from an external API. `async` and `await` are used to wait for the response and then wait for the response to be converted to JSON.
   - **getPosts Function**: This is an arrow function version of using `async` and `await`, showcasing how these keywords can be integrated into different function syntaxes.

3. **Comparing with Traditional Promise Handling**:
   - The script includes commented-out versions of the `getUsers` function, showing the traditional `.then()` method for handling promises. This comparison highlights the syntactical simplicity and readability that `async` and `await` bring to asynchronous JavaScript code.

#### Practical Application
- The `async` and `await` keywords are used in real-world scenarios where handling asynchronous operations in a more synchronous, linear manner can greatly simplify code logic and improve readability.
- This approach is particularly useful in scenarios involving multiple asynchronous operations that need to be performed in sequence.

This exercise provides a clear and practical understanding of how `async` and `await` can be used to handle promises in JavaScript. It shows the evolution of asynchronous JavaScript, from callback functions and promises to the more modern and readable `async` and `await` syntax.

### [G. Try & Catch](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/07-try-catch)

![Try & Catch - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/07-try-catch/07-try-catch-console.png)

This project is focused on demonstrating the usage and importance of `try...catch` blocks in JavaScript, especially in conjunction with `async` and `await`. These structures are crucial for robust error handling in both synchronous and asynchronous code.

#### HTML Structure
- The `index.html` file provides a simple setup with a title and a script tag that includes the `script.js` file. This basic structure is adequate for running the JavaScript examples.

#### JavaScript Error Handling
- `script.js` explores different scenarios where `try...catch` blocks are used to gracefully handle errors that may occur during code execution.

##### Key Concepts:
1. **Basic Try...Catch Usage**:
   - Initially, there's a commented-out example demonstrating a `try...catch` block to catch a ReferenceError (attempting to log an undefined variable `x`).

2. **Error Handling in Functions**:
   - The `double` function is designed to demonstrate error handling within a function. It throws an error if the input is not a number.
   - The `try` block attempts to call `double` with a non-numeric argument, which triggers an error.
   - The `catch` block catches this error and logs a custom error message.

3. **Importance of Try...Catch**:
   - The examples illustrate the importance of `try...catch` in preventing the entire script from crashing when an error occurs. Instead, the error is caught, and the script can continue running.
   - This approach is particularly useful when dealing with operations that might fail due to reasons beyond the control of the programmer (e.g., invalid user input, failed network requests).

#### Practical Application
- `try...catch` is essential in JavaScript for handling exceptions gracefully. It allows developers to control the flow of error handling and provide more informative feedback to the user or logs.
- When used with `async` and `await`, `try...catch` becomes an elegant solution to handle promise rejections and other asynchronous errors without breaking the application flow.

This exercise provides a clear understanding of how to implement `try...catch` for effective error handling in JavaScript. It highlights the significance of managing errors properly to create reliable and user-friendly applications.

### [H. Async Await - Error Handling](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/08-async-await-error-handling)

![Async Await - Error Handling - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/08-async-await-error-handling/08-async-await-error-handling-console.png)

This exercise demonstrates the integration of error handling with `async` and `await` in JavaScript, which is essential for managing errors in asynchronous operations such as network requests. It showcases how `try...catch` blocks and promise rejections can be used to handle exceptions in a clean and effective manner.

#### HTML Structure
- The `index.html` file sets up a basic webpage with a heading and a div (`#output`) for displaying potential output. The structure is completed with a script tag linking to `script.js`.

#### JavaScript Error Handling Techniques
- `script.js` includes two asynchronous functions, `getUsers` and `getPosts`, both of which are designed to fetch data from external sources using the Fetch API.

##### Key Aspects:
1. **Using Try...Catch in Async Functions**:
   - The `getUsers` function demonstrates the use of a `try...catch` block within an `async` function. It attempts to fetch data from a URL that returns a 404 error (`https://httpstat.us/404`).
   - If the response is not successful (`!response.ok`), an error is thrown. This error is then caught and logged within the `catch` block.

2. **Handling Promise Rejections**:
   - The `getPosts` function fetches data from a URL simulating a server error (`https://httpstat.us/500`).
   - Instead of using a `try...catch` block within the function, this function relies on the `.catch()` method chained to the function call. This method catches and logs any errors that occur during the fetch operation.

3. **Error Propagation**:
   - In both functions, errors are either thrown (when the response is not ok) or caught (when the fetch operation fails). This demonstrates how `async` functions can propagate errors either internally (using `try...catch`) or externally (using `.catch()`).

#### Practical Application
- These examples provide a practical insight into handling asynchronous errors in JavaScript. Whether it's a network error, a server error, or any other kind of exception, proper error handling ensures that the application can respond gracefully.
- The use of `try...catch` within `async` functions and the `.catch()` method for promise rejections are both crucial patterns for robust JavaScript applications, especially those that rely on external data sources or APIs.

This exercise effectively illustrates how to manage errors in asynchronous JavaScript code, a vital skill for developing resilient and user-friendly web applications. It highlights the importance of anticipating and handling errors in a controlled manner to prevent crashes and provide better user experiences.

### [I. Async Await - Multiple Promises](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/09-multiple-promises-async-await)

![Async Await - Multiple Promises - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-multiple-promises-async-await-console-1.png)

![Async Await - Multiple Promises - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-multiple-promises-async-await-console-2.png)

![Async Await - Multiple Promises - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-multiple-promises-async-await-console-3.png)

![Async Await - Multiple Promises - Actor JSON Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-actors-json.png)

![Async Await - Multiple Promises - Directors JSON Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-directors-json.png)

![Async Await - Multiple Promises - Movies JSON Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-movies-json.png)

This project demonstrates the use of `async/await` syntax in JavaScript to handle multiple promises efficiently. It contrasts different approaches for fetching and processing data from multiple sources, showcasing the advantages of using `async/await` over traditional promise handling methods.

#### HTML Structure
- The `index.html` file provides a basic setup with a title and a script tag that links to `script.js`. This structure is all that's needed for running the JavaScript code and displaying the results.

#### JavaScript Functionality
- `script.js` contains various functions to fetch data from three JSON files: `movies.json`, `actors.json`, and `directors.json`. Each function explores a different method of handling these asynchronous operations.

##### Key Techniques:
1. **Sequential Fetching with Async/Await**:
   - Initially, `getAllData` function uses `await` to fetch data from each JSON file sequentially. This method ensures that each request completes before the next begins, which can be useful when the order of operations matters.

2. **Simultaneous Fetching with Promise.all()**:
   - `getAllDataPromiseAll` and `getAllDataPromiseAll2` functions utilize `Promise.all()` to fetch all data simultaneously. This is a more efficient approach when the order of fetching does not matter, as it reduces the total time needed to fetch all data.
   - The first version of `Promise.all()` fetches the data and then processes the responses. The second version (`getAllDataPromiseAll2`) combines fetching and processing using `.then()` chained directly to each fetch call.

3. **Fetch API vs Custom XMLHttpRequest**:
   - The project initially uses a custom function (`getData`) that wraps an `XMLHttpRequest` in a promise. This approach is more verbose and less modern compared to the Fetch API.
   - Later functions (`getAllDataWithFetch`, `getAllDataPromiseAll`, and `getAllDataPromiseAll2`) switch to the Fetch API, which is more concise and easier to use with `async/await`.

#### Practical Application
- This exercise is practical for understanding how to handle multiple asynchronous operations in JavaScript. It demonstrates the efficiency gains from running asynchronous tasks in parallel using `Promise.all()`.
- It also highlights the versatility of `async/await` in making asynchronous code more readable and easier to manage, particularly in comparison to older techniques like XMLHttpRequests and nested `.then()` calls.

#### JSON Data Files
- The project uses three JSON files (`actors.json`, `directors.json`, `movies.json`) that contain mock data for actors, directors, and movies. These files serve as data sources for the fetch operations in the script.

This exercise provides a comprehensive look at managing multiple asynchronous requests in JavaScript, showing the power of `async/await` and `Promise.all()` for efficient and readable code. It's an excellent demonstration of modern JavaScript practices for handling complex data-fetching scenarios.

## [11. Flixx App](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/11-flixx-app-project/flixx-app)

![Flixx App - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-1.png)

![Flixx App - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-2.png)

![Flixx App - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-3.png)

![Flixx App - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-4.png)

![Flixx App - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-5.png)

![Flixx App - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-6.png)

![Flixx App - Site Image 7](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-7.png)

![Flixx App - Site Image 8](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-8.png)

The Flixx App project is a comprehensive web application designed to display information about movies and TV shows. It leverages modern web technologies and external APIs to provide a rich user experience.

#### Structure and Functionality

1. **HTML Structure**:
   - The project consists of multiple HTML pages including `index.html`, `movie-details.html`, `search.html`, `shows.html`, and `tv-details.html`. Each page serves a different purpose, such as listing movies, showing movie details, and enabling searches.
   - The pages share a common header and footer, creating a consistent user interface across the application.

2. **CSS Styling**:
   - The `style.css` file contains styles for the entire application, defining a color scheme, layout, typography, and responsive design elements.
   - `spinner.css` provides styling for a loading spinner, which enhances the user experience during data loading phases.

3. **JavaScript Functionality (`script.js`)**:
   - The JavaScript file contains functions to fetch and display data from The Movie Database (TMDB) API.
   - It includes different functions for displaying popular movies, TV shows, specific movie and TV show details, and search results.
   - The application uses `async` and `await` for handling asynchronous API requests and implements a spinner to indicate loading states.
   - The script also includes functionality for pagination in search results and to highlight active navigation links.

4. **API Integration**:
   - The application interacts with TMDB API, fetching data like popular movies, TV show details, and search results.
   - API keys and other configurations are managed in `secrets.js` (not provided), ensuring sensitive information is kept secure.

5. **Interactivity and User Experience**:
   - Features like a slider for now-playing movies, search functionality, pagination, and detailed pages for individual movies and TV shows enhance user interactivity.
   - The application employs modern UI/UX practices such as responsive design, ensuring usability across different devices.

6. **Additional Libraries**:
   - The project uses external libraries like Swiper.js for interactive sliders and FontAwesome for icons, enriching the visual appeal and functionality.

#### Usage and Navigation

- Users can navigate through the application to explore various movies and TV shows, check detailed information, and search for specific titles.
- The application provides an immersive experience by integrating various aspects like ratings, release dates, and genres.

#### Learning Summary

The Flixx App project is a well-rounded web application that effectively combines API data fetching, modern JavaScript practices, and responsive web design. It serves as a robust platform for movie and TV show enthusiasts to explore and discover content.

## [12. Web Browser APIs](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis)

### [A. Geolocation API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/01-geolocation)

![Geolocation API - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/01-geolocation/01-geolocation-site.png)

In this exercise, I explored the capabilities of the Geolocation API in JavaScript, learning how to access and use geolocation data within a web application. The focus was on obtaining the user's current position and monitoring their movement towards a predefined target location.

#### Current Position Retrieval
- **Functionality**: The script includes a function `curSuccess` to handle successful geolocation retrieval. This function extracts the latitude, longitude, and accuracy from the `position` object.
- **Error Handling**: The `curError` function provides error information if geolocation access fails.
- **Options**: The script sets options like `enableHighAccuracy`, `timeout`, and `maximumAge` to control the geolocation retrieval process.

#### Continuous Position Monitoring
- **Target Definition**: A target location is predefined with specific latitude and longitude coordinates.
- **Watching Position**: The `watchSuccess` function compares the user's current coordinates with the target. It logs a message when the target is reached and then stops tracking the position.
- **Error Handling and Options**: Similar to current position retrieval, it handles errors and sets options for tracking.

#### Practical Application
- This exercise demonstrated practical use cases of the Geolocation API, such as real-time location tracking and reaching a destination. The use of options to enhance accuracy and manage data retrieval efficiently was also a key learning point.

The exercise combined HTML for basic structure and JavaScript for implementing the Geolocation API, offering a comprehensive understanding of how to integrate such functionalities in web applications.

### [B. Maps API - Positions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/02-map-position)

![Maps API - Positions - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/02-map-position/02-map-position-site.png)

This exercise focused on integrating the Geolocation API with Leaflet.js, a JavaScript library for interactive maps, to display both a specific landmark and the user's current location on a web map.

#### Leaflet.js Integration
- **Map Initialization**: The script initializes a Leaflet map within a designated `<div>` element and sets its view to a specific location and zoom level.
- **Tile Layer**: It uses OpenStreetMap's tile layer to render the map, providing essential geographical details and contributing to the map's visual appeal.

#### Marking Specific Locations
- **Landmark Marker**: A marker is placed at the Coit Tower in San Francisco, with a popup to identify the landmark.
- **Styling and Layout**: The map is styled with CSS to ensure it fits well within the webpage's layout.

#### Displaying User's Location
- **Current Location Marker**: Another marker is initialized with default coordinates and later updated to represent the user's current location.
- **Dynamic Update**: The script uses `navigator.geolocation.getCurrentPosition` to obtain the user's current latitude and longitude, updating the marker's position accordingly.

#### Practical Application
- This exercise showcased how to use Leaflet.js for map-based visualizations and how to dynamically update map elements based on user location data. It provided a hands-on experience in combining geolocation data with mapping libraries to create interactive and informative web maps.

Overall, the exercise was an excellent demonstration of the synergy between various web technologies, emphasizing the practical utility of combining geolocation data with interactive mapping tools in real-world applications.

### [C. Canvas API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/03-canvas)

![Canvas API - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/03-canvas/03-canvas-site.png)

In this exercise, I explored the fundamental capabilities of the Canvas API in HTML5, learning to draw various shapes, lines, text, and images on a canvas element.

#### Setting Up the Canvas
- **HTML Structure**: The exercise involved using a `<canvas>` element with a specified width and height, bordered for visibility.
- **Context Retrieval**: The JavaScript script retrieves the 2D rendering context of the canvas using `getContext("2d")`, essential for drawing on the canvas.

#### Drawing Shapes and Lines
- **Rectangle**: A green rectangle was drawn using `fillRect`, showcasing how to specify position and size.
- **Circle**: To draw a red circle, `arc` was used along with `fill`, demonstrating the use of path methods and geometric calculations.
- **Lines**: Orange lines were created using `moveTo`, `lineTo`, and `stroke`, illustrating how to create and render paths.

#### Adding Text
- **Text Rendering**: The script includes methods to draw text in two ways: `fillText` for solid text and `strokeText` for outlined text, both in blue. This part of the exercise emphasized font settings and text positioning.

#### Incorporating Images
- **Image Rendering**: The exercise also involved rendering an external image onto the canvas. The image element was first hidden in the HTML using CSS, then drawn onto the canvas using `drawImage` after it had loaded.

#### Practical Application
- This exercise provided a comprehensive introduction to the Canvas API's capabilities. It covered basic drawing techniques, such as shape and text rendering, and more complex tasks like image processing.
- The exercise effectively demonstrated how the Canvas API can be used for dynamic graphic creation in web applications, offering a versatile tool for both simple and complex graphic requirements.

Overall, the exercise served as a practical guide to understanding and applying various aspects of the Canvas API, highlighting its potential in creating interactive and visually appealing web content.

### [D. Window requestAnimationFrame() Method](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/04-requestAnimationFrame)

![Window requestAnimationFrame() Method - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/04-requestAnimationFrame/04-requestAnimationFrame-site-1.png)

![Window requestAnimationFrame() Method - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/04-requestAnimationFrame/04-requestAnimationFrame-site-2.png)

![Window requestAnimationFrame() Method - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/04-requestAnimationFrame/04-requestAnimationFrame-site-3.png)

This exercise provided a practical introduction to the `requestAnimationFrame` method in JavaScript, demonstrating how it can be used to create smooth animations on a web page.

#### Animation Setup
- **HTML Structure**: The exercise includes a simple HTML structure with an `<img>` element for the animation.
- **JavaScript Preparation**: The script selects the image using `document.querySelector` and initializes variables for tracking the animation start time and completion status.

#### Implementing requestAnimationFrame
- **Animation Function**: The `step` function is defined to handle each frame of the animation. It calculates the elapsed time since the animation started.
- **Movement and Rotation**: The script animates the image by translating and rotating it based on the elapsed time. This demonstrates how to manipulate CSS properties dynamically for animation effects.
- **Looping Animation**: `requestAnimationFrame(step)` is called within `step`, creating a loop. This method provides better performance and smoother animations compared to traditional `setInterval` or `setTimeout`.

#### Controlling the Animation Duration
- **Ending the Animation**: The script includes a condition to stop the animation after a specific duration (5000 milliseconds in this case), demonstrating how to control the length of an animation.

#### Practical Application
- This exercise was instrumental in understanding how `requestAnimationFrame` optimizes animations for web browsers, ensuring they run smoothly and efficiently.
- The example provided insights into how JavaScript can interact with CSS to create dynamic visual effects, a fundamental skill in modern web development.

Overall, the exercise served as a valuable learning tool in mastering the basics of creating animations using `requestAnimationFrame`, showcasing its advantages over traditional JavaScript timing functions.

#### [D1. Animated Clock Part 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/05-animated-clock-1/animated-clock)

![Animated Clock Part 1 - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/05-animated-clock-1/05-animated-clock-1-site-1.png)

![Animated Clock Part 1 - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/05-animated-clock-1/05-animated-clock-1-site-2.png)

This project involved creating an animated clock using the Canvas API in HTML5 and JavaScript. The exercise focused on rendering a fully functional clock with dynamically updating hands to display the current time.

#### Canvas Setup and Clock Face
- **Canvas Initialization**: A `<canvas>` element is used with a specified size. The JavaScript script retrieves the 2D rendering context for drawing.
- **Clock Face Design**: The script starts by clearing the canvas and setting up the default styles for drawing. It then draws a circular clock face with hour and minute marks. The hour marks are thicker and longer, while the minute marks are shorter and thinner.

#### Drawing Clock Hands
- **Retrieving Current Time**: The script gets the current time using the `Date` object.
- **Hour Hand**: It draws the hour hand, calculating its rotation based on the current hour, minute, and second. The hand is styled distinctively.
- **Minute Hand**: Similarly, the minute hand is drawn and rotated according to the current time.
- **Second Hand**: The second hand is thinner and a different color, updating every second for a smooth movement.

#### Animation Loop
- **Continuous Update**: The `requestAnimationFrame(clock)` call creates a loop, continuously updating the clock hands every frame to reflect the current time accurately.

#### Practical Application
- This exercise provided a detailed understanding of how to use the Canvas API for creating dynamic, real-time visualizations.
- The project emphasized precision in calculations for rotations and positions, essential for accurate representation of time.
- The animated clock project is a practical example of combining JavaScript's time functions with the Canvas API for creating visually appealing and interactive web applications.

Overall, this exercise served as an excellent demonstration of the potential of the Canvas API in creating complex, dynamic graphics, such as an animated clock, showcasing a blend of creativity and technical skill in web development.

#### [D2. Animated Clock Part 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/06-animated-clock-2/animated-clock)

![Animated Clock Part 2 - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/06-animated-clock-2/06-animated-clock-2-site-1.png)

![Animated Clock Part 2 - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/06-animated-clock-2/06-animated-clock-2-site-2.png)

![Animated Clock Part 2 - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/06-animated-clock-2/06-animated-clock-2-site-3.png)

![Animated Clock Part 2 - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/06-animated-clock-2/06-animated-clock-2-site-4.png)

This version of the animated clock project introduced interactive features, allowing the user to customize various aspects of the clock's appearance. The project combined JavaScript's Canvas API and HTML form elements to create a dynamic and user-configurable clock.

#### Enhanced User Interface
- **HTML Form for Customization**: The project includes a form with several color input fields, enabling users to choose colors for different parts of the clock, such as the face, border, and hands.
- **Save Functionality**: A button is provided to save the current state of the clock as an image, demonstrating the use of `canvas.toDataURL` for image conversion.

#### Dynamic Style Customization
- **Color Control**: The JavaScript script listens for user inputs on the color fields. The clock's colors for the face, border, hour lines, minute lines, and hands are dynamically updated based on these inputs.
- **CSS Styling**: The project incorporates a separate CSS file with styles for the form and button, enhancing the overall aesthetic and user experience.

#### Canvas Drawing with Custom Styles
- **Adaptive Drawing**: The script draws the clock on the canvas using the user-defined colors. It refreshes the clock's appearance in real-time, reflecting any changes made by the user.
- **Continuous Animation**: As with the previous version, `requestAnimationFrame` is used to update the clock hands continuously.

#### Practical Application
- This enhanced version of the clock project demonstrates more advanced aspects of web development, including user interaction, dynamic styling, and creating downloadable content from canvas elements.
- It serves as a practical example of how to build interactive, customizable web applications using HTML, CSS, and JavaScript.

Overall, Animated Clock V2 highlights the integration of user inputs into canvas-based applications, showcasing the flexibility and interactivity that modern web technologies can provide. It's an excellent example of enhancing user engagement and functionality in web-based projects.

### [E. Audio API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/07-audio-api)

![Audio API - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/07-audio-api/07-audio-api-site-1.png)

![Audio API - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/07-audio-api/07-audio-api-site-2.png)

![Audio API - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/07-audio-api/07-audio-api-site-3.png)

![Audio API - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/07-audio-api/07-audio-api-site-4.png)

![Audio API - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/07-audio-api/07-audio-api-site-5.png)

This project demonstrates the use of the Web Audio API to create a custom audio player in a web environment. The player includes controls for play, pause, stop, volume adjustment, and a seeker to navigate through the audio track.

#### Custom Audio Player Interface
- **HTML Setup**: The webpage features an `<audio>` element and a styled `div` that acts as the audio player with buttons for play, pause, stop, and sliders for volume and seeking.
- **Styling**: CSS is used to style the player interface, making the controls user-friendly and visually appealing.

#### Play, Pause, and Stop Functionality
- **Control Buttons**: JavaScript event listeners are attached to play, pause, and stop buttons. These control the playback of the audio file, showcasing how to interact with media elements using JavaScript.
- **Stop Functionality**: The stop button not only pauses the audio but also resets its current time to the beginning.

#### Volume Control and Display
- **Volume Slider**: A slider allows the user to adjust the volume. The volume value is dynamically updated and displayed, demonstrating the handling of range inputs and real-time updates to the audio element's properties.

#### Time Seeker and Display
- **Seeker Slider**: The seeker slider reflects the current playback position and allows users to jump to different parts of the audio.
- **Time Update**: JavaScript functions update the seeker's position and the displayed current time as the audio plays. This involves calculations to format and display the current time in a user-friendly manner.

#### Event Handling and Dynamic Updates
- **Metadata Loading**: An event listener is set up to handle the loading of audio metadata, setting the maximum value of the seeker slider based on the audio duration.
- **Time Update Event**: The `timeupdate` event on the audio element triggers updates to the seeker's position and the current time display.

#### Practical Application
- This project exemplifies the practical application of the Audio API for creating custom audio interfaces in web applications.
- It demonstrates the integration of HTML, CSS, and JavaScript to create a fully functional, interactive, and visually appealing audio player.

Overall, the Audio API project serves as an excellent example of how to harness web technologies to build custom multimedia controls, enhancing the user experience in web applications through interactive and tailored interfaces.

#### [E1. Music Player](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/08-music-player-project/music-player)

![Music Player - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-1.png)

![Music Player - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-2.png)

![Music Player - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-3.png)

![Music Player - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-4.png)

![Music Player - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-5.png)

![Music Player - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-6.png)

![Music Player - Site Image 7](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/08-music-player-project/08-music-player-site-7.png)

This project focuses on creating a feature-rich music player using HTML5, CSS, and JavaScript, incorporating advanced functionalities like song switching, play/pause controls, and a progress bar.

#### User Interface Design
- **HTML Structure**: The interface includes a music container with navigation buttons for play, pause, next, and previous actions, an image container for album art, and a progress bar for tracking song playback.
- **Styling with CSS**: The design uses custom styles and imports from Google Fonts and FontAwesome for icons. The layout is visually appealing with rounded corners, shadows, and a gradient background.

#### Music Player Functionality
- **Dynamic Content Loading**: JavaScript functions load song details dynamically, including the title and cover image. The `loadSong` function updates the source for the audio and image elements based on the current song.
- **Play/Pause Toggle**: The play button toggles between play and pause states, changing the icon accordingly and controlling the playback of the audio element.

#### Song Navigation
- **Next and Previous Buttons**: These buttons allow the user to switch between songs. The song index is updated, and the corresponding song is loaded and played.
- **Song Array**: An array holds the names of the songs, simplifying the management of available tracks.

#### Progress Bar and Interaction
- **Updating Progress**: The progress bar visually indicates the current playback position. It updates in real-time as the song plays.
- **Seeking Functionality**: Users can click on the progress bar to jump to different parts of the song, demonstrating interaction with the audio playback.

#### Animation and Visual Feedback
- **Spinning Album Art**: The album cover rotates when a song is playing, adding a dynamic visual element to the player.
- **CSS Animations**: Keyframe animations and transitions are used for smooth visual effects, like the rotating album cover and the fading music info.

#### Practical Application
- This project exemplifies the integration of various web technologies to create an interactive and functional music player. It highlights skills in DOM manipulation, event handling, and CSS animations.
- The music player is a practical demonstration of creating custom multimedia controls and interfaces, a valuable skill in modern web development.

Overall, the Music Player project showcases how to build an interactive, aesthetically pleasing, and user-friendly web application, combining HTML5's audio capabilities with advanced CSS and JavaScript techniques.

#### [E2. Drum Machine](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/09-drum-machine-project/drum-machine)

![Drum Machine - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/09-drum-machine-project/09-drum-machine-site.png)

This project involves creating a drum machine using HTML, CSS, and JavaScript. It simulates a percussion instrument, allowing users to play different drum sounds by pressing specific keys on their keyboard.

#### Interactive Drum Pads
- **HTML Elements**: The webpage features a series of `div` elements representing drum pads. Each pad is associated with a keyboard key, indicated by the `<kbd>` element, and a corresponding drum sound.
- **Drum Sound Files**: Separate `<audio>` elements are linked to each drum pad, each triggered by a specific keyboard key.

#### JavaScript Event Handling
- **Key Press Detection**: The JavaScript code listens for `keydown` events. When a user presses a key, the script checks if it corresponds to one of the drum pads.
- **Playing Drum Sounds**: If a matching key is pressed, the script plays the associated audio file. The `currentTime` property of the audio is set to 0 to ensure the sound plays from the start each time.

#### Visual Feedback
- **Styling Drum Pads**: The drum pads are styled using CSS for a clean, modern look. They are laid out in a grid-like formation, making it visually intuitive.
- **Dynamic Visual Effects**: When a drum pad is activated, its appearance changes temporarily, giving visual feedback to the user. This is achieved through CSS transformations and transitions.

#### Practical Application
- This project demonstrates the use of event listeners in JavaScript to create an interactive musical interface. 
- It showcases how to manage audio playback and synchronize it with user input, a useful skill for developing interactive web applications.
- The project also illustrates how to combine HTML, CSS, and JavaScript effectively to create an engaging user experience.

Overall, the Drum Machine project is a creative example of using web technologies to build an interactive and entertaining application, highlighting the potential of combining simple elements to create a more complex and interactive experience.

### [F. Video API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/10-video-api)

![Video API - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/10-video-api/10-video-api-site-1.png)

![Video API - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/10-video-api/10-video-api-site-2.png)

![Video API - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/10-video-api/10-video-api-site-3.png)

This project demonstrates how to create a custom video player using HTML5's Video API, along with JavaScript to control playback and update UI elements in real-time.

#### Custom Video Player Interface
- **HTML Structure**: The page includes a `<video>` element with attributes like `width`, `autoplay`, `loop`, and `muted`. It also has buttons for play, pause, and stop, along with a time display and a range input for seeking.
- **Video Source**: The video player is linked to a `.mov` file as its source, with a poster image displayed before the video plays.

#### JavaScript Playback Controls
- **Control Buttons**: Event listeners are attached to the play, pause, and stop buttons to control the video playback. The play button starts the video, pause stops it temporarily, and stop halts the playback and resets the video to the beginning.
- **Time Display**: The script updates the time display to show the current playback time, formatting it as minutes and seconds.

#### Video Seeker Functionality
- **Seeker Input**: A range input allows users to seek to different parts of the video. As the video plays, the seeker's value updates to reflect the current playback position.
- **Seeking Event Handling**: The seeker's `input` event is used to update the video's `currentTime`, allowing users to jump to different parts of the video.

#### Dynamic UI Updates
- **Interval for Time Update**: A repeating interval updates the time display every 100 milliseconds, ensuring synchronization with the video playback.
- **Metadata Loading**: The script sets the maximum value of the seeker based on the video's duration once the metadata is loaded, ensuring accurate seeking.

#### Practical Application
- This project exemplifies the use of the HTML5 Video API for creating custom video players with enhanced control over playback and user interaction.
- It demonstrates key concepts such as event handling, manipulating media elements, and dynamically updating UI components in response to media state changes.

Overall, the Video API project serves as a practical guide for building interactive and user-friendly media players in web applications, showcasing how HTML5, CSS, and JavaScript can be combined to control and interact with video content effectively.

#### [F1. Video Player](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/11-video-player-project/video-player)

![Video Player - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/11-video-player-project/11-video-player-site-1.png)

![Video Player - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/11-video-player-project/11-video-player-site-2.png)

![Video Player - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/11-video-player-project/11-video-player-site-3.png)

This project entails creating a custom video player interface using HTML, CSS, and JavaScript. The player is equipped with controls for play, pause, stop, and seeking within the video, offering a tailored viewing experience.

#### Enhanced User Interface
- **HTML Structure**: The layout includes a `<video>` element and a control panel with buttons for play, pause, and stop, as well as a progress bar for seeking. 
- **Font Awesome Icons**: The player uses Font Awesome icons for a polished, intuitive control interface.

#### Styling and Layout
- **CSS Design**: The design features a modern, sleek look with a dark theme for the control panel and rounded corners for a smooth appearance.
- **Responsive Design**: The media query in CSS ensures that the player is responsive and adjusts to different screen sizes.

#### Play and Stop Controls
- **Control Functionality**: JavaScript is used to add functionality to the play and stop buttons. The play button toggles between play and pause states, changing the icon accordingly.
- **Stop Button**: The stop button halts the video and resets it to the beginning, enhancing user control over the playback.

#### Progress Bar
- **Seeking Feature**: The progress bar allows viewers to seek to different parts of the video. As the video plays, the bar updates to reflect the current playback position.
- **Custom Slider Design**: The slider is custom-styled using CSS to match the overall aesthetic of the player.

#### Timestamp Display
- **Time Update**: The timestamp displays the current time of the video, which updates dynamically as the video plays or when the viewer seeks a different position.

#### Practical Application
- This project is a practical example of enhancing HTML5's native video capabilities with custom controls and styling, demonstrating advanced front-end development techniques.
- It highlights the integration of HTML, CSS, and JavaScript to create a highly interactive and user-friendly video player.

Overall, the custom Video Player project showcases the potential of combining standard web technologies to build sophisticated and attractive media playback interfaces, enhancing the user experience beyond the default browser capabilities.

### [G. Web Animations API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/12-web-animation-api)

![Web Animations API - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-1.png)

![Web Animations API - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-2.png)

![Web Animations API - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-3.png)

![Web Animations API - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-4.png)

![Web Animations API - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-5.png)

![Web Animations API - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/12-web-animation-api/12-web-animation-api-site-6.png)

This exercise demonstrates the use of the Web Animations API in JavaScript to create a dynamic, interactive animation. The example features a spinning ball with control buttons for play, pause, reverse, speed up, and slow down, offering users an engaging way to interact with the animation.

#### Animation Setup
- **HTML Structure**: A `div` element represents the animated object (a ball), and a set of control buttons allows user interaction with the animation.
- **SVG Element**: The ball is represented by an SVG element, providing high-quality graphics that scale well on any screen.

#### JavaScript and Web Animations API
- **Animation Definition**: The exercise uses JavaScript to define keyframes and options for the ball's rolling animation. This includes properties like transform and color changes.
- **Animation Controls**: Event listeners are attached to each control button, triggering actions like playing, pausing, reversing, and adjusting the playback speed of the animation.

#### Customization of Playback
- **Play and Pause**: Users can start and stop the animation at any time.
- **Reverse**: The animation can be played in reverse, showcasing the flexibility of the Web Animations API.
- **Speed Control**: Users can speed up or slow down the animation, demonstrating dynamic control over the animation playback rate.

#### Styling
- **CSS Styling**: The styling is minimalist with a focus on contrast, ensuring that the animated element and controls are clearly visible against the background.
- **Responsive Design**: The CSS ensures that the animation and controls are displayed correctly across different devices.

#### Practical Application
- This exercise is a practical example of using the Web Animations API for creating interactive animations in web applications.
- It highlights the API's power and flexibility in controlling animations programmatically, offering an advanced alternative to traditional CSS animations.

Overall, the Web Animations API exercise showcases how modern web technologies can be used to create highly interactive and visually appealing web animations, enhancing user engagement and the overall user experience on web pages.

### [H. Speech Recognition - Web Speech API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/13-speech-recognition)

![Speech Recognition - Web Speech API - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-1.png)

![Speech Recognition - Web Speech API - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-2.png)

![Speech Recognition - Web Speech API - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-3.png)

![Speech Recognition - Web Speech API - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-4.png)

![Speech Recognition - Web Speech API - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-5.png)

![Speech Recognition - Web Speech API - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-6.png)

![Speech Recognition - Web Speech API - Site Image 7](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/13-speech-recognition/13-speech-recognition-site-7.png)

This project utilizes the Web Speech API to create an interactive web page that responds to the user's voice commands. Specifically, it changes the background color of the webpage based on the color named by the user.

#### Implementation of Speech Recognition
- **JavaScript Speech API**: The project uses the `SpeechRecognition` interface of the Web Speech API to recognize speech input from the user. This is set to recognize English (`en-US`) language.
- **Continuous Recognition**: The speech recognition is set to continuous mode, allowing it to process speech input continuously without stopping after a single command.

#### Dynamic Response to Voice Commands
- **Color Change Functionality**: As the user speaks, the recognized words are processed to identify color names. When a valid color name is detected, the background color of the webpage is changed accordingly.
- **Event Handling**: The `onresult` event of the speech recognition object captures and processes the speech input, implementing the logic for changing the background color.

#### User Interaction
- **Voice Command Prompt**: Users are prompted to say a color name, guiding them on how to interact with the web page.
- **Real-Time Feedback**: The immediate change in the background color upon recognizing a color name provides real-time feedback to the user.

#### Styling and Design
- **CSS Styling**: The webpage is styled with a modern font from Google Fonts and uses a simple, clean layout. The initial background color is set to blue, and the heading has a distinctive styling to make it stand out.

#### Practical Application
- This project showcases a practical application of the Speech Recognition API in creating voice-interactive web applications.
- It highlights how voice commands can be used to dynamically manipulate the DOM, enhancing user engagement and accessibility.

Overall, the Speech Recognition API project demonstrates the potential of integrating advanced browser APIs to create innovative, interactive web experiences. It illustrates a simple yet effective use of voice recognition technology in web development.

### [I. Speech Synthesis - Web Speech API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/14-speech-synthesis)

![Speech Synthesis - Web Speech API - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/14-speech-synthesis/14-speech-synthesis-site-1.png)

![Speech Synthesis - Web Speech API - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/12-web-browser-apis/14-speech-synthesis/14-speech-synthesis-site-2.png)

This project demonstrates the use of the Web Speech Synthesis API to convert text into speech. It features an interactive webpage where users can type text, select a voice, and have the text read aloud.

#### Interactive Text-to-Speech Interface
- **HTML Setup**: The webpage includes a form with a textarea for text input, a dropdown menu for voice selection, and a button to trigger speech synthesis.
- **Voice Selection**: The dropdown menu dynamically lists available speech synthesis voices, allowing users to choose their preferred voice.

#### Speech Synthesis Implementation
- **JavaScript Speech Synthesis**: The script uses the `SpeechSynthesisUtterance` interface to create an utterance from the user's text input.
- **Voice Selection Processing**: The selected voice from the dropdown menu is applied to the utterance, enabling customized speech output.
- **Form Submission Handling**: The form's submit event is captured to process and speak the entered text using the chosen voice.

#### Styling and Layout
- **CSS Design**: The page is styled with a modern, clean design, using the Poppins font for a friendly user interface. The layout is centered and responsive for easy readability and interaction.
- **Color Scheme**: A soothing salmon background color is used, providing a visually appealing and calming user experience.

#### Practical Application
- This project showcases a practical application of the Speech Synthesis API, illustrating how web applications can be made more interactive and accessible.
- It highlights the capability of modern web browsers to provide advanced features like speech synthesis, enhancing user engagement and accessibility.

Overall, the Speech Synthesis API project is a clear demonstration of integrating advanced browser APIs to create interactive and user-friendly web applications. It exemplifies how web technologies can be leveraged to enhance the user experience through interactive and accessible design.

## [13. Constructors & Prototypes - Object Oriented Programming](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes)

### [A. Object Literals & This](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/01-object-literals-this)

![Object Literals & This - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/01-object-literals-this/01-object-literals-this-console.png)

### [B. Constructor Functions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/02-constructor-functions)

![Constructor Functions - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/02-constructor-functions/02-constructor-functions-console.png)

### [C. Literals vs. Constructors](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/03-literals-vs-constructors)

![Literals vs. Constructors - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/03-literals-vs-constructors/03-literals-vs-constructors-console-1.png)

![Literals vs. Constructors - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/03-literals-vs-constructors/03-literals-vs-constructors-console-2.png)

### [D. Object Properties](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/04-object-properties)

![Object Properties - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/04-object-properties/04-object-properties-console-1.png)

![Object Properties - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/04-object-properties/04-object-properties-console-2.png)

![Object Properties - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/04-object-properties/04-object-properties-console-3.png)

### [E. Prototypes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/05-prototypes)

![Prototypes - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/05-prototypes/05-prototypes-console-1.png)

![Prototypes - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/05-prototypes/05-prototypes-console-2.png)

### [F. Add Prototype Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/06-add-prototype-methods)

![Add Prototype Methods - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/06-add-prototype-methods/06-add-prototype-methods-console-1.png)

![Add Prototype Methods - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/06-add-prototype-methods/06-add-prototype-methods-console-2.png)

### [G. Object Create](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/07-object-create)

![Object Create - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/07-object-create/07-object-create-console-1.png)

![Object Create - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/07-object-create/07-object-create-console-2.png)

### [H. Prototypical Inheritance Call](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/08-prototypical-inheritance-call)

![Prototypical Inheritance Call - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/08-prototypical-inheritance-call/08-prototypical-inheritance-call-console-1.png)

![Prototypical Inheritance Call - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/13-oop-constructors-prototypes/08-prototypical-inheritance-call/08-prototypical-inheritance-call-console-2.png)

## [14. Classes & Private Properties - Object Oriented Programming](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties)

### [A. Classes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/01-classes)

![Classes - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/01-classes/01-classes-console-1.png)

![Classes - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/01-classes/01-classes-console-2.png)

### [B. Class Inheritance](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/02-class-inheritance)

![Class Inheritance - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/02-class-inheritance/02-class-inheritance-console-1.png)

![Class Inheritance - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/02-class-inheritance/02-class-inheritance-console-2.png)

### [C. Static Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/03-static-methods)

![Static Methods - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/03-static-methods/03-static-methods-console.png)

### [D. Getters & Setters with Classes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/04-getters-setters-classes)

![Getters & Setters with Classes - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/04-getters-setters-classes/04-getters-setters-classes-console-1.png)

![Getters & Setters with Classes - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/04-getters-setters-classes/04-getters-setters-classes-console-2.png)

### [E. Getters & Setters with Object.defineProperty()](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/05-getters-setters-defineproperty)

![Getters & Setters with Object.defineProperty() - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/05-getters-setters-defineproperty/05-gettings-setters-defineproperty-console.png)

### [F. Private Properties Convention](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/06-private-properties-convention)

![Private Properties Convention - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/06-private-properties-convention/06-private-properties-convention-console-1.png)

![Private Properties Convention - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/06-private-properties-convention/06-private-properties-convention-console-2.png)

### [G. Class Fields ES2022](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/07-class-fields-ES2022)

![Class Fields ES2022 - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/07-class-fields-ES2022/07-class-fields-ES2022-console-1.png)

![Class Fields ES2022 - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/07-class-fields-ES2022/07-class-fields-ES2022-console-2.png)

### [H. Flags & Descriptors](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/08-flags-descriptors)

![Flags & Descriptors - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/08-flags-descriptors/08-flags-descriptors-console-1.png)

![Flags & Descriptors - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/08-flags-descriptors/08-flags-descriptors-console-2.png)

### [I. Freezing & Sealing Properties](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/09-freezing-sealing-properties)

![Freezing & Sealing Properties - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/09-freezing-sealing-properties/09-freezing-sealing-properties-console-1.png)

![Freezing & Sealing Properties - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/14-oop-classes-private-properties/09-freezing-sealing-properties/09-freezing-sealing-properties-console-2.png)

## [15. Tracalorie Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/15-tracalorie-project/tracalorie)

## [16. Modules & Tooling](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/16-modules-and-tooling)

## [17. Iterators & Data Structures](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures)

### [A. Symbols](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/01-symbols)

![Symbols - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/01-symbols/01-symbols-console-1.png)

![Symbols - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/01-symbols/01-symbols-console-2.png)

![Symbols - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/01-symbols/01-symbols-console-3.png)

### [B. Iterators](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/02-iterators)

![Iterators - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/02-iterators/02-iterators-console.png)

### [C. Generators](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/03-generators)

![Generators - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/03-generators/03-generators-console-1.png)

![Generators - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/03-generators/03-generators-console-2.png)

### [D. Profile Scroller Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/04-profile-scroller-project/profile-scroller)

![Profile Scroller Project - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/04-profile-scroller-project/04-profile-scroller-site-1.png)

![Profile Scroller Project - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/04-profile-scroller-project/04-profile-scroller-site-2.png)

![Profile Scroller Project - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/04-profile-scroller-project/04-profile-scroller-site-3.png)

![Profile Scroller Project - Console Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/04-profile-scroller-project/04-profile-scroller-site-4.png)

### [E. Sets](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/05-sets)

![Sets - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/05-sets/05-sets-console-1.png)

![Sets - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/05-sets/05-sets-console-2.png)

### [F. Maps](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/06-maps)

![Maps - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/06-maps/06-maps-console-1.png)

![Maps - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/06-maps/06-maps-console-2.png)

![Maps - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/06-maps/06-maps-console-3.png)

### [G. Poll Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/07-poll-project)

![Poll Project - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/07-poll-project/07-poll-project-site-1.png)

![Poll Project - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/07-poll-project/07-poll-project-site-2.png)

![Poll Project - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/07-poll-project/07-poll-project-site-3.png)

![Poll Project - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/07-poll-project/07-poll-project-site-4.png)

![Poll Project - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/07-poll-project/07-poll-project-site-5.png)

![Poll Project - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/07-poll-project/07-poll-project-site-6.png)

![Poll Project - Site Image 7](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/07-poll-project/07-poll-project-site-7.png)

### [H. Stacks](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/08-stacks)

![Stacks - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/08-stacks/08-stacks-console-1.png)

![Stacks - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/08-stacks/08-stacks-console-2.png)

### [I. Queues](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/09-queues)

![Queues - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/09-queues/09-queues-console-1.png)

![Queues - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/09-queues/09-queues-console-2.png)

### [J. Linked Lists](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/10-linked-lists)

![Linked Lists - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/10-linked-lists/10-linked-lists-console-1.png)

![Linked Lists - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/17-iterators-data-structures/10-linked-lists/10-linked-lists-console-2.png)

## [18. Unit Testing Algorithms](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing)

![Unit Testing Algorithms - Terminal Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/18-unit-testing-algorithms/18-unit-testing-algorithms-terminal-9.png)

### [A. Sum](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/01-sum)

![Sum - Unit Test - Terminal Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/18-unit-testing-algorithms/18-unit-testing-algorithms-terminal-1.png)

### [B. FizzBuzz](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/02-fizzbuzz)

![FizzBuzz - Unit Test - Terminal Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/18-unit-testing-algorithms/18-unit-testing-algorithms-terminal-2.png)

### [C. Reverse String](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/03-reversestring)

![Reverse String - Unit Test - Terminal Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/18-unit-testing-algorithms/18-unit-testing-algorithms-terminal-3.png)

### [D. Palindrome](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/04-palindrome)

![Palindrome - Unit Test - Terminal Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/18-unit-testing-algorithms/18-unit-testing-algorithms-terminal-4.png)

### [E. Array Chunk](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/05-arraychunk)

![Array Chunk - Unit Test - Terminal Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/18-unit-testing-algorithms/18-unit-testing-algorithms-terminal-5.png)

### [F. Anagram](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/06-anagram)

![Anagram - Unit Test - Terminal Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/18-unit-testing-algorithms/18-unit-testing-algorithms-terminal-6.png)

### [G. Get Elements by Tag](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/07-getelementsbytag)

![Get Elements by Tag - Unit Test - Terminal Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/18-unit-testing-algorithms/18-unit-testing-algorithms-terminal-7.png)

### [H. Has Duplicate IDs](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/08-hasduplicateids)

![Has Duplicate IDs - Unit Test - Terminal Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/18-unit-testing-algorithms/18-unit-testing-algorithms-terminal-8.png)

## [19. Node.js Core Modules](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/19-nodejs-modules/node-core-modules)

### [A. File System (fs) - Core Module](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/node-core-modules/fs.js)

![File System (fs) - Core Module - Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/19-fs.png)

### [B. Hyper Text Transfer Protocol (http) - Core Module](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/node-core-modules/http.js)

![Hyper Text Transfer Protocol (http) - Core Module - Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/19-http.png)

### [C. Operating System (os) - Core Module](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/node-core-modules/os.js)

![Operating System (os) - Core Module - Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/19-os.png)

### [D. Paths & Directories (path) - Core Module](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/node-core-modules/path.js)

![Paths & Directories (path) - Core Module - Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/19-path.png)

### [E. URL (url) & URL Query String (urlqs) - Core Modules](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/node-core-modules/urlqs.js)

![URL (url) - Core Module - Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/19-url.png)

![URL Query String (urlqs) - Core Module - Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/19-urlqs.png)

## [20. Random Ideas Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/20-randomideas-app/randomideas-app)

## Sources & Credits
Guided Exercises by [Brad Traversy](https://github.com/bradtraversy)
