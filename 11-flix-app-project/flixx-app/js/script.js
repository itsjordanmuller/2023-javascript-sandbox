const global = {
  currentPage: window.location.pathname,
};

console.log(global.currentPage);

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
}

document.addEventListener("DOMContentLoaded", init);
