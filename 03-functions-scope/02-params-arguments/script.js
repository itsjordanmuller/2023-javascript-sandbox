// Function with No Default Value for Parameter
// function registerUser(user) {
//   return user + " is registered";
// }

// Function with Default Value Set for Parameter
function registerUser(user = "User") {
  return user + " is registered";
}

// User is Not Defined Due to Scope
// console.log(user);

console.log(registerUser("Jordan"));

// Undefined Value When no Arguments are Passed
console.log(registerUser());
