// Adding Event Listeners to Multiple Elements

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Adding Event Listeners to All Using forEach
// listItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });

// Event Delegation Method
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});

// Styling Using Events and Event Delegation
list.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});
