const global = {
  currentPage: window.location.pathname,
};

// Display 20 Most Popular Movies
async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular");
  console.log(results);
  results.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("card");
    movieEl.innerHTML = `
        <a href="movie-details.html?id=${movie.id}">
        ${
          movie.poster_path
            ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}"/>`
            : `<img src="images/no-image.jpg" class="card-img-top" alt="${movie.title}" />
            `
        }
        </a>
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
            <small class="text-muted">Release: ${movie.release_date}</small>
          </p>
        </div>
        `;

    document.getElementById("popular-movies").appendChild(movieEl);
  });
}

// Show 20 Most Popular Shows
async function displayPopularShows() {
  const { results } = await fetchAPIData("tv/popular");
  console.log(results);
  results.forEach((show) => {
    const showEl = document.createElement("div");
    showEl.classList.add("card");
    showEl.innerHTML = `
        <a href="tv-details.html?id=${show.id}">
        ${
          show.poster_path
            ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" class="card-img-top" alt="${show.name}"/>`
            : `<img src="images/no-image.jpg" class="card-img-top" alt="${show.name}" />
            `
        }
        </a>
        <div class="card-body">
          <h5 class="card-title">${show.name}</h5>
          <p class="card-text">
            <small class="text-muted">Air Date: ${show.first_air_date}</small>
          </p>
        </div>
        `;

    document.getElementById("popular-shows").appendChild(showEl);
  });
}

// Display Specific Movie Details
async function displayMovieDetails() {
  const movieID = window.location.search.split("=")[1];
  console.log(movieID);
}

// Fetch Data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = secrets.api_key;
  const API_URL = "https://api.themoviedb.org/3/";

  showSpinner();

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();

  hideSpinner();

  return data;
}

// Show Spinner
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

// Hide Spinner
function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

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
      displayPopularMovies();
      //console.log("Home");
      break;
    case "/search.html":
      console.log("Search");
      break;
    case "/shows.html":
      displayPopularShows();
      // console.log("Shows");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
    case "/movie-details.html":
      displayMovieDetails();
      // console.log("Movie Details");
      break;
  }

  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
