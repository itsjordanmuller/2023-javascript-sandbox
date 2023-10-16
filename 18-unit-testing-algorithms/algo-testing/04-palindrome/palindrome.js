function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

module.exports = isPalindrome;
