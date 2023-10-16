const myMap = new Map();

myMap.set("name", "John");
myMap.set(1, "blue");
myMap.set(2, "red");

// Get Values from Map by Getting Keys
console.log(myMap.get("name"));
console.log(myMap.get(1));
console.log(myMap.get(2));

// Get Size of a Map
console.log(myMap.size);

// Check if a Map Has Keys
console.log(myMap.has(1));
console.log(myMap.has(3));

// Delete a Key/Value from the Map by the Key
myMap.delete(2);
console.log("After Deleting Key 2:", myMap);

const peopleMap = new Map();
peopleMap.set("jordan", { phone: "555-555-5555", email: "jordan@gmail.com" });
peopleMap.set("john", { phone: "123-456-7890", email: "john@gmail.com" });
peopleMap.set("james", { phone: "321-654-0987", email: "james@gmail.com" });

peopleMap.forEach((person) => console.log(person.phone, person.email));

// Get Keys
console.log(peopleMap.keys());
// Get Values
console.log(peopleMap.values());
// Get Entries
console.log(peopleMap.entries());

// Iterate through Map
const iterator = peopleMap.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
