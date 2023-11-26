# JavaScript Sandbox

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