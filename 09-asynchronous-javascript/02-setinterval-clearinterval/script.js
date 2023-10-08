// setInterval to Call Function at Set Time Between Repetitions
const intervalID = setInterval(myCallback, 1000);

function myCallback() {
  console.log(Date.now());
}
