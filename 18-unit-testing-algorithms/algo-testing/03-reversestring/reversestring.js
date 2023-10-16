// Solution 1
// function reverseString(string) {
//   return string.split("").reverse().join("");
// }

// Solution 2
// function reverseString(string) {
//   let reversed = "";

//   for (let char of string) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// Solution 3
function reverseString(string) {
  return string.split("").reduce((reversed, char) => char + reversed, "");
}

module.exports = reverseString;
