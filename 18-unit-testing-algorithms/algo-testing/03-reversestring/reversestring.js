// Solution 1
// function reverseString(string) {
//   return string.split("").reverse().join("");
// }

// Solution 2
function reverseString(string) {
  let reversed = "";

  for (let char of string) {
    reversed = char + reversed;
  }

  return reversed;
}

module.exports = reverseString;
