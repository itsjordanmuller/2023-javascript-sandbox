const items = ["Book", "Table", "Chair", "Kite"];

// Default Way to Loop Through Array with For Loop
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// Does the Same Thing, But Shorter
for (const item of items) {
  console.log(item);
}
