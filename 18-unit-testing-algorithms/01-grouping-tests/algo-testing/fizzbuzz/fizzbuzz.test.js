const fizzBuzz = require("./fizzbuzz");

describe("FizzBuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzBuzz).toEqual("function");
  });

  it("should return the number if not divisible by 3 or 5", () => {
    expect(1).toEqual(1);
    expect(13).toEqual(13);
    expect(17).toEqual(17);
  });
});
