class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(item) {
    this._items[this._count] = item;
    this._count++;
  }
}

const stack = new Stack();

stack.push("Item 1");
stack.push("Item 2");
stack.push("Item 3");

console.log(stack);
