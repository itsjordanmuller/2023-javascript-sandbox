const global = {
  currentPage: window.location.pathname,
  search: {
    term: "",
    type: "",
    page: 1,
    totalPages: 1,
  },
};

// Display 20 Most Popular Movies
async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular");
  // console.log(results);
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
  // console.log(movieID);
  const movie = await fetchAPIData(`movie/${movieID}`);

  // Overlay for Background Image
  displayBackgroundImage("movie", movie.backdrop_path);

  const movieDetailsEl = document.createElement("div");
  movieDetailsEl.innerHTML = `
  <div class="details-top">
          <div>
          ${
            movie.poster_path
              ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}"/>`
              : `<img src="images/no-image.jpg" class="card-img-top" alt="${movie.title}" />
              `
          }
          </div>
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Release Date: ${movie.release_date}</p>
            <p>
              ${movie.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join("")}
            </ul>
            <a href="${
              movie.homepage
            }" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(
              movie.budget
            )}</li>
            <li><span class="text-secondary">Revenue:</span> $${addCommasToNumber(
              movie.revenue
            )}</li>
            <li><span class="text-secondary">Runtime:</span> ${
              movie.runtime
            } minutes</li>
            <li><span class="text-secondary">Status:</span> ${movie.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${movie.production_companies
            .map(
              (company) => `
            <span>${company.name}</span>`
            )
            .join(", ")}</div>
        </div>
  `;

  document.getElementById("movie-details").appendChild(movieDetailsEl);
}

// Display Specific Show Details
async function displayShowDetails() {
  const showID = window.location.search.split("=")[1];
  // console.log(showID);
  const show = await fetchAPIData(`tv/${showID}`);

  // Overlay for Background Image
  displayBackgroundImage("show", show.backdrop_path);

  const showDetailsEl = document.createElement("div");
  showDetailsEl.innerHTML = `
  <div class="details-top">
  <div>
    ${
      show.poster_path
        ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}" class="card-img-top" alt="${show.name}"/>`
        : `<img src="images/no-image.jpg" class="card-img-top" alt="${show.name}" />
        `
    }
  </div>
  <div>
    <h2>${show.name}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${show.vote_average.toFixed(1)} / 10
    </p>
    <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
    <p>${show.overview}</p>
    <h5>Genres</h5>
    <ul class="list-group">
      ${show.genres.map((genre) => `<li>${genre.name}</li>`).join("")}
    </ul>
    <a href="${
      show.homepage
    }" target="_blank" class="btn">Visit Show Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Show Info</h2>
  <ul>
    <li><span class="text-secondary">Number Of Episodes:</span> ${
      show.number_of_episodes
    }</li>
    <li>
      <span class="text-secondary">Last Episode To Air:</span> ${
        show.last_episode_to_air.name
      }
    </li>
    <li><span class="text-secondary">Status:</span> ${show.status}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">${show.production_companies
    .map(
      (company) => `
    <span>${company.name}</span>`
    )
    .join(",")}</div>
</div>
  `;

  document.getElementById("show-details").appendChild(showDetailsEl);
}

// Search Movies/Shows
async function search() {
  const queryString = window.location.search;
  // console.log(queryString);
  const urlParams = new URLSearchParams(queryString);
  global.search.type = urlParams.get("type");
  global.search.term = urlParams.get("search-term");

  if (global.search.term !== "" && global.search.term !== null) {
    console.log(urlParams.get("search-term"));
  } else {
    showAlert("Please enter a search term.");
  }
}

// Display Slider
async function displaySlider() {
  const { results } = await fetchAPIData("movie/now_playing");

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("swiper-slide");

    div.innerHTML = `
      <a href="movie-details.html?id=${movie.id}">
      ${
        movie.poster_path
          ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}"/>`
          : `<img src="images/no-image.jpg" class="card-img-top" alt="${movie.title}" />
          `
      }
      </a>
      <h4 class="swiper-rating">
        <i class="fas fa-star text-secondary"></i> ${movie.vote_average.toFixed(
          1
        )} / 10
      </h4>
    `;
    document.querySelector(".swiper-wrapper").appendChild(div);
  });

  initSwiper();
}

// Show Alert
function showAlert(message, className) {
  const alertEl = document.createElement("div");
  alertEl.classList.add("alert", className);
  alertEl.appendChild(document.createTextNode(message));
  document.getElementById("alert").appendChild(alertEl);

  setTimeout(() => alertEl.remove(), 3000);
}

function initSwiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

// Display Backdrop on Details Pages
function displayBackgroundImage(type, backgroundPath) {
  const overlayDiv = document.createElement("div");
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
  overlayDiv.style.backgroundSize = "cover";
  overlayDiv.style.backgroundPosition = "center";
  overlayDiv.style.backgroundRepeat = "no-repeat";
  overlayDiv.style.height = "100vh";
  overlayDiv.style.width = "100vw";
  overlayDiv.style.position = "absolute";
  overlayDiv.style.top = "0";
  overlayDiv.style.left = "0";
  overlayDiv.style.zIndex = "-1";
  overlayDiv.style.opacity = "0.15";

  if (type === "movie") {
    document.getElementById("movie-details").appendChild(overlayDiv);
  } else {
    document.getElementById("show-details").appendChild(overlayDiv);
  }
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

// Add Commas to Numbers
function addCommasToNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Initialize App
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displaySlider();
      displayPopularMovies();
      //console.log("Home");
      break;
    case "/search.html":
      search();
      // console.log("Search");
      break;
    case "/shows.html":
      displayPopularShows();
      // console.log("Shows");
      break;
    case "/tv-details.html":
      displayShowDetails();
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
