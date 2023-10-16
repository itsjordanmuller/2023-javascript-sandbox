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
