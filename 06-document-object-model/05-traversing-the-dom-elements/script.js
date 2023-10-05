let output;

// Get Child Elements
const parent = document.querySelector(".parent");
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

// Specific Children Element
parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

// First Element Child
parent.firstElementChild.innerText = "Child One";
// Last Element Child
parent.lastElementChild.innerText = "Child Three";

// Get Parent Elements from a Child

const child = document.querySelector(".child");

output = child.parentElement;
// Style the Parent by Selecting the Child and Traversing to Parent
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

// Sibling Elements
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem;
output = secondItem.nextElementSibling;

// Select Next Sibling
secondItem.nextElementSibling.style.color = "green";
// Select Previous Sibling
secondItem.previousElementSibling.style.color = "orange";

console.log(output);
