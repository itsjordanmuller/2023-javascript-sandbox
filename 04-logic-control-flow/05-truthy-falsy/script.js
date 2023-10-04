// Falsy Values:
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

const x = false;

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

// Truthy Values:
// - Everything else that is not falsy
// - true
// - "0" (0 as a string)
// - " " (Space in a String)
// - "false" (False in a String)
// - [] (Empty Array)
// - {} (Empty Object)
// - function () {} (Empty Function)

const email = "test@test.com";

if (email) {
  console.log("You passed in an email");
}

console.log(Boolean(email));

// Truthy and False Caveats
const children = 0;

// Evaluates as False, Since 0 is Falsy
// if (children) {
// Possible Workaround By Checking If Not Equal to Undefined
// if (children !== undefined) {
// Another Workaround For This Issue
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter a number of children");
}

// Checking for Empty Arrays
const posts = [];

// No Posts Is Never Shown Since Empty Array Isn't Falsy
// if (posts) {
// Workaround for Checking Empty Array
if (posts.length > 0) {
  console.log("List Posts");
} else {
  console.log("No Posts");
}

// Checking for Empty Objects
const user = {};

// Empty Object Always Evaluates as Truthy
// if (user) {
// Workaround for Checking Empty Objects
if (Object.keys(user).length > 0) {
  console.log("List User");
} else {
  console.log("No User");
}
