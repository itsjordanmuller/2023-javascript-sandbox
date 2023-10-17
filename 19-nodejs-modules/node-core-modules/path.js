const path = require("path");

const myFilePath = "subfolder/anotherfolder/index.js";

// basename()

// File Name Only "index.js"
const base1 = path.basename(myFilePath);
console.log(base1);
// File Name no Extension
const base2 = path.basename(myFilePath, ".js");
console.log(base2);
