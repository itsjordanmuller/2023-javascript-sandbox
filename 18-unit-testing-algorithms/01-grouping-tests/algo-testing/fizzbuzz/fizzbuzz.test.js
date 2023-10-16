const fizzBuzz = require("./fizzbuzz");

describe("FizzBuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzBuzz).toEqual("function");
  });
});
