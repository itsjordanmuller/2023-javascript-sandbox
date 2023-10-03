// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = "developer";

console.log(myString);

const myNewString =
  myString[0].toUpperCase() + myString.slice(1, myString.length);

console.log(myNewString);
