# JavaScript Sandbox

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