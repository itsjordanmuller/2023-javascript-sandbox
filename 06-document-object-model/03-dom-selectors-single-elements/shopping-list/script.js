// document.getElementById();

// console.log(document.getElementById("app-title"));
// console.log(document.getElementById("app-title").id);
// console.log(document.getElementById("app-title").className);
// console.log(document.getElementById("app-title").getAttribute("id"));

// Set Attributes
// document.getElementById("app-title").id = "new-id";
document.getElementById("app-title").title = "Shopping List";
document.getElementById("app-title").setAttribute("class", "title");

// Set a Variable to Avoid Repeating Code
const title = document.getElementById("app-title");
console.log(title);
