# JavaScript Sandbox

## [11. Flixx App](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/11-flixx-app-project/flixx-app)

<a href="https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/11-flixx-app-project/flixx-app"><img src="https://custom-icon-badges.demolab.com/badge/Flixx%20App%20Project-b2ffff.svg?logo=star-fill&style=for-the-badge&logoColor=000000" width="100%"></a>

![Flixx App - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-1.png)

![Flixx App - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-2.png)

![Flixx App - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-3.png)

![Flixx App - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-4.png)

![Flixx App - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-5.png)

![Flixx App - Site Image 6](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-6.png)

![Flixx App - Site Image 7](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-7.png)

![Flixx App - Site Image 8](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/11-flixx-app-project/11-flixx-app-site-8.png)

The Flixx App project is a comprehensive web application designed to display information about movies and TV shows. It leverages modern web technologies and external APIs to provide a rich user experience.

#### Structure and Functionality

1. **HTML Structure**:
   - The project consists of multiple HTML pages including `index.html`, `movie-details.html`, `search.html`, `shows.html`, and `tv-details.html`. Each page serves a different purpose, such as listing movies, showing movie details, and enabling searches.
   - The pages share a common header and footer, creating a consistent user interface across the application.

2. **CSS Styling**:
   - The `style.css` file contains styles for the entire application, defining a color scheme, layout, typography, and responsive design elements.
   - `spinner.css` provides styling for a loading spinner, which enhances the user experience during data loading phases.

3. **JavaScript Functionality (`script.js`)**:
   - The JavaScript file contains functions to fetch and display data from The Movie Database (TMDB) API.
   - It includes different functions for displaying popular movies, TV shows, specific movie and TV show details, and search results.
   - The application uses `async` and `await` for handling asynchronous API requests and implements a spinner to indicate loading states.
   - The script also includes functionality for pagination in search results and to highlight active navigation links.

4. **API Integration**:
   - The application interacts with TMDB API, fetching data like popular movies, TV show details, and search results.
   - API keys and other configurations are managed in `secrets.js` (not provided), ensuring sensitive information is kept secure.

5. **Interactivity and User Experience**:
   - Features like a slider for now-playing movies, search functionality, pagination, and detailed pages for individual movies and TV shows enhance user interactivity.
   - The application employs modern UI/UX practices such as responsive design, ensuring usability across different devices.

6. **Additional Libraries**:
   - The project uses external libraries like Swiper.js for interactive sliders and FontAwesome for icons, enriching the visual appeal and functionality.

#### Usage and Navigation

- Users can navigate through the application to explore various movies and TV shows, check detailed information, and search for specific titles.
- The application provides an immersive experience by integrating various aspects like ratings, release dates, and genres.

#### Learning Summary

The Flixx App project is a well-rounded web application that effectively combines API data fetching, modern JavaScript practices, and responsive web design. It serves as a robust platform for movie and TV show enthusiasts to explore and discover content.