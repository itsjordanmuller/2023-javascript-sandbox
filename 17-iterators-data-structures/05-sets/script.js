const set = new Set([1, 2, 3, 4]);
// Duplicates Aren't Stored
const set1 = new Set([1, 2, 2, 3, 3, 4]);

// Add a Number to the Set
set.add(5);

console.log("After Adding 5:", set);
// Sets Only Store Unique Values
console.log(set1);

set.delete(5);
console.log("After Deleting 5:", set);

// Check if a Set Has a Value
console.log("Set has 3?:", set.has(3));
console.log("Set has 6?:", set.has(6));

// Create an Array from a Set Using .from
const setArray = Array.from(set);
console.log("Array made from Set:", setArray);

// Iterate Through a Set
console.log("--- Iterate Through Set Using Loop ---");
for (let item of set) {
  console.log(item);
}

console.log("--- Iterator from Values of Set Using .next() ---");

const iterator = set.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
