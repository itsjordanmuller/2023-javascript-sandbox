let timeInterval;

const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const playBtnIcon = document.querySelector(".fa-play");
const stop = document.getElementById("stop");
const timestamp = document.getElementById("timestamp");
const progress = document.getElementById("progress");

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
    timestamp.innerText = formatTime(video.currentTime);
  }, 100);
}

function playVideo() {
  play.classList.add("play");
  playBtnIcon.classList.remove("fa-play");
  playBtnIcon.classList.add("fa-pause");
  video.play();
}

function pauseVideo() {
  play.classList.remove("play");
  playBtnIcon.classList.remove("fa-pause");
  playBtnIcon.classList.add("fa-play");
  video.pause();
}

playBtn.addEventListener("click", () => {
  const isPlaying = play.classList.contains("play");
  if (isPlaying) {
    pauseVideo();
  } else {
    playVideo();
  }
});

stop.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  updateTime();
});

video.addEventListener("timeupdate", () => {
  progress.value = Math.floor(video.currentTime);
  updateTime();
});
