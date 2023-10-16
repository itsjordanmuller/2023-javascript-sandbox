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

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this._items[this._front];
    for (let i = this._front; i < this._count - 1; i++) {
      this._items[i] = this._items[i + 1];
    }
    this._count--;
    this._items.length = this._count;
    return item;
  }

  isEmpty() {
    return this._count === 0;
  }
}

const queue = new Queue();

// Queue an Item to the Rear/Back/Tail with Enqueue
queue.enqueue("Item 1");
queue.enqueue("Item 2");
queue.enqueue("Item 3");

// Dequeue the Item in Front/Head with Dequeue
queue.dequeue();

console.log(queue);
