// Get Element by ID
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

// Get/Change Content
console.log(title);
title.textContent = "Hello World!";
title.innerText = "Hello Again!";
title.innerHTML = "<strong>Shopping List</strong>";

// Change Styles
title.style.color = "yellow";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// Query Selector
// document.querySelector()

// First Element
console.log(document.querySelector("h1"));
// First Element with ID app-title
console.log(document.querySelector("#app-title"));
// First Element with Class of container
console.log(document.querySelector(".container"));
// First Input Element with Text Set as Type Attribute
console.log(document.querySelector("input[type='text']"));
// 2nd List Item Element
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";
