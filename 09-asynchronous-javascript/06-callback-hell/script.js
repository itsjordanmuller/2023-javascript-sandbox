// Get Data at a Random Time
function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

// Use Callbacks to Get Data in Correct Order
// This Gets More Complicated the Deeper You Nest
getData("./movies.json", (data) => {
  console.log(data);
  getData("./actors.json", (data) => {
    console.log(data);
    getData("./directors.json", (data) => {
      console.log(data);
    });
  });
});

// Get Data from All 3 Sources at Random Times
// getData("./movies.json");
// getData("./actors.json");
// getData("./directors.json");
