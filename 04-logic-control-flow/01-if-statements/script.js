// If True, Then Run The Following Code
if (true) {
  console.log("This is true!");
}

// Will Not Run Because Expression is False
if (false) {
  console.log("This is not true!");
}

const x = 10;
const y = 5;

// x > y is true, so it runs
if (x > y) {
  console.log(`${x} is greater than ${y}`);
}

// x === y is false, so it doesn't run
if (x === y) {
  console.log(`${x} is equal to ${y}`);
}

// x !== y is true, so it runs
if (x !== y) {
  console.log(`${x} is NOT equal to ${y}`);
}

// Shorthand If Statement Not The Best Syntax
if (x > y)
  console.log(`${x} is greater than ${y}`), console.log("This is also true");
else console.log("Else this");
