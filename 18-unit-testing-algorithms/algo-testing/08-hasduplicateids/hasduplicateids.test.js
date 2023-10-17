const hasDuplicateIDs = require("./hasduplicateids");

describe("Check if DOM Tree Has Duplicate IDs", () => {
  it("should be a function", () => {
    expect(typeof hasDuplicateIDs).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof hasDuplicateIDs()).toEqual("boolean");
  });

  it("should return false if no root", () => {
    expect(hasDuplicateIDs()).toBeFalsy();
  });

  it("should return true if there are duplicate IDs", () => {
    // Create Mock Elements
    const root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    root.appendChild(child1);
    root.appendChild(child2);

    // Add Duplicate IDs
    root.id = "root";
    child1.id = "child";
    child2.id = "child";

    const result = hasDuplicateIDs(root);

    expect(result).toBeTruthy();
  });

  it("should return false if there are no duplicate IDs", () => {
    // Create Mock Elements
    const root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    root.appendChild(child1);
    root.appendChild(child2);

    // Add Duplicate IDs
    root.id = "root";
    child1.id = "child1";
    child2.id = "child2";

    const result = hasDuplicateIDs(root);

    expect(result).toBeFalsy();
  });
});
