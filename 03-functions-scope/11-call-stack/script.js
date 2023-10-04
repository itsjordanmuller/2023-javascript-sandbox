// Stacks are LIFO: Last in First Out

// One at a Time on the Stack
function first() {
  console.log("first...");
}

function second() {
  console.log("second...");
}

function third() {
  console.log("third...");
}

first();
second();
third();

// First Stays Open While Second and Third are Being Used
function first() {
  console.log("first...");
  second();
}

function second() {
  console.log("second...");
  third();
}

function third() {
  console.log("third...");
}

first();
