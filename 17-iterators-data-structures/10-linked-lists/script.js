class Node {
  constructor(value) {
    this._value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  // Insert First Node (head)
  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
    this._length++;
  }

  // Insert Last Node (Tail)
  insertLast(value) {
    const newNode = new Node(value);
    let current = this._head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    this._length++;
  }

  // Print List Data
  printListData() {
    let current = this._head;
    let list = "";

    while (current) {
      list += current._value + " ";
      current = current.next;
    }

    console.log(list);
  }

  // Insert at Index
  insertAt(value, index) {
    if (index > this._length) {
      return;
    }

    if (index === 0) {
      this.insertFirst(value);
      return;
    }

    const newNode = new Node(value);
    let current, previous;
    current = this._head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    previous.next = newNode;
    this._length++;
  }
}

const list = new LinkedList();

// Create Items as First Nodes
list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);

// Create an Item as the Last Node
list.insertLast(50);

// Insert an Item at an Index
list.insertAt(500, 2);

// console.log(list);
list.printListData();
