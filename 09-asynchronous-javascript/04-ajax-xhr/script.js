// Creating a new XMLHttpRequest object to request data from a web server
const xhr = new XMLHttpRequest();

// Initializing the request. The 'GET' method is used to retrieve data from the JSON file
xhr.open("GET", "./movies.json");

// Function will be called whenever the state of the request changes.
xhr.onreadystatechange = function () {};
