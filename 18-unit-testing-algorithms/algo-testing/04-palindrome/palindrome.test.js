const palindrome = require("./palindrome");

describe("Check if Palindrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof palindrome("hello")).toEqual("boolean");
  });

  it("should return true if palindrome", () => {
    expect(palindrome("wow")).toBeTruthy();
    expect(palindrome("racecar")).toBeTruthy();
    expect(palindrome("radar")).toBeTruthy();
    expect(palindrome("rotator")).toBeTruthy();
  });

  it("should return false spaces are added to end", () => {
    expect(palindrome("wow ")).toBeFalsy();
    expect(palindrome("   racecar ")).toBeFalsy();
    expect(palindrome("radar  ")).toBeFalsy();
    expect(palindrome("  rotator")).toBeFalsy();
  });
});
