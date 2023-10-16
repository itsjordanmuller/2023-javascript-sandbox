const anagram = require("./anagram");

describe("Check if Anagram", () => {
  it("should be a function", () => {
    expect(typeof anagram).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof anagram("hello", "bye")).toEqual("boolean");
  });

  it("should return true if the strings are anagrams", () => {
    expect(anagram("arm", "ram")).toBeTruthy();
    expect(anagram("race", "care")).toBeTruthy();
    expect(anagram("part", "trap")).toBeTruthy();
  });

  it("should return false if the strings are not anagrams", () => {
    expect(anagram("hello", "bye")).toBeFalsy();
    expect(anagram("yes", "no")).toBeFalsy();
    expect(anagram("abc", "xyz")).toBeFalsy();
  });
});
