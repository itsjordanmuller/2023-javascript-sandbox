const items = ["Book", "Table", "Chair", "Kite"];
const users = [{ name: "Jordan" }, { name: "Kate" }, { name: "Steve" }];

// Default Way to Loop Through Array with For Loop
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// Does the Same Thing, But Shorter
// for (const item of items) {
//   console.log(item);
// }

// Access a Specific Property in An Array
// for (const user of users) {
//   console.log(user.name);
// }

// Loop Over Strings
const str = "Hello World!";

for (const letter of str) {
  console.log(letter);
}

// Loop Over Maps
const map = new Map();
map.set("name", "Jordan");
map.set("age", 23);

for (const [key, value] of map) {
  console.log(key, value);
}
