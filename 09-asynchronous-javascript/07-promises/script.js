// Create a Promise
const promise = new Promise((resolve, reject) => {
  // Do Some Asynchronous Task
  setTimeout(() => {
    console.log("Async task 1 complete");
    resolve();
  }, 1000);
});

// After Promise, Run This Code
// promise.then(() => {
//   console.log("Promise 1 consumed...");
// });

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: "John", age: 30 });
    } else {
      reject("Error. Something went wrong!");
    }
    // console.log("Async task 2 complete");
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log("The promise has been resolved or rejected"));

// Runs Before Rest, Due to Global Scope
console.log("Hello from global scope!");
