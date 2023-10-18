import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modal-btn");

function open() {
  modal.style.display = "block";
}

function close() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target === modal) {
    close();
  }
}

modalBtn.addEventListener("click", open);
window.addEventListener("click", outsideClick);
