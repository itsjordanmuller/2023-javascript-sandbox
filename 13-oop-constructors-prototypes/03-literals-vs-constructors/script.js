const strLit = "Hello";
const strObj = new String("Hello");

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing - JavaScript Adds Wrapper Object onto a Literal
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// Unboxing - Turns Object Back into Literal
console.log(strObj.valueOf(), typeof strObj.valueOf());

// Constructors for Literal and Object Strings
console.log(strLit.constructor);
console.log(strObj.constructor);

// False - Not an Instance of String Constructor
console.log(strLit instanceof String);
// True - String Constructor Used to Create
console.log(strObj instanceof String);
