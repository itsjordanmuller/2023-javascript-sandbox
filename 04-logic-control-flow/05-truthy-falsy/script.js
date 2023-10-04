// Falsy Values:
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

const email = "test@test.com";

if (email) {
  console.log("You passed in an email");
}

console.log(Boolean(email));
