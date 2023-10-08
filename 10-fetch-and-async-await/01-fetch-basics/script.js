// Fetch from Window
// window.fetch();
// Fetch without window Object and with a then
// fetch("./movies.json")
//   .then((response) => {
//     // console.log(response);

//     // Return Response to Next then
//     return response.json();
//   })
//   .then((data) => {
//     // Take the response data and log to console
//     console.log(data);
//   });

// Shorter Way of Writing
// Fetching a JSON File using .json()
fetch("./movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching a Text File using .text()
fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch("https://api.github.com/users/itsjordanmuller")
  // fetch("https://api.github.com/users/itsjordanmuller/repos")
  .then((response) => response.json())
  .then((data) => (document.querySelector("h1").textContent = data.login));
