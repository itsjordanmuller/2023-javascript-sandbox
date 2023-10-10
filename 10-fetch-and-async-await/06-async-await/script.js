const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John", age: 25 });
  }, 1000);
});

// Consume Promise with then Log Data to Console
promise.then((data) => console.log(data));
