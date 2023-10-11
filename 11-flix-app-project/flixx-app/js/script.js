const global = {
  currentPage: window.location.pathname,
};

// Highlight Active Link
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

// Initialize App
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("Home");
      break;
    case "/search.html":
      console.log("Search");
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
  }

  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
