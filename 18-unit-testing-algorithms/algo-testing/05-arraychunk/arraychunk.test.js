const assert = require("assert");
const chunkArray = require("./arraychunk");

describe("Array Chunking", () => {
  it("should create chunks of a specific size", () => {
    assert.deepEqual(chunkArray([1, 2, 3, 4], 2), [
      [1, 2],
      [3, 4],
    ]);
    assert.deepEqual(chunkArray([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
  });
});
