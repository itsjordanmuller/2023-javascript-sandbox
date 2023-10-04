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
