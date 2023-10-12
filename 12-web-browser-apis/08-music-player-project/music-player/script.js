const audio = document.querySelector("audio");
const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const playBtnIcon = document.querySelector(".fa-play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Array of Song Titles
const songs = ["hey", "summer", "ukulele"];

// Keep Track of Songs
let songIndex = 2;

// Initially Load Song Details
loadSong(songs[songIndex]);

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtnIcon.classList.remove("fa-play");
  playBtnIcon.classList.add("fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtnIcon.classList.remove("fa-pause");
  playBtnIcon.classList.add("fa-play");
  audio.pause();
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

nextBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  if (songIndex === songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  loadSong(songs[songIndex]);
  audio.play();
});

prevBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  if (songIndex === 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex--;
  }
  loadSong(songs[songIndex]);
  audio.play();
});
