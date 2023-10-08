// Creating a new XMLHttpRequest object to request data from a web server
const xhr = new XMLHttpRequest();

// Initializing the request. The 'GET' method is used to retrieve data from the JSON file
xhr.open("GET", "./movies.json");

// readyState has 5 Possible States
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

// Function will be called whenever the state of the request changes.
xhr.onreadystatechange = function () {
  console.log(this.readyState);
};

xhr.send();
