// Quick & Dirty
function createListItem(item) {
  const li = document.createElement("li");
  li.innerHTML = `
${item}
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>
`;
  document.querySelector("ul").appendChild(li);
}

createListItem("Eggs");

// Performant & Clean
function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);

  li.appendChild(button);

  console.log(li.innerHTML);

  document.querySelector("ul").appendChild(li);
}

createNewItem("Cheese");
