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

  // Get at Index

  // Remove at Index

  // Clear List
}

const list = new LinkedList();

// Insert Items as First Node
list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);

// Insert an Item as the Last Node
list.insertLast(50);

// console.log(list);
list.printListData();
