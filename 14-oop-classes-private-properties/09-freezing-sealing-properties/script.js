// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed

const rectObj = {
  name: "Rect1",
  width: 10,
  height: 10,
};

// Get Value, Writeable, Enumerable, and Configurable Settings for All Properties
let descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log("Before Seal: ", descriptors);

// Seal Configurable to False on All Properties
Object.seal(rectObj);

descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log("After Seal: ", descriptors);

rectObj.color = "red";
delete rectObj.name;

rectObj.width = 20;

console.log(rectObj);
