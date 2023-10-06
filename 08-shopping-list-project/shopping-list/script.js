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
}

itemForm.addEventListener("submit", addItem);
