// Replace First
function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replaced First!";

  firstItem.replaceWith(li);
}

replaceFirstItem();

// Replace Second
function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<li>Replaced Second!</li>";
}

replaceSecondItem();

// Replace All
function replaceAllItems() {
  const items = document.querySelectorAll("li");

  //   items.forEach((item, index) => {
  //     item.outerHTML = "<li>Replaced All!</li>";
  //   });

  // Using a Ternary to Have Condition for Specific Index
  items.forEach((item, index) =>
    index === 1
      ? (item.innerHTML = "Second Item!")
      : (item.innerHTML = "Replaced All!")
  );
}

replaceAllItems();

// Replace Child from Parent
function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping List";

  header.replaceChild(h2, h1);
}

replaceChildHeading();
