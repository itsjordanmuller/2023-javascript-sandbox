const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
  //   console.log("Input");
  //   console.log(e.target.value);
  heading.textContent = e.target.value;
}

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? "Checked" : "Not Checked";
}

function onFocus() {
  console.log("Input is Focused");
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "1px";
  itemInput.style.outlineColor = "green";
}

function onBlur() {
  console.log("Input is NOT Focused");
  itemInput.style.outlineStyle = "none";
}

// On Input
itemInput.addEventListener("input", onInput);
// On Change
priorityInput.addEventListener("change", onInput);
// On Check
checkbox.addEventListener("input", onChecked);
// On Focus (Starting Focus)
itemInput.addEventListener("focus", onFocus);
// On Blur (Stopping Focus)
itemInput.addEventListener("blur", onBlur);
