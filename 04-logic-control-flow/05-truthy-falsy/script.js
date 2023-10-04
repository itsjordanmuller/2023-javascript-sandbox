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
