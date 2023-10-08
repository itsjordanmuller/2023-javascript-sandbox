// Set a Timeout on a Function
setTimeout(function () {
  console.log("Hello from callback");
}, 2000);

// Runs Before Function with Timeout
console.log("Hello from global scope");
