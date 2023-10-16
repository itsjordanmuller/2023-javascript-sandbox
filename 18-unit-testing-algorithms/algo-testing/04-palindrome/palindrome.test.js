const isPalindrome = require("./palindrome");

describe("Check if Palindrome", () => {
  it("should be a function", () => {
    expect(typeof isPalindrome).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof isPalindrome("hello")).toEqual("boolean");
  });

  it("should return true if palindrome", () => {
    expect(isPalindrome("wow")).toBeTruthy();
    expect(isPalindrome("racecar")).toBeTruthy();
    expect(isPalindrome("radar")).toBeTruthy();
    expect(isPalindrome("rotator")).toBeTruthy();
  });

  it("should return false spaces are added to end", () => {
    expect(isPalindrome("wow ")).toBeFalsy();
    expect(isPalindrome("   racecar ")).toBeFalsy();
    expect(isPalindrome("radar  ")).toBeFalsy();
    expect(isPalindrome("  rotator")).toBeFalsy();
  });
});
