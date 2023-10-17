const fs = require("fs");

// Write to a File

// Callback Version
// fs.writeFile("file1.txt", "Hello World!", (err) => {
//   if (err) throw err;
//   console.log("File Created");
// });

// Promise Version
// const fsp = require("fs/promises");

// fsp.writeFile("file2.txt", "Hello World 2!")
//   .then(() => console.log("File Created"))
//   .catch((err) => console.log(err));

// Sync Version
fs.writeFileSync("file3.txt", "Hello World 3!");
console.log("File Created!");
