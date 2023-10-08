// Create a Promise
const promise = new Promise((resolve, reject) => {
  // Do Some Asynchronous Task
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

// After Promise, Run This Code
promise.then(() => {
  console.log("Promise consumed...");
});

// Runs Before Rest, Due to Global Scope
console.log("Hello from global scope!");
