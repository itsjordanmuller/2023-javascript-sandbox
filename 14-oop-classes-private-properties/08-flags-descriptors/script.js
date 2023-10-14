// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property

// PI is not Writable, Configurable, or Enumerable
Math.PI = 4;
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

const rectObj = {
  name: "Rect1",
  width: 10,
  height: 10,
};

Object.defineProperty(rectObj, "name", {
  writable: false,
  configurable: false,
  enumerable: false,
});

descriptor = Object.getOwnPropertyDescriptor(rectObj, "name");
// console.log(descriptor);

// Name Will Not Change When writeable = false
rectObj.name = "New Name";
// console.log(rectObj);

// Loop Through and Get Keys/Values (Won't Show name if enumerable = false)
for (let [key, value] of Object.entries(rectObj)) {
  console.log(`${key}: ${value}`);
}

// Flags Not Set on Height and Width, So They Are Writeable by Default
delete rectObj.height;
delete rectObj.width;
// console.log(rectObj);

console.log(Object.getOwnPropertyDescriptors(rectObj));
