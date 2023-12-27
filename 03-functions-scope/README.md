# JavaScript Sandbox

## [3. Functions & Scope](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope)

<a href="https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/03-functions-scope"><img src="https://custom-icon-badges.demolab.com/badge/Functions%20&%20Scope-ffe0b2.svg?logo=bookmark&logoSource=feather&style=for-the-badge&logoColor=000000" width="100%"></a>

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