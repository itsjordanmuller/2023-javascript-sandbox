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

// Rest Parameters Create an Array
function sum(...numbers) {
  let total = 0;

  // Loop to Sum all Numbers in an Array
  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Objects as Parameters
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "Jordan",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "John",
  })
);

// Arrays as Parameters
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5]);
