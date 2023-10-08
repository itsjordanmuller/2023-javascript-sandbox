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
fetch("./movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
