// const fs = require("fs");
const fs = require("fs/promises");

// Write to a File

// Callback Version
// fs.writeFile("file1.txt", "Hello World!", (err) => {
//   if (err) throw err;
//   console.log("File Created");
// });

// Promise Version
fs.writeFile("file2.txt", "Hello World 2!")
  .then(() => console.log("File Created"))
  .catch((err) => console.log(err));
