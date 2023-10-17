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
