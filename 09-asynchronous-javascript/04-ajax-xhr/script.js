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
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    data.forEach((movie) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
      document.querySelector("#results").appendChild(li);
    });
  }
};

xhr.send();
