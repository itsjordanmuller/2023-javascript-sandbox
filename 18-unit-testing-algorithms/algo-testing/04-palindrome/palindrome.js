// Solution 1
// function palindrome(string) {
//   return string === string.split("").reverse().join("");
// }

// Solution 2
function palindrome(string) {
  return string.split("").every((char, index) => {
    return char === string[string.length - index - 1];
  });
}

module.exports = palindrome;
