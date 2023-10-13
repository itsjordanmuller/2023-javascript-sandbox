let timeInterval;

const video = document.getElementById("video");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const currentTime = document.getElementById("current-time");

play.addEventListener("click", () => {
  video.play();
  updateTime();
});
pause.addEventListener("click", () => video.pause());
stop.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
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
    currentTime.innerText = formatTime(video.currentTime);
  }, 100);
}

video.addEventListener("loadedmetadata", () => {
  seeker.max = Math.floor(video.duration);
});

video.addEventListener("timeupdate", () => {
  seeker.value = Math.floor(video.currentTime);
  updateTime();
});

seeker.addEventListener("input", () => {
  video.currentTime = seeker.value;
});
