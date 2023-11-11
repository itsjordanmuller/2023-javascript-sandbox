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

![Variables Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/01-variables-data-types/04-data-types/04-data-types.png)

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

### [E. Stack Heap](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/05-stack-heap)

### [F. Type Conversion](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/06-type-conversion)

### [G. Operators](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/07-operators)

### [H. Type Coercion](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/08-type-coercion)

### [I. Strings](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/09-strings)

### [J. Capitalize Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/10-capitalize-challenge)

### [K. Numbers](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/11-numbers)

### [L. Math Object](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/12-math-object)

### [M. Number Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/13-number-challenge)

### [N. Dates & Times](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/14-dates-and-times)

### [O. Date Object Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/01-variables-data-types/15-date-object-methods)

## [2. Arrays & Objects](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects)

### [A. Array Basics](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/01-array-basics)

### [B. Array Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/02-array-methods)

### [C. Array Nesting, Concatenation & Spread](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/03-array-nesting-concat-spread)

### [D. Array Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/04-array-challenge)

### [E. Object Literals](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/05-object-literals)

### [F. Object Spread Methods](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/02-arrays-and-objects/06-object-spread-methods)

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
