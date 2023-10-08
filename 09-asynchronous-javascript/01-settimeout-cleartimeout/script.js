// Set a Timeout on a Function
setTimeout(function () {
  console.log("Hello from callback");
}, 2000);
setTimeout(changeText, 2000);

// Runs Before Function with Timeout
console.log("Hello from global scope");

function changeText() {
  document.querySelector("h1").textContent = "Hello from callback";
}
