const clearBtn = document.querySelector("#clear");

function onClear() {
  const itemList = document.querySelector("ul");
  // One Way to Remove List Items
  //   const items = document.querySelectorAll("li");
  //   items.forEach((item) => item.remove());

  // More Performant Way Using a Loop
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// Older Way of Doing Things using onclick
// Only Uses Last One
// clearBtn.onclick = function () {
//   alert("Clear Items!");
// };
// clearBtn.onclick = function () {
//   console.log("Clear Items!");
// };

// Modern Way Using addEventListener
// clearBtn.addEventListener("click", function () {
//   alert("Clear Items!");
// });
// Using Arrow Function
// clearBtn.addEventListener("click", () => {
//   alert("Clear Items!");
// });
// clearBtn.addEventListener("click", () => alert("Clear Items!"));
// clearBtn.addEventListener("click", () => console.log("Clear Items!"));

// Only Pass In Function Name, Not () Otherwise It's Immediately Called
clearBtn.addEventListener("click", onClear);

// Remove the Event Listener After 5s, No Longer Able to Be Clicked
// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

// Send a Click After 5 Seconds
// setTimeout(() => clearBtn.click(), 5000);
