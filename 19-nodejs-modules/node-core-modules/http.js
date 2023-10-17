const http = require("http");
const fs = require("fs");

const posts = [
  { id: 1, title: "Post One", body: "This is post 1" },
  { id: 2, title: "Post Two", body: "This is post 2" },
];

// Create Simple Server Using http
const server = http.createServer((request, response) => {
  const url = request.url;

  //   console.log(url);
  if (url === "/") {
    fs.readFile("index.html", (error, file) => {
      if (error) {
        response.writeHead(500, { "content-type": "text/html" });
        response.end("<h1>500 - Server Error</h1>");
      } else {
        response.writeHead(200, { "content-type": "text/html" });
        response.end(file);
      }
    });
    // response.writeHead(200, { "content-type": "text/html" });
    // response.writeHead(200, { "content-type": "text/plaintext" });
    // response.end("<h1>Welcome</h1>");
  } else if (url === "/api/posts") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ success: true, data: posts }));
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>404 - Page Not Found</h1>");
  }
  //   response.end("Hello World!");
});

// Listen on Port 5000
server.listen(5000, () => {
  console.log("Server is Listening on Port 5000");
});
