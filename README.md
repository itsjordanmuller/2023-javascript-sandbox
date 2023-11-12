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
