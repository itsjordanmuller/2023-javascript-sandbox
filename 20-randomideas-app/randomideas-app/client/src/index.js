import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modal-btn");

function open() {
  modal.style.display = "block";
}

modalBtn.addEventListener("click", open);
