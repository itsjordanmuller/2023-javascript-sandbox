# JavaScript Sandbox
Self-Paced Learning Sandbox for JavaScript with Node.js, Jest, Webpack, HTML & CSS

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9.svg?style=for-the-badge&logo=Webpack&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

## [1. Variables & Data Types](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types)

### [A. Console](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/01-console)

![Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/01-console/01-console.png)

In this exercise, I created a simple page using HTML boilerplate and JavaScript to learn about variables and data types. 

The HTML file, `index.html` established a basic webpage structure and linked to a JavaScript file named `script.js`. This setup allowed me to observe the output of my JavaScript code in the browser's console.

> ![Emmet](https://img.shields.io/badge/Emmet-Visual%20Studio%20Code-007ACC.svg?style=for-the-badge&logo=Visual-Studio-Code&logoColor=white)
> 
> #### Creating HTML Boilerplate with [Emmet](https://code.visualstudio.com/docs/editor/emmet) in [Visual Studio Code](https://code.visualstudio.com/)
> 
> I was able to quickly generate HTML boilerplate code using [Emmet](https://code.visualstudio.com/docs/editor/emmet) Snippets in [Visual Studio Code](https://code.visualstudio.com/):
> 1. Create Empty `index.html` document
> 2. Begin to Type `!` and Look for Auto-Completion
> 3. Press `Tab` or `Enter` key to Use the Snippet
> 4. Your HTML boilerplate code should be ready!

I practiced using `console.log` to display various types of data, including `strings`, `numbers`, and `booleans`.

I also experimented with grouping console messages using `console.group`, `console.error`, `console.warn`, and `console.groupEnd`. 

Additionally, I learned to display objects in a table format using `console.table` and applied CSS styles to console messages.

This exercise provided a fundamental understanding of JavaScript variables, console methods, and data output formatting.

<details>
<summary>View HTML Code - index.html - A - Console</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Console</title>
  </head>
  <body>
    <h1>Console</h1>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - A - Console</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
console.log("Hello World!");

console.log(100);

console.log(20, "Hello", true);

const x = 500;
console.log(x);

console.group("Simple");
console.error("Alert");
console.warn("Warning");
console.groupEnd();

console.table({ name: "Jordan", email: "itsjordanmuller@gmail.com" });

const styles = "padding: 10px; background-color: white; color: green";

console.log("%cStyled Console Text", styles);
```
</details>

---

### [B. Comments & Shortcuts](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/02-comments-shortcuts)

![Comments & Shortcuts Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/02-comments-shortcuts/02-comments-shortcuts.png)

In this exercise, I practiced using `comments` in JavaScript. I applied these to comment out several `console.log` statements and a variable declaration.

#### Single-line Comments
> Marked with //, useful for brief notes or disabling a single line of code. 

#### Multi-line Comments
> Enclosed in /* and */, great for longer explanations or commenting out blocks of code. 

Additionally, I practiced organizing console messages with `console.group`, `console.error`, `console.warn`, and `console.groupEnd`. I also displayed an object in a table format using `console.table` and styled a `console.log` message with CSS. This exercise helped me understand how to use comments in JavaScript & reinforced my skills in output formatting in the console.

<details>
<summary>View JS Code - script.js - B - Comments & Shortcuts</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// This is a Single-Line Comment

/* This is a Multi-Line Comment
console.log("Hello World!");

console.log(100);

console.log(20, "Hello", true);

const x = 500;
console.log(x);
*/

console.group("Simple");
console.error("Alert");
console.warn("Warning");
console.groupEnd();

console.table({ name: "Jordan", email: "itsjordanmuller@gmail.com" });

const styles = "padding: 10px; background-color: white; color: green";

console.log("%cStyled Console Text", styles);
```
</details>

---

### [C. Variables](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/03-variables)

![Variables Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/03-variables/03-variables.png)

In this exercise, I focused on variable declaration and naming conventions in JavaScript. I learned about different ways to declare variables using `var`, `let`, and `const`, each having their own use cases and **scope**.

I followed specific naming conventions for variables, which include using only letters, numbers, underscores, and dollar signs, and not starting a name with a number. I explored different naming formats like **camelCase**, **underscore**, **PascalCase**, **lowercase**, and **UPPERCASE** through examples like `firstName`, `first_name`, `FirstName`, `FIRSTNAME`, etc.

I practiced declaring and initializing variables with `let` and `const`, understanding the difference between them. While `let` allows re-assignment, as I demonstrated by changing the value of `age`, `const` does not permit re-assigning to a new **primitive value**, illustrated by the commented-out code showing an error when trying to reassign a `const` variable. However, I learned that `const` can be used with **mutable data types** like arrays and objects, as seen when I modified the `arr` **array** and `person` **object**.

Lastly, I practiced declaring multiple variables at once, both uninitialized and with initial values, as well as showcased the flexibility and syntax variations in JavaScript variable declaration. This helped to enhance my understanding of variable usage, scope, and best practices in naming.

<details>
<summary>View JS Code - script.js - C - Variables</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase
// FIRSTNAME     UPPERCASE

let firstName = "Jordan";
let lastName = "Muller";

let age = 30;

console.log(firstName, lastName, age);
console.log(age);

// Re-assigning Variables
age = 31;
console.log(age);

let score;

score = 1;

console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

// const x = 100;
// x = 200;

const arr = [1, 2, 3, 4];

arr.push(5);

console.log(arr);

const person = {
  name: "John",
};

person.name = "Jordan";
person.email = "itsjordanmuller@gmail.com";

console.log(person);

// Declare Multiple Values at Once
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(a, b, c, d, e, f);
```
</details>

### [D. Data Types](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/04-data-types)

![Data Types Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/04-data-types/04-data-types.png)

In this exercise, I explored various data types in JavaScript, essential for understanding how to store and manipulate information in programming. I started with the `String` data type, demonstrated by the variable `firstName` set to "Jordan". Then, I moved on to `Number`, exemplified by variables like `age` and `temp`, which hold integer and floating-point numbers respectively.

The script also covered `Boolean` with a variable `hasKids` set to `false`, representing true/false values. The `Null` and `Undefined` types were showcased with `aptNumber` and `score`, demonstrating how `null` explicitly means "no value", while `undefined` typically means a variable has been declared but not assigned a value yet. Additionally, the exercise included more advanced data types: `Symbol`, represented by `id`, unique and immutable, and `BigInt`, as seen with the variable `n`, used for very large integers.

For reference types, I worked with an `Object`, using an array `numbers` and an object `person`, and a `Function`, using `sayHello`. It was interesting to note that functions in JavaScript are also treated as objects, as demonstrated by assigning `sayHello` to `output` and logging its type. This exercise provided a comprehensive overview of JavaScript's data types, enhancing my understanding of how different types of data can be handled and the nuances of each type in JavaScript.

<details>
<summary>View JS Code - script.js - D - Data Types</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// String
const firstName = "Jordan";

// Number
const age = 23;
const temp = 98.9;

// Boolean
const hasKids = false;

// Null (Type Shows as Object)
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol("id");

// BigInt
const n = 9007199254740991n;

// Reference Types
// Type: Object
const numbers = [1, 2, 3, 4];

const person = {
  name: "Jordan",
};

// Type: Function
function sayHello() {
  console.log("Hello!");
}

const output = sayHello;

console.log(output, typeof output);
```
</details>

### [E. Stack vs. Heap](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/05-stack-heap)

![Stack vs. Heap Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/05-stack-heap/05-stack-heap.png)

This exercise provided an understanding of stack and heap memory in JavaScript. Primitive types like `String` and `Number`, exemplified by `name` and `age`, are stored on the stack. In contrast, reference types like `Object`, shown with `person`, are stored on the heap. 

The script highlighted the difference between these storage types through variable assignments. For primitives, such as `newName`, changes do not impact the original variable, demonstrating value copying. However, for reference types like `newPerson`, modifications directly affect the original object, illustrating reference copying. This concise example clarified the fundamental memory allocation concepts in JavaScript.

<details>
<summary>View JS Code - script.js - E - Stack vs. Heap</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
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
```
</details>

### [F. Type Conversion](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/06-type-conversion)

![Type Conversion Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/06-type-conversion/06-type-conversion.png)

In this exercise, I explored the topic of type conversion in JavaScript, a fundamental concept for effectively managing and manipulating different types of data. The script began with a string variable `amount` initially assigned the value "Hello".

The first demonstration was converting a string to a number, using various methods like `parseInt()`, unary plus (`+amount`), and `Number()`. Each of these methods can transform a string into a numeric format, though their behavior varies slightly with different inputs.

The script also included commented-out examples to show other conversion methods, such as turning a number into a string using `amount.toString()` or `String(amount)`. Additionally, converting a string to a decimal number was illustrated with `parseFloat()`, and converting a number to a boolean was shown using `Boolean(amount)`.

Through this exercise, I gained a deeper understanding of how JavaScript handles type conversions, and the nuances of converting between strings, numbers, decimals, and booleans. This knowledge is crucial for data manipulation and ensuring correct data types are used in various operations.

<details>
<summary>View JS Code - script.js - F - Type Conversion</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let amount = "Hello";

// Convert String to Number
amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// Convert a Number to a String
// amount = amount.toString();
// amount = String(amount);

// Convert a String to Decimal
// amount = parseFloat(amount);

// Convert a Number to a Boolean
// amount = Boolean(amount);

console.log(amount, typeof amount);
```
</details>

### [G. Operators](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/07-operators)

![Operators Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/07-operators/07-operators.png)

In this exercise, I delved into the various operators in JavaScript, which are fundamental for performing calculations, assigning values, and comparing data. The script was structured to cover three main categories of operators: Arithmetic, Assignment, and Comparison.

For Arithmetic Operators, I worked with basic math operations like addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), and modulus (`%`). The exercise also included string concatenation using the `+` operator, demonstrating its versatility. Furthermore, I explored the exponentiation operator (`**`) and increment (`++`) and decrement (`--`) operators, which are shorthand for adding or subtracting one from a variable.

Next, I focused on Assignment Operators, demonstrating how to combine arithmetic operations with assignment. This included operators like `+=`, `-=`, `*=`, `/=`, `%=`, and `**=`, which are shortcuts for updating a variable's value based on its current value.

Finally, the script highlighted Comparison Operators, essential for logical operations. This included `==` and `===` for equality, `!=` and `!==` for inequality, and `>`, `<`, `<=`, and `>=` for greater than and less than comparisons. The exercise clarified the difference between `==` (equality without type checking) and `===` (strict equality with type checking).

<details>
<summary>View JS Code - script.js - G - Operators</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// 1. Arithmetic Operators
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 2;

// Concatenation
x = "Hello" + " " + "World!";

// Exponent
x = 2 ** 3;

// Increment
x = 1;
// x = x + 1;
x++;

// Decrement
x = 1;
// x = x - 1;
x--;

// 2. Assignment Operators
x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison Operators
x = 2 == "2";
x = 2 === "2";

x = 2 != "2";
x = 2 !== 2;

x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);
```
</details>

### [H. Type Coercion](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/08-type-coercion)

![Type Coercion Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/08-type-coercion/08-type-coercion.png)

In this exercise, I explored the concept of type coercion in JavaScript, which involves automatic or implicit conversion of values from one data type to another. The script primarily focused on numeric and string types, demonstrating how JavaScript handles the conversion of different types when they are used together in operations.

The exercise started with basic examples like adding a number and a string (`5 + "5"`), which JavaScript coerces into a string concatenation. Then, it showed how to explicitly convert a string to a number using `Number("5")`, followed by multiplication, which also involves type coercion but results in a numeric output due to the nature of the operation (`5 * "5"`).

Further, the script included examples with `null`, `true`, `false`, and `undefined`. These involved adding or converting these types to numbers. For instance, `5 + null` and `Number(null)` demonstrate how `null` is treated in arithmetic operations and explicit conversions. Similarly, the exercise showed the numeric conversion of boolean values (`true` and `false`) and their effect when used in arithmetic operations with numbers.

The final part included an example of adding a number to `undefined`, showcasing how JavaScript treats such operations. The exercise was instrumental in understanding how JavaScript implicitly or explicitly converts data types during operations, a key aspect of writing effective and error-free code.

<details>
<summary>View JS Code - script.js - H - Type Coercion</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let x;

x = 5 + "5";

x = 5 + Number("5");
x = 5 * "5";

x = 5 + null;
x = Number(null);

x = Number(true);
x = Number(false);

x = 5 + true;
x = 5 + false;

x = 5 + undefined;

console.log(x, typeof x);
```
</details>

### [I. Strings](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/09-strings)

![Strings Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/09-strings/09-strings.png)

In this exercise, I focused on strings, an essential data type for storing and manipulating textual data. The script covered different aspects of string handling, including concatenation, template literals, properties, methods, and more.

Initially, I experimented with string concatenation using the `+` operator and then transitioned to template literals for a cleaner syntax. Template literals, as shown in the example with `name` and `age`, allow embedding variables directly within a string using `${}` syntax.

The exercise then delved into string properties and methods. I learned about the `String` object, its properties like `length`, and methods such as `toUpperCase()`, `toLowerCase()`, `charAt()`, `indexOf()`, `substring()`, `slice()`, `trim()`, `replace()`, `includes()`, `valueOf()`, and `split()`. Each method served a specific purpose, like changing case, accessing characters, finding substrings, trimming whitespace, replacing content, checking for presence of a substring, converting to a primitive string, and splitting a string into an array.

An interesting aspect was accessing a string's prototype properties using `.__proto__`. This part of the script highlighted the underlying object-oriented nature of JavaScript strings.

<details>
<summary>View JS Code - script.js - I - Strings</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let x;

const name = "Jordan";
const age = 23;

// x = "Hello, my name is " + name + " and I am " + age + " years old";

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods
const s = new String("Hello World!");

x = typeof s;
x = s.length;

// Access Value by Key
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf("d");

x = s.substring(0, 5);
x = s.substring(6);

x = s.slice(-12, -7);

x = x.trim();

x = s.replace("World", "Jordan");

x = s.includes("Hello");

x = s.valueOf();

x = s.split(" ");

console.log(x);
```
</details>

### [J. Capitalize Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/10-capitalize-challenge)

![Capitalize Challenge Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/10-capitalize-challenge/10-capitalize-challenge.png)

In this exercise, I tackled a JavaScript challenge focused on string manipulation, specifically capitalizing the first letter of a given string. The task involved creating a new string `myNewString` with the capitalized form of the word held in `myString`.

The process began by declaring `myString` with the value "developer". The challenge was to transform this string into "Developer". To achieve this, I used a combination of string methods and properties. The first letter of `myString` was capitalized using `toUpperCase()`, and then the rest of the string was appended using `slice(1, myString.length)`. This approach efficiently combined the first capitalized character with the remaining lowercase characters of the original string.

The solution `myNewString = myString[0].toUpperCase() + myString.slice(1, myString.length)` elegantly showcased the power of string manipulation in JavaScript. It demonstrated how to modify parts of a string and concatenate them to form a new string. This exercise was a practical example of how to handle common string operations in JavaScript, enhancing my understanding of string methods and their applications in real-world scenarios.

<details>
<summary>View JS Code - script.js - J - Capitalize Challenge</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = "developer";

console.log(myString);

const myNewString =
  myString[0].toUpperCase() + myString.slice(1, myString.length);

console.log(myNewString);
```
</details>

### [K. Numbers](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/11-numbers)

![Numbers Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/11-numbers/11-numbers.png)

In this JavaScript exercise, I explored the various methods and properties related to the `Number` object, enhancing my understanding of how to work with numerical data. The script demonstrated different ways to manipulate and format numbers, an essential skill in many programming tasks.

The exercise began with creating a `Number` object `num` with the value `5.4567`. I then explored various methods like `toString()`, which converts a number to a string, and examined the length of this string representation. To format the number to a fixed number of decimal places, I used `toFixed(2)`, which rounds the number to two decimal places.

Further, the script included `toPrecision(3)`, which formats the number to a specified precision, and `toExponential(2)`, which represents the number in exponential notation. I also used `toLocaleString("en-US")` to format the number according to U.S. locale conventions. Additionally, `valueOf()` was used to retrieve the primitive value of the `Number` object.

Towards the end, I delved into the properties of the `Number` object, such as `Number.MAX_VALUE` and `Number.MIN_VALUE`, to understand the range of values that JavaScript numbers can represent.

<details>
<summary>View JS Code - script.js - K - Numbers</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let x;

const num = new Number(5.4567);

x = num.toString();

x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(3);

x = num.toExponential(2);

x = num.toLocaleString("en-US");

x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x);
```
</details>

### [L. Math Object](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/12-math-object)

![Math Object Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/12-math-object/12-math-object.png)

In this JavaScript exercise, I explored the capabilities of the `Math` object, a built-in object that has properties and methods for mathematical constants and functions. This is a fundamental aspect of JavaScript for performing various mathematical operations.

The exercise started with `Math.sqrt(9)`, demonstrating how to calculate the square root of a number. Next, I used `Math.abs(-5)` to find the absolute value, turning a negative number into a positive one. For rounding numbers, I applied `Math.round(4.6)` for standard rounding, `Math.ceil(4.2)` to always round up, and `Math.floor(4.7)` to always round down.

Additionally, I worked with `Math.pow(2, 3)` to raise a number to a certain power and used `Math.min(4, 5)` and `Math.max(4, 5)` to find the smallest and largest numbers among the given arguments, respectively. 

The script also included `Math.random()`, a method to generate a random number between 0 and 1. To make this more practical, I combined it with `Math.floor(Math.random() * 100 + 1)` to generate a random integer between 1 and 100.

<details>
<summary>View JS Code - script.js - L - Math Object</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let x;

x = Math.sqrt(9);

x = Math.abs(-5);

x = Math.round(4.6);

x = Math.ceil(4.2);

x = Math.floor(4.7);

x = Math.pow(2, 3);

x = Math.min(4, 5);
x = Math.max(4, 5);

x = Math.random();

x = Math.floor(Math.random() * 100 + 1);

console.log(x);
```
</details>

### [M. Number Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/13-number-challenge)

![Number Challenge Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/13-number-challenge/13-number-challenge.png)

In this exercise, I applied JavaScript's Math functions and arithmetic operators to better understand basic mathematical operations and string interpolation. The script involved generating random numbers and performing various calculations with them.

The challenge began by generating two random numbers, `x` and `y`, where `x` is a random number between 1 and 100, and `y` is a random number between 1 and 50. This was achieved using `Math.floor(Math.random() * 100 + 1)` and `Math.floor(Math.random() * 50 + 1)`.

I then performed and displayed the results of five basic arithmetic operations: addition (`sum`), subtraction (`difference`), multiplication (`product`), division (`quotient`), and modulus (`remainder`). Each operation was accompanied by an output string, like `sumOutput = \`${x} + ${y} = ${sum}\``, which not only provided the calculation results but also neatly presented the operands and the operation performed.

<details>
<summary>View JS Code - script.js - M - Number Challenge</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let x, y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

sum = x + y;
sumOutput = `${x} + ${y} = ${sum}`;

difference = x - y;
differenceOutput = `${x} - ${y} = ${difference}`;

product = x * y;
productOutput = `${x} * ${y} = ${product}`;

quotient = x / y;
quotientOutput = `${x} / ${y} = ${quotient}`;

remainder = x % y;
remainderOutput = `${x} % ${y} = ${remainder}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(remainderOutput);
```
</details>

### [N. Dates & Times](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/14-dates-and-times)

![Dates & Times Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/14-dates-and-times/14-dates-and-times.png)

In this exercise, I delved into handling dates and times in JavaScript, a crucial aspect for any application that needs to track or manipulate temporal data. The script covered various ways of creating, formatting, and manipulating date objects using JavaScript's built-in `Date` object.

The exercise began with creating a new `Date` object representing the current date and time, which was then converted to a string using `toString()`. Following this, I explored creating `Date` objects with specific dates and times, using different formats and constructors. Examples included `new Date(2021, 5, 10, 12, 30, 0)`, `new Date("2021-07-10T12:30:00")`, and `new Date("07/10/2021 12:30:00")`. These examples demonstrated the flexibility of the `Date` constructor in accepting various date and time formats.

I also worked with the static method `Date.now()` to get the current date and time in milliseconds since the Unix Epoch. Then, I used the `getTime()` and `valueOf()` methods on a `Date` object to obtain its numeric representation in milliseconds. 

Another interesting aspect was creating a `Date` object from a specific timestamp (milliseconds), shown with `new Date(1625945400000)`, and converting the current time to Unix time (seconds since the Unix Epoch) using `Math.floor(Date.now() / 1000)`.

<details>
<summary>View JS Code - script.js - N - Dates & Times</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let d;

d = new Date();

d = d.toString();

d = new Date(2021, 5, 10, 12, 30, 0);

d = new Date("2021-07-10T12:30:00");
d = new Date("07/10/2021 12:30:00");

d = Date.now();

d = new Date("07-10-2021 12:30:00");
d = d.getTime();
d = d.valueOf();

d = new Date(1625945400000);

d = Math.floor(Date.now() / 1000);

console.log(d);
```
</details>

### [O. Date Object Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/15-date-object-methods)

![Date Object Methods Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/15-date-object-methods/15-date-object-methods.png)

In this exercise, I focused on the diverse methods available in the JavaScript `Date` object for retrieving and formatting date and time information. This exploration is crucial for handling temporal data in web and software development.

The script started with creating a new `Date` object `d`, representing the current date and time. I then used methods like `getTime()` and `valueOf()` to get the numeric timestamp of the date object, representing the number of milliseconds since the Unix Epoch.

Next, I explored methods to retrieve individual components of the date object, such as `getFullYear()`, `getMonth()`, `getDate()`, `getDay()` (for the day of the week), `getHours()`, `getMinutes()`, `getSeconds()`, and `getMilliseconds()`. This helped in understanding how to access specific parts of a date.

The exercise also included formatting the date into a custom string using template literals, and utilizing the `Intl.DateTimeFormat` object to format the date according to different locales (`en-US`, `en-GB`, and the system's default locale). Additionally, I experimented with customizing the output format, such as displaying only the month name using `{ month: "long" }` or `{ month: "short" }`.

Finally, I used `toLocaleString()` with various options to format the date and time in a more detailed and localized manner, specifying aspects like the weekday, year, month, day, time, and even the time zone.

<details>
<summary>View JS Code - script.js - O - Dates Object Methods</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let x;
let d = new Date();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();

x = d.getDay();

x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = Intl.DateTimeFormat("en-US").format(d);
x = Intl.DateTimeFormat("en-GB").format(d);
x = Intl.DateTimeFormat("default").format(d);

x = Intl.DateTimeFormat("default", { month: "long" }).format(d);

x = d.toLocaleString("default", { month: "short" });

x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/Los_Angeles",
});

console.log(x);
```
</details>

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

### Challenge 1
The first challenge involved a series of operations on an array `arr = [1, 2, 3, 4, 5]`. The task was to:
1. Add `0` to the beginning of the array using `.unshift(0)`.
2. Append `6` to the end of the array with `.push(6)`.
3. Reverse the order of the array using `.reverse()`.

The expected result was `[6, 5, 4, 3, 2, 1, 0]`, and the exercise provided a clear demonstration of how combining these array methods can effectively transform an array's structure and content.

### Challenge 2
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

### [H. JSON Introduction](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/08-json-intro)

### [I. Object Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/09-object-challenge)

## [3. Functions & Scope](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope)

### [A. Function Basics](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/01-function-basics)

### [B. Parameters & Arguments](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/02-params-arguments)

### [C. Global Scope](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/03-global-function-scope)

### [D. Block Scope](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/04-block-scope)

### [E. Nested Scope](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/05-nested-scope)

### [F. Declaration vs. Expression](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/06-declaration-vs-expression)

### [G. Arrow Functions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/07-arrow-functions)

### [H. IIFE - (Immediately Invoked Function Expression)](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/08-iife)

### [I. Function Challenges](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/09-function-challenges)

### [J. Execution Context in Action](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/10-execution-context-in-action)

### [K. Call Stack](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope/11-call-stack)

## [4. Logic & Control Flow](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow)

### [A. If Statements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/01-if-statements)

### [B. Else If Nesting](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/02-else-if-nesting)

### [C. Switches](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/03-switches)

### [D. Calculator Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/04-calculator-challenge)

### [E. Truthy & Falsy Values](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/05-truthy-falsy)

### [F. Logical Operators](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/06-logical-operators)

### [G. Logical Assignment](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/07-logical-assignment)

### [H. Ternary Operator](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/04-logic-control-flow/08-ternary-operator)

## [5. Iteration & Array Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods)

### [A. For Loops](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/01-for-loop)

### [B. Break & Continue](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/02-break-and-continue)

### [C. While & Do While](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/03-while-do-while)

### [D. Fizzbuzz Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/04-fizzbuzz-challenge)

### [E. For Of Loop](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/05-for-of-loop)

### [F. For In Loop](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/06-for-in-loop)

### [G. forEach](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/07-forEach)

### [H. Filter](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/08-filter)

### [I. Map](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/09-map)

### [J. Reduce](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/10-reduce)

### [K. Array Method Challenges](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/05-iteration-array-methods/11-array-method-challenges)

## [6. Document Object Model](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model)

### [A. DOM (Document Object Model) Introduction](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/01-dom-intro)

### [B. Examining Document Object Properties](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/02-examining-document-object-properties)

### [C. DOM Selectors for Single Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/03-dom-selectors-single-elements)

### [D. DOM Selectors for Multiple Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/04-dom-selectors-multiple-elements)

### [E. Traversing the DOM - Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/05-traversing-the-dom-elements)

### [F. Traversing the DOM - Nodes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/06-traversing-the-dom-nodes)

### [G. Create Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/07-create-elements)

### [H. List Item - innerHTML vs createElement](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/08-list-item-innerHTML-vs-createElement)

### [I. Refactor to Multiple Functions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/09-refactor-to-multiple-functions)

### [J. Insert Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/10-insert-elements)

### [K. Custom Insert After Function Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/11-custom-insertafter-challenge)

### [L. Replacing Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/12-replacing-elements)

### [M. Remove Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/13-remove-elements)

### [N. Styles & Classes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/14-styles-classes)

## [7. Events](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events)

### [A. Event Listeners](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/01-event-listeners/shopping-list)

### [B. Mouse Events](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/02-mouse-events/shopping-list)

### [C. Event Object](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/03-event-object/shopping-list)

### [D. Keyboard Events](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/04-keyboard-events/shopping-list)

### [E. Event Key Codes Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/05-event-keycode-project/event-keycodes)

### [F. Input Events](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/06-input-events/shopping-list)

### [G. Form Submissions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/07-form-submission/shopping-list)

### [H. Event Bubbling](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/08-event-bubbling/shopping-list)

### [I. Event Delegation](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/09-event-delegation/shopping-list)

### [J. Window Events](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/07-events/10-window-events)

## [8. Shopping List Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/08-shopping-list-project/shopping-list)

## [9. Asynchronous JavaScript](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript)

### [A. setTimeout & clearTimeout](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/01-settimeout-cleartimeout)

### [B. setInterval & clearInterval](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/02-setinterval-clearinterval)

### [C. Callbacks](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/03-callbacks)

### [D. AJAX & XHR](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/04-ajax-xhr)

### [E. Joke Generator Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/05-joke-generator-challenge/chuck-joke-generator-start)

### [F. Callback Hell](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/06-callback-hell)

### [G. Promises](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/07-promises)

### [H. Callback to Promise](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/08-callback-to-promise)

### [I. Promise Chaining](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/09-promise-chaining)

### [J. Promises vs Callback Hell](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/10-promises-vs-callback-hell)

### [K. Promise All](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/11-promise-all)

## [10. Fetch & Async Await](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await)

### [A. Fetch Basics](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/01-fetch-basics)

### [B. Random User Generator Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/02-random-user-project/random-user-generator)

### [C. Fetch Options](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/03-fetch-options)

### [D. Typicode Todos Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/04-typicode-todos-mini-project/typicode-todos)

### [E. Fetch Error Handling](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/05-fetch-error-handling)

### [F. Async Await](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/06-async-await)

### [G. Try & Catch](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/07-try-catch)

### [H. Async Await - Error Handling](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/08-async-await-error-handling)

### [I. Async Await - Multiple Promises](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/09-multiple-promises-async-await)

## [11. Flix App Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/11-flix-app-project/flixx-app)

## [12. Web Browser APIs](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis)

### [A. Geolocation API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/01-geolocation)

### [B. Maps API - Positions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/02-map-position)

### [C. Canvas API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/03-canvas)

### [D. Window requestAnimationFrame() Method](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/04-requestAnimationFrame)

#### [D1. Animated Clock Part 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/05-animated-clock-1/animated-clock)

#### [D2. Animated Clock Part 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/06-animated-clock-2/animated-clock)

### [E. Audio API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/07-audio-api)

#### [E1. Music Player](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/08-music-player-project/music-player)

#### [E2. Drum Machine](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/09-drum-machine-project/drum-machine)

### [F. Video API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/10-video-api)

#### [F1. Video Player](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/11-video-player-project/video-player)

### [G. Web Animations API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/12-web-animation-api)

### [H. Speech Recognition - Web Speech API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/13-speech-recognition)

### [I. Speech Synthesis - Web Speech API](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/12-web-browser-apis/14-speech-synthesis)

## [13. Constructors & Prototypes - Object Oriented Programming](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes)

### [A. Object Literals & This](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/01-object-literals-this)

### [B. Constructor Functions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/02-constructor-functions)

### [C. Literals vs. Constructors](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/03-literals-vs-constructors)

### [D. Object Properties](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/04-object-properties)

### [E. Prototypes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/05-prototypes)

### [F. Add Prototype Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/06-add-prototype-methods)

### [G. Object Create](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/07-object-create)

### [H. Prototypical Inheritance Call](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/13-oop-constructors-prototypes/08-prototypical-inheritance-call)

## [14. Classes & Private Properties - Object Oriented Programming](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties)

### [A. Classes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/01-classes)

### [B. Class Inheritance](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/02-class-inheritance)

### [C. Static Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/03-static-methods)

### [D. Getters & Setters with Classes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/04-getters-setters-classes)

### [E. Getters & Setters with Object.defineProperty()](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/05-getters-setters-defineproperty)

### [F. Private Properties Convention](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/06-private-properties-convention)

### [G. Class Fields ES2022](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/07-class-fields-ES2022)

### [H. Flags & Descriptors](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/08-flags-descriptors)

### [I. Freezing & Sealing Properties](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/14-oop-classes-private-properties/09-freezing-sealing-properties)

## [15. Tracalorie Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/15-tracalorie-project/tracalorie)

## [16. Modules & Tooling](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/16-modules-and-tooling)

## [17. Iterators & Data Structures](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures)

### [A. Symbols](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/01-symbols)

### [B. Iterators](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/02-iterators)

### [C. Generators](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/03-generators)

### [D. Profile Scroller Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/04-profile-scroller-project/profile-scroller)

### [E. Sets](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/05-sets)

### [F. Maps](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/06-maps)

### [G. Poll Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/07-poll-project)

### [H. Stacks](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/08-stacks)

### [I. Queues](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/09-queues)

### [J. Linked Lists](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/17-iterators-data-structures/10-linked-lists)

## [18. Unit Testing Algorithms](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing)

### [A. Sum](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/01-sum)

### [B. FizzBuzz](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/02-fizzbuzz)

### [C. Reverse String](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/03-reversestring)

### [D. Palindrome](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/04-palindrome)

### [E. Array Chunk](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/05-arraychunk)

### [F. Anagram](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/06-anagram)

### [G. Get Elements by Tag](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/07-getelementsbytag)

### [H. Has Duplicate IDs](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/18-unit-testing-algorithms/algo-testing/08-hasduplicateids)

## [19. Node.js Core Modules](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/19-nodejs-modules/node-core-modules)

### [A. File System (fs) - Core Module](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/node-core-modules/fs.js)

### [B. Hyper Text Transfer Protocol (http) - Core Module](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/node-core-modules/http.js)

### [C. Operating System (os) - Core Module](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/node-core-modules/os.js)

### [D. Paths & Directories (path) - Core Module](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/node-core-modules/path.js)

### [E. URL (url) & URL Query String (urlqs) - Core Modules](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/19-nodejs-modules/node-core-modules/urlqs.js)

## [20. Random Ideas Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/20-randomideas-app/randomideas-app)

## Sources & Credits
Guided Exercises by [Brad Traversy](https://github.com/bradtraversy)
