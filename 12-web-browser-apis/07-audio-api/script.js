const audio = document.querySelector("audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const currentTime = document.getElementById("current-time");
const currentVolume = document.getElementById("current-volume");
const volume = document.getElementById("volume");
const seeker = document.getElementById("seeker");

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

volume.addEventListener("change", () => {
  audio.volume = volume.value;
  currentVolume.innerText = `Volume: ${Math.floor(volume.value * 100)}%`;
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

audio.addEventListener("loadedmetadata", () => {
  seeker.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  seeker.value = Math.floor(audio.currentTime);
  updateTime();
});

seeker.addEventListener("input", () => {
  audio.currentTime = seeker.value;
});
