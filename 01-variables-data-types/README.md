# JavaScript Sandbox

## [1. Variables & Data Types](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types)

<a href="https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types"><img src="https://custom-icon-badges.demolab.com/badge/Variables%20&%20Data%20Types-ffb2b2.svg?logo=bookmark&logoSource=feather&style=for-the-badge&logoColor=000000" width="100%"></a>

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
