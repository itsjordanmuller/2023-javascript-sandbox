// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not
// [[Value]] - the value of the property

// PI is not Writable, Configurable, or Enumerable
Math.PI = 4;
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const rectObj = {
  name: "Rect1",
  width: 10,
  height: 10,
};

descriptor = Object.getOwnPropertyDescriptor(rectObj, "name");
console.log(descriptor);
