const button = document.querySelector("form button");
const formControl = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", () => {
  alert("Button was clicked!");
});

formControl.addEventListener("click", (e) => {
  alert("Div was clicked!");
  // Stop Event from Bubbling Using stopPropagation
  e.stopPropagation();
});

form.addEventListener("click", () => {
  alert("Form was clicked!");
});

document.body.addEventListener("click", () => {
  alert("Body was clicked!");
});
