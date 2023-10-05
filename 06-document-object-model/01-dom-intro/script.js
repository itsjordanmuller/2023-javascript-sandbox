// We Can Log Document from the Window
console.log(window.document);
// Use dir to check Properties & Methods of the Document
// No Need to Use window, since it's the top level object
console.dir(document);

// Different Portions of the Document Can Be Targeted
console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.body.innerText);
console.log(document.links);

// Replace Everything in the innerHTMl with The Following
// document.body.innerHTML = "<h1>Hello World!</h1>";

// Inserts as the next element in the Document
// document.write("Hello from JS!");

// Selecting Using a Specific ID
console.log(document.getElementById("main"));
const main = document.getElementById("main");
// main.innerHTML = "<h1>Hello from main!</h1>";

// Using a Query Selector
document.querySelector("#main h1").innerText = "Hello DOM!";
