// Remove Item Based on ID
function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

removeClearButton();

// Remove Child
function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

removeFirstItem();

// Remove an Item with a Specific Index
function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  //   const li = document.querySelector(`li:nth-child(${itemNumber}`);
  const li = document.querySelectorAll("li")[itemNumber - 1];

  ul.removeChild(li);
}

removeItem(2);

// Another Example Without Parent Selection
function removeItemNew(itemNumber) {
  const li = document.querySelectorAll("li");

  li[itemNumber - 1].remove();
}

removeItemNew(2);
