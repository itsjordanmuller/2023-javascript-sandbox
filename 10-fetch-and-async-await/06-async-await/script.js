const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John", age: 25 });
  }, 1000);
});

// Consume Promise with then Log Data to Console
// promise.then((data) => console.log(data));

// Asynchronous Function Using Async Await
async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

// Asynchronous Fetch Request
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

getUsers();

// Same Function Using then instead of async and await
function getUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getUsers2();
