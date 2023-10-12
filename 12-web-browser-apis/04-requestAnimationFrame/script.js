const image = document.querySelector("img");
let start;
let done = false;

function step(timestamp) {
  //   console.log(timestamp);
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;

  console.log(elapsed);
  if (elapsed > 5000) {
    done = true;
  }

  if (done) {
    return;
  }

  image.style.transform = `translateX(${elapsed / 20}px) rotate(${
    elapsed / 20
  }deg)`;

  requestAnimationFrame(step);
}

requestAnimationFrame(step);
