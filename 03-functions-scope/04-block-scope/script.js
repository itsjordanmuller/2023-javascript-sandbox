const x = 100;

if (true) {
  const y = 200;
  console.log(x + y);
}

// Reference Error: y is not defined at this scope
// console.log(x + y);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Reference Error: i is not defined at this scope
// console.log(i);

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

// Accessible When var is Used at a Block Level
console.log(c);

function run() {
  var d = 100;
  console.log(d);
}

// Not Accessible When var is Used at a Function Level
// Reference Error: d is not defined at this scope
// console.log(d);

const foo = 1;
var bar = 2;

// Const is Not Accessible from Window Object
console.log(window.foo);
// Var Is Accessible from Window Object
console.log(window.bar);
