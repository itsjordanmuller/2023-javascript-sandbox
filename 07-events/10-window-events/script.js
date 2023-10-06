// Old Way of Waiting for Window to Load using onload
// window.onload = function () {
//   document.querySelector("h1").textContent = "Hello World!";
// };

// On Window Load Event
window.addEventListener("load", () => {
  console.log("Window Loaded");
});

// On DOMContentLoaded Event
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");
});

// Runs First in Current Configuration
console.log("I still run first!");

// Will Not Run with Script in Head with No Defer
document.querySelector("h1").innerText = "Hello World!";

// On Resize Event
window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `Resize to: ${window.innerWidth}W x ${window.innerHeight}H`;
});

// On Scroll Event
window.addEventListener("scroll", () => {
  console.log(`Scroll: ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

window.addEventListener("focus", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "blue";
  });
});

window.addEventListener("blur", () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "black";
  });
});
