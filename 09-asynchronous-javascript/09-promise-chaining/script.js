const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: "John", age: 30 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    // Return to Another Then
    return user.name;
  })
  // Get Returned Name and Log to Console
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => {
    console.log(error);
    return 123;
  })
  .then((x) => console.log("This will log no matter what!", x));
