// setInterval to Call Function at Set Time Between Repetitions
const intervalID = setInterval(myCallback, 1000);

function myCallback() {
  console.log(Date.now());
}

// clearInterval to Stop the Current setInterval
function stopChange() {
  clearInterval(intervalID);
}

document.getElementById("stop").addEventListener("click", stopChange);
