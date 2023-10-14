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
// Allows Existing Properties to Be Modifed
// Prevents Addition & Deletion of New Properties
Object.seal(rectObj);

descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log("After Seal: ", descriptors);

rectObj.color = "red";
delete rectObj.name;

rectObj.width = 20;

console.log(rectObj);

const circObj = {
  name: "circ 1",
  radius: 15,
};

// Freeze Writeable to False on All Properties
// If you Freeze An Object, You're Also Sealing It
// Makes Object Completely Immutable
Object.freeze(circObj);

descriptors = Object.getOwnPropertyDescriptors(circObj);

circObj.color = "blue";
delete circObj.name;
circObj.name = "New Name";

console.log("After Freeze: ", descriptors);

// Check if Objects are Sealed
console.log("Rect Object Is Sealed? (T/F): ", Object.isSealed(rectObj));
console.log("Circle Object Is Sealed? (T/F): ", Object.isSealed(rectObj));

// Check if Objects are Frozen
console.log("Rect Object Is Sealed? (T/F): ", Object.isFrozen(rectObj));
console.log("Circle Object Is Sealed? (T/F): ", Object.isFrozen(rectObj));
