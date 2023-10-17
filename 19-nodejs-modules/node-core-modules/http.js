const http = require("http");

// Create Simple Server Using http
const server = http.createServer((request, response) => {
  response.end("Hello World!");
});

// Listen on Port 5000
server.listen(5000, () => {
  console.log("Server is Listening on Port 5000");
});
