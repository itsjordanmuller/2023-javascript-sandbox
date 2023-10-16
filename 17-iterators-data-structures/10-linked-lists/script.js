class Node {
  constructor(value) {
    this._value = value;
    this._next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }
}

const list = new LinkedList();

console.log(list);
