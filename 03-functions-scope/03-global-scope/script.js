// Window Methods
// window.alert("Hello");
// alert("World!");

const x = 100;

// Function with Window Properties
function run() {
  console.log(window.innerWidth);
  console.log(innerWidth);
  // Function Scope
  const y = 50;
  console.log(y, "in function");
}

run();

// Global Scope
console.log(x, "in global");

// Block Scope
if (true) {
  // Variable Shadowing
  const x = 25;
  const z = 75;
  console.log(z, "in block");
  console.log(z + x);
}
