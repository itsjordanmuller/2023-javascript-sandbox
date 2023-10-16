class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(item) {
    this._items[this._count] = item;
    this._count++;
  }

  pop() {
    if (this._count === 0) {
      return "Underflow";
    }

    const item = this._items[this._count - 1];
    this._count--;

    for (let i = this._count; i < this._items.length; i++) {
      this._items[i] = this._items[i + 1];
    }

    this._items.length = this._count;
  }
}

const stack = new Stack();

// Push Items onto Stack
stack.push("Item 1");
stack.push("Item 2");
stack.push("Item 3");

// Pop off Item 3 (Last Item on Top of Stack)
stack.pop();

console.log(stack);
