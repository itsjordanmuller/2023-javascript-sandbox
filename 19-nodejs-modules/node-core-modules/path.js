const path = require("path");

const myFilePath = "subfolder/anotherfolder/index.js";

// basename()
// File Name Full - "index.js"
const base1 = path.basename(myFilePath);
console.log(base1);
// File Name no Extension - "index"
const base2 = path.basename(myFilePath, ".js");
console.log(base2);

// extname()
// Extension Only - ".js"
const ext = path.extname(myFilePath);
console.log(ext);

// dirname()
// Dir with Subdirectories - "subfolder/anotherfolder"
const dir = path.dirname(myFilePath);
console.log(dir);

// join()
// Joins Text to Create Path - "subfolder/anotherfolder/index.js"
const myPath = path.join("subfolder", "anotherfolder", "index.js");
console.log(myPath);

// resolve()
// Creates Absolute Path - "/home/itsjordanmuller/repos/2023-javascript-sandbox/19-nodejs-modules/node-core-modules/subfolder/anotherfolder/index.js"
const myPath2 = path.resolve("subfolder", "anotherfolder", "index.js");
console.log(myPath2);

// __dirname
// Absolute Path to Project Folder - "/home/itsjordanmuller/repos/2023-javascript-sandbox/19-nodejs-modules/node-core-modules"
console.log(__dirname);

// __filename
// Asbolute Path to Current Filename in Project Folder - "/home/itsjordanmuller/repos/2023-javascript-sandbox/19-nodejs-modules/node-core-modules/path.js"
console.log(__filename);
