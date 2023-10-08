// Create a Promise
const promise = new Promise((resolve, reject) => {
  // Do Some Asynchronous Task
  setTimeout(() => {
    console.log("Async task 1 complete");
    resolve();
  }, 1000);
});

// After Promise, Run This Code
promise.then(() => {
  console.log("Promise 1 consumed...");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 complete");
    resolve();
  }, 1000);
}).then(() => console.log("Promise 2 consumed..."));

// Runs Before Rest, Due to Global Scope
console.log("Hello from global scope!");
