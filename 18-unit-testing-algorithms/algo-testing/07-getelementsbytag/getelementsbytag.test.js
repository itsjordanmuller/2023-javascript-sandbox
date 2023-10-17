const getElementsByTag = require("./getelementsbytag");

describe("Get Elements by Tag", () => {
  it("should be a function", () => {
    expect(typeof getElementsByTag).toEqual("function");
  });

  it("should return an array", () => {
    expect(Array.isArray(getElementsByTag())).toEqual(true);
  });

  it("should return an empty array if no root is passed in", () => {
    expect(getElementsByTag()).toEqual([]);
  });

  it("should return only the root element if no tagName is passed in", () => {
    const root = document.createElement("div");
    expect(getElementsByTag(root)).toEqual([root]);
  });

  it("should return the correct elements", () => {
    const root = document.createElement("div");

    const p1 = document.createElement("p");
    const span = document.createElement("span");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    root.appendChild(p1);
    root.appendChild(span);
    span.appendChild(p2);
    root.appendChild(p3);

    const result = getElementsByTag(root, "p");

    expect(result).toEqual([p1, p2, p3]);
  });
});
