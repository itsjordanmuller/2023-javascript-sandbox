// Create a div Element
const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My Element");

// Not the Best Way to Be Doing Things
// div.innerText = "Hello World!";

const text = document.createTextNode("Hello World!");
div.appendChild(text);

// Append div to the Bottom of the Body
document.body.appendChild(div);

// Append div to the Bottom of the Unordered List
document.querySelector("ul").appendChild(div);
