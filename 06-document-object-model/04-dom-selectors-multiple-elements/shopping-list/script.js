// Query Selector for All Elements
// document.querySelectorAll()

// Returns a NodeList of Items
const listItems = document.querySelectorAll(".item");
console.log(listItems);
console.log(listItems[1]);
console.log(listItems[1].innerText);

// Use a forEach to Loop Through NodeList to Style Each Item
// listItems.forEach((item, index) => {
//   item.style.color = "red";

//   if (index === 1) {
//     item.remove();
//   }
//   if (index === 0) {
//     item.innerHTML = `
//         Pomegranates
//         <button class="remove-item btn-link text-red">
//         <i class="fa-solid fa-xmark"></i>
//         </button>
//     `;
//   }
// });

// Get Elements by Class Name
// Returns an HTMLCollection instead of a NodeList
// No Need for . for class
const listItems2 = document.getElementsByClassName("item");
console.log(listItems2);

// Must Convert to An Array Before Using forEach
const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

// Get Elements by Tag Name
// Returns HTML Collection
const listItems3 = document.getElementsByTagName("li");
console.log(listItems3[0].innerText);
