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

console.log(output);
