// setInterval to Call Function at Set Time Between Repetitions
// const intervalID = setInterval(myCallback, 1000);

// function myCallback() {
//   console.log(Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeColor, 1000);
  }
}

function changeColor() {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}

// clearInterval to Stop the Current setInterval
function stopChange() {
  clearInterval(intervalID);
}

document.getElementById("start").addEventListener("click", startChange);
document.getElementById("stop").addEventListener("click", stopChange);
