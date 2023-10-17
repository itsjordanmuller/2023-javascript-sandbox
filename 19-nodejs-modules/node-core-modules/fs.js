const fs = require("fs");

// Write to a File

// Callback Version
fs.writeFile("file1.txt", "Hello World!", (err) => {
  if (err) throw err;
  console.log("File Created");
});
