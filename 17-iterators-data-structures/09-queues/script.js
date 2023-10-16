class Queue {
  constructor() {
    this._items = [];
    this._count = 0;
    this._front = 0;
  }

  enqueue(item) {
    this._items[this._count] = item;
    this._count++;
  }
}

const queue = new Queue();

// Queue an Item with Enqueue
queue.enqueue("Item 1");

console.log(queue);
