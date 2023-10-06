const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  // Validate Input
  if (newItem === "") {
    alert("Item Input is Empty! Please add an item!");
    return;
  }
  // Check to Ensure Filled Inputs are Detected
  // console.log("Success!");

  // Create List item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark")
  button.appendChild(icon);
  return button;
}

functionCreateIcon(classes) {
    const icon = document.createElement("i");
    icon.className = classes;
    return icon;
}

itemForm.addEventListener("submit", addItem);
