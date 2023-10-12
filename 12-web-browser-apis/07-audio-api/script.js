const audio = document.querySelector("audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const currentTime = document.getElementById("current-time");
const volume = document.getElementById("volume");

let timeInterval;

play.addEventListener("click", () => {
  audio.play();
  updateTime();
});
pause.addEventListener("click", () => audio.pause());
stop.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  updateTime();
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function updateTime() {
  clearInterval(timeInterval);
  timeInterval = setInterval(() => {
    currentTime.innerText = formatTime(audio.currentTime);
  }, 100);
}
