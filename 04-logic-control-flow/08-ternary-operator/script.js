const age = 17;

// Using an If Statement
if (age >= 18) {
  console.log("You Can Vote!");
} else {
  console.log("You Can't Vote Yet...");
}

// Using a Ternary Operator
age >= 18 ? console.log("You Can Vote!") : console.log("You Can't Vote Yet...");

// Assigning a Conditional Value to a Variable
const canVote1 = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "You Can Vote!" : "You Can't Vote Yet...";

console.log(canVote1);
console.log(canVote2);

// Multiple Statements

const auth = true;
// let redirect;

// if (auth) {
//   alert("Welcome to the Dashboard!");
//   redirect = "/dashboard";
// } else {
//   alert("Access Denied");
//   redirect = "/login";
// }

// Does The Same As Above Code, Just Shorter
const redirect = auth
  ? (alert("Welcome to the Dashboard"), "/dashboard")
  : (alert("Access Denied"), "/login");

console.log(redirect);

// auth ? console.log("Welcome to the Dashboard") : null;
// Instead You Can Use:
auth && console.log("Welcome to the Dashboard");
