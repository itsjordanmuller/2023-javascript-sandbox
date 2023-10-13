console.log("--- STRINGS ---");

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

console.log("--- OTHER TYPES ---");

// Other Types
const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit);
console.log(boolObj, typeof boolObj);

const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);

console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);

console.log("--- FUNCTION & OBJECT CONSTRUCTORS ---");

// Function & Object Constructors

// Regular Function
const funcLit = function (x) {
  return x * x;
};

console.log(funcLit, typeof funcLit);
console.log(funcLit(5));

// Constructor Function
const funcObj = new Function("x", "return x * x");

console.log(funcObj, typeof funcObj);
console.log(funcObj(3));

// Objects
const obj1 = {};
// This does the same thing behind the scenes
const obj2 = new Object();

// Check to See Same Data & Type
console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);
