# JavaScript Sandbox

## [10. Fetch & Async Await](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await)

<a href="https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await"><img src="https://custom-icon-badges.demolab.com/badge/Fetch%20&%20Async%20Await-b2ffe8.svg?logo=bookmark&logoSource=feather&style=for-the-badge&logoColor=000000" width="100%"></a>

### [A. Fetch Basics](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/01-fetch-basics)

![Fetch Basics - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/01-fetch-basics/01-fetch-basics-console.png)

In this section, I explored the basics of using the Fetch API in JavaScript, a powerful tool for making network requests and handling responses. This exercise involved fetching data from various sources, including local files and external APIs, and integrating it with a simple HTML structure.

#### HTML Setup
- The HTML file contains a basic structure with a heading tag (`<h1>`) for displaying fetched data and a reference to the JavaScript file (`script.js`).

#### JSON Data
- A JSON file named `movies.json` lists movie titles and their release years. This file serves as a local data source for practicing fetch requests.

#### JavaScript Fetch Operations
- The `script.js` file includes examples of fetching data using different methods.
  - **Fetching Local JSON File**: The script demonstrates how to fetch a local JSON file (`movies.json`) and parse it as JSON. This is done using `fetch("./movies.json").then(response => response.json()).then(data => console.log(data))`.
  - **Fetching Local Text File**: A local text file (`test.txt`) is fetched to demonstrate retrieving and logging text content.
  - **Fetching External API Data**: The script also fetches data from an external API (`https://api.github.com/users/itsjordanmuller`) and updates the `h1` element with fetched data.

#### Key Concepts
- **Fetch Syntax**: The exercise emphasizes the syntax and structure of fetch requests, chaining `.then()` for handling asynchronous operations.
- **Response Methods**: It showcases the use of `.json()` and `.text()` methods for handling different types of responses.
- **DOM Manipulation**: The example with the GitHub API demonstrates basic DOM manipulation by updating HTML content with fetched data.

This exercise provides a fundamental understanding of how to make HTTP requests using the Fetch API in JavaScript, an essential skill for web development.

### [B. Random User Generator Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/02-random-user-project/random-user-generator)

![Random User Generator Project - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/02-random-user-project/02-random-user-site-1.png)

![Random User Generator Project - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/02-random-user-project/02-random-user-site-2.png)

![Random User Generator Project - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/02-random-user-project/02-random-user-site-3.png)

![Random User Generator Project - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/02-random-user-project/02-random-user-site-4.png)

This JavaScript project is a practical demonstration of using the Fetch API to dynamically retrieve and display user data from an external source. It incorporates modern web design with Tailwind CSS and interactive elements to create a user-friendly interface for generating random user profiles.

#### HTML Structure
- The `index.html` file establishes the webpage layout, including a title, a button to trigger user data generation, and a display area for the user's information.
- Tailwind CSS is used for styling, ensuring a responsive and modern design.

#### Fetching User Data
- The `script.js` file contains the main functionality of the project.
- A fetch request is made to the `randomuser.me` API, which returns random user data in JSON format.
- The response includes various user details such as name, email, phone, location, date of birth, gender, and profile picture.

#### Dynamic Content Update
- Upon receiving the data, the script dynamically updates the content of the webpage to display the fetched user information, including their name, email, phone, location, and age.
- The user's profile picture is also updated accordingly.
- Additionally, the background color of the webpage changes based on the gender of the fetched user: steel blue for male, rebeccapurple for female, and default gray for other genders.

#### Interactive Elements
- A button labeled "Generate User" triggers the fetch request and subsequent display update.
- A custom CSS spinner animation is included to enhance the interactive experience, providing visual feedback during data loading.

#### Spinner CSS
- `spinner.css` provides styling for the spinner animation, creating a visually appealing loading indicator.
- The animation is achieved using keyframes and is triggered when the user data is being fetched.

Overall, this project serves as an excellent example of combining HTML, CSS, and JavaScript to create a dynamic and interactive web application. It demonstrates key concepts such as API fetching, DOM manipulation, event handling, and modern web styling techniques.

### [C. Fetch Options](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/03-fetch-options)

![Fetch Options - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/03-fetch-options/03-fetch-options-console.png)

This exercise delves into the utilization of the Fetch API for making HTTP POST requests in JavaScript. It focuses on how to send data to a server and handle the response, demonstrating the use of various options in the fetch function.

#### HTML Structure
- The `index.html` file is simple, containing just a title and a script tag that links to the JavaScript file (`script.js`). This minimal setup is sufficient for running the JavaScript code that handles the fetch request.

#### JavaScript Functionality
- In `script.js`, the primary focus is on the `createPost` function. This function is designed to send a POST request to the specified URL (`https://jsonplaceholder.typicode.com/posts`), which is a placeholder service for testing and prototyping web applications.
- The function accepts an object with `title` and `body` properties as its argument. This object represents the data to be sent to the server.

#### Making a POST Request
- The fetch function is used to send a POST request. The key elements in this operation are:
  - **Method**: The method option is set to `"POST"`, indicating the type of HTTP request being made.
  - **Body**: The body of the request is a stringified JSON object containing the `title` and `body` of the post. This is done using `JSON.stringify`.
  - **Headers**: The headers option is used to set HTTP headers. In this example, `Content-Type` is set to `"application/json"` to inform the server that the request body is a JSON string. Additionally, custom headers like `hello: "World"` and `token: "abc123"` are included for demonstration purposes.

#### Handling the Response
- The response from the fetch request is processed with two `.then()` calls. The first one converts the response to JSON format (`res.json()`), and the second one logs the data to the console.
- This approach demonstrates how to handle and parse the JSON response from the server.

#### Practical Application
- By creating and executing the `createPost` function with a sample post object, this exercise showcases a practical implementation of making POST requests in a web application.
- It provides a foundational understanding of sending data to a server and managing responses, which is a critical aspect of web development, especially in creating interactive and data-driven applications.

This exercise is valuable for learners to grasp the concepts of HTTP requests, specifically POST requests, and how they can be effectively utilized in JavaScript using the Fetch API.

### [D. Typicode Todos Project](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/04-typicode-todos-mini-project/typicode-todos)

![Typicode Todos Project - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-site-1.png)

![Typicode Todos Project - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-site-2.png)

![Typicode Todos Project - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-site-3.png)

![Typicode Todos Project - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-site-4.png)

![Typicode Todos Project - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-site-5.png)

![Typicode Todos Project - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/04-typicode-todos-mini-project/04-typicode-todos-console.png)

This project demonstrates the creation of a simple Todo application using HTML, CSS, and JavaScript, integrating with the JSONPlaceholder API for handling Todos. It provides a practical example of CRUD (Create, Read, Update, Delete) operations in web development.

#### HTML Structure
- The `index.html` file sets up the basic structure of the Todo application, including a header, a form for adding new todos, and a div (`#todo-list`) where the todo items will be displayed.
- The application is styled using an external stylesheet (`style.css`) and Google Fonts.

#### JavaScript Functionality
- `script.js` contains the logic for the application. It interacts with the JSONPlaceholder API to perform various actions on the todos.

##### Key Functions:
1. **getTodos**: Fetches the initial list of todos from the API and displays them on the page. Each todo is added to the DOM with `addTodoToDOM`.
2. **addTodoToDOM**: Takes a todo object and appends it to the todo list in the DOM. It also applies the 'done' class to completed todos.
3. **createTodo**: Handles the creation of new todos. It sends a POST request to the API with the new todo data and adds the returned todo to the DOM.
4. **toggleCompleted**: Toggles the completion status of a todo item when clicked. It updates the todo's status on the API using `updateTodo`.
5. **updateTodo**: Sends a PUT request to the API to update the completion status of a todo.
6. **deleteTodo**: Handles deleting a todo. It sends a DELETE request to the API and removes the todo from the DOM.

#### Event Listeners
- The application sets up event listeners for loading todos on DOMContentLoaded, submitting the form to create new todos, clicking on a todo to mark it as complete, and double-clicking to delete a todo.

#### CSS Styling
- `style.css` provides the visual styling for the application. It uses the Poppins font from Google Fonts and applies basic styling for layout, input fields, buttons, and todo items.
- The `.done` class changes the background of completed todos to differentiate them visually.

This mini project is a great example of how to build a functional web application that interacts with an external API for data management. It covers essential web development concepts, including asynchronous JavaScript for API requests, DOM manipulation, and event handling, along with fundamental CSS styling.

### [E. Fetch Error Handling](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/05-fetch-error-handling)

![Fetch Error Handling - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/05-fetch-error-handling/05-fetch-error-handling-console.png)

This exercise explores error handling in JavaScript using the Fetch API, which is crucial for robust web applications. It demonstrates how to handle different types of errors that may occur during network requests, including HTTP errors (like 404 or 500 status codes) and network failures.

#### HTML Structure
- The `index.html` file includes a basic HTML setup with a title and a script tag linking to the `script.js` file. This structure is sufficient for running and testing the JavaScript code.

#### JavaScript Error Handling Mechanisms
- In `script.js`, various scenarios are simulated to demonstrate how to handle errors in fetch requests.
  
  ##### Handling HTTP Status Errors:
  - **404 (Not Found) and 500 (Server Error)**: The script makes a fetch request to `https://httpstat.us/500`, which simulates a server error. The response status is checked, and custom error messages are thrown based on the status code. For example, if the status is 404, it throws a "Not Found Error", and for a 500 status, it throws a "Server Error".
  - **General Error Handling**: An additional condition checks for any non-200 status codes and throws a "Request Failed" error. This is a more general approach to handling unsuccessful responses.
  - The script also includes commented-out examples for a successful request (`https://httpstat.us/200`) and for using `response.ok` to check if the response was successful.

  ##### Handling Network Errors:
  - **Network Failure**: A simulated network error is commented out in the script, where an invalid URL is used (`https:/hello123.net`). This type of error typically results in a `TypeError` with a message like "Failed to Fetch".
  - The `.catch()` block is designed to handle these errors by logging them to the console.

#### Error Logging
- In both scenarios (HTTP status errors and network errors), the `.catch()` block is used to catch and log errors. This is an essential part of error handling, as it allows developers to see what went wrong and possibly inform users about the issue.

#### Key Concepts
- **Error Propagation**: The use of `throw new Error()` in the `.then()` block for HTTP errors allows the error to be propagated to the `.catch()` block.
- **Network vs HTTP Errors**: The script differentiates between network failures and HTTP status errors, demonstrating how to handle each type separately.
- **Response Properties**: The script uses `response.status`, `response.ok`, and `response.statusText` to assess the nature of the response and decide on the error handling strategy.

This exercise is a practical demonstration of implementing error handling in web applications using the Fetch API. It emphasizes the importance of robust error handling mechanisms for creating reliable and user-friendly web applications.

![Random User Generator Project - Fetch Error Handling - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/05-fetch-error-handling/05-random-user-error-handling-console-1.png)

![Random User Generator Project - Fetch Error Handling - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/05-fetch-error-handling/05-random-user-error-handling-console-2.png)

This project enhances the Random User Generator application with error handling capabilities, making it more robust and user-friendly. It uses the Fetch API to retrieve user data from an external source and displays it on the webpage, implementing error handling to manage failed requests gracefully.

#### HTML Structure
- The `index.html` file sets up the webpage with a simple layout, including a button to generate random user data and a section to display the user information.
- The page uses Tailwind CSS for styling, ensuring a modern and responsive design.

#### JavaScript Functionality
- `script.js` contains the core logic of the application. It fetches user data from the `randomuser.me` API and handles both successful and failed requests.

##### Key Functions:
1. **fetchUser**: Initiates the fetch request to the API. It shows a loading spinner while the request is being processed.
2. **Error Handling**: If the fetch request fails (e.g., due to an incorrect URL or server issues), the function catches the error and displays a user-friendly message in the user display area.
3. **displayUser**: On a successful fetch, this function updates the webpage with the user's information, including name, email, phone, location, and age.
4. **Spinner Functions**: `showSpinner` and `hideSpinner` control the visibility of the loading spinner, providing visual feedback during data loading.

#### CSS Styling
- `spinner.css` provides custom styling for the spinner animation, creating an engaging visual effect during data loading.
- The spinner is designed to be a circular loader with keyframe animations for a smooth rotating effect.

#### Event Listeners
- An event listener is attached to the "Generate User" button to trigger the `fetchUser` function when clicked.
- The `fetchUser` function is also called on page load to display a user immediately.

#### Error Display
- In case of an error, the application displays a red-colored error message, ensuring the user is informed about any issues during data retrieval.

This project is an excellent example of implementing error handling in web applications. It demonstrates the importance of providing feedback to users during asynchronous operations and gracefully handling errors to improve the overall user experience. The combination of Fetch API, modern JavaScript practices, and CSS animations makes it a valuable learning tool for web development.

### [F. Async Await](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/06-async-await)

![Async Await - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/06-async-await/06-async-await-console-1.png)

![Async Await - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/06-async-await/06-async-await-console-2.png)

This project focuses on demonstrating the use of `async` and `await` in JavaScript, a syntactical feature that simplifies working with asynchronous operations like API requests or timer functions. The goal is to show how these keywords make code that deals with promises more readable and easier to write.

#### HTML Structure
- The `index.html` file sets up a basic webpage with a title and a script tag linking to `script.js`. This structure is all that's needed to run and showcase the JavaScript functionality.

#### JavaScript Exploration
- `script.js` contains multiple functions illustrating different ways to handle asynchronous code, comparing traditional promise-based approaches with `async` and `await`.

##### Key Elements:
1. **Promise Example**: The script begins with a simple promise that resolves with user data after a 1-second delay. This demonstrates the basic setup of a promise in JavaScript.

2. **Using Async and Await**:
   - **getPromise Function**: This function uses `async` and `await` to wait for the promise to resolve before logging the response. It's a basic demonstration of turning a promise-based operation into synchronous-looking code.
   - **getUsers Function**: A more complex example where an asynchronous fetch request is made to retrieve user data from an external API. `async` and `await` are used to wait for the response and then wait for the response to be converted to JSON.
   - **getPosts Function**: This is an arrow function version of using `async` and `await`, showcasing how these keywords can be integrated into different function syntaxes.

3. **Comparing with Traditional Promise Handling**:
   - The script includes commented-out versions of the `getUsers` function, showing the traditional `.then()` method for handling promises. This comparison highlights the syntactical simplicity and readability that `async` and `await` bring to asynchronous JavaScript code.

#### Practical Application
- The `async` and `await` keywords are used in real-world scenarios where handling asynchronous operations in a more synchronous, linear manner can greatly simplify code logic and improve readability.
- This approach is particularly useful in scenarios involving multiple asynchronous operations that need to be performed in sequence.

This exercise provides a clear and practical understanding of how `async` and `await` can be used to handle promises in JavaScript. It shows the evolution of asynchronous JavaScript, from callback functions and promises to the more modern and readable `async` and `await` syntax.

### [G. Try & Catch](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/07-try-catch)

![Try & Catch - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/07-try-catch/07-try-catch-console.png)

This project is focused on demonstrating the usage and importance of `try...catch` blocks in JavaScript, especially in conjunction with `async` and `await`. These structures are crucial for robust error handling in both synchronous and asynchronous code.

#### HTML Structure
- The `index.html` file provides a simple setup with a title and a script tag that includes the `script.js` file. This basic structure is adequate for running the JavaScript examples.

#### JavaScript Error Handling
- `script.js` explores different scenarios where `try...catch` blocks are used to gracefully handle errors that may occur during code execution.

##### Key Concepts:
1. **Basic Try...Catch Usage**:
   - Initially, there's a commented-out example demonstrating a `try...catch` block to catch a ReferenceError (attempting to log an undefined variable `x`).

2. **Error Handling in Functions**:
   - The `double` function is designed to demonstrate error handling within a function. It throws an error if the input is not a number.
   - The `try` block attempts to call `double` with a non-numeric argument, which triggers an error.
   - The `catch` block catches this error and logs a custom error message.

3. **Importance of Try...Catch**:
   - The examples illustrate the importance of `try...catch` in preventing the entire script from crashing when an error occurs. Instead, the error is caught, and the script can continue running.
   - This approach is particularly useful when dealing with operations that might fail due to reasons beyond the control of the programmer (e.g., invalid user input, failed network requests).

#### Practical Application
- `try...catch` is essential in JavaScript for handling exceptions gracefully. It allows developers to control the flow of error handling and provide more informative feedback to the user or logs.
- When used with `async` and `await`, `try...catch` becomes an elegant solution to handle promise rejections and other asynchronous errors without breaking the application flow.

This exercise provides a clear understanding of how to implement `try...catch` for effective error handling in JavaScript. It highlights the significance of managing errors properly to create reliable and user-friendly applications.

### [H. Async Await - Error Handling](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/08-async-await-error-handling)

![Async Await - Error Handling - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/08-async-await-error-handling/08-async-await-error-handling-console.png)

This exercise demonstrates the integration of error handling with `async` and `await` in JavaScript, which is essential for managing errors in asynchronous operations such as network requests. It showcases how `try...catch` blocks and promise rejections can be used to handle exceptions in a clean and effective manner.

#### HTML Structure
- The `index.html` file sets up a basic webpage with a heading and a div (`#output`) for displaying potential output. The structure is completed with a script tag linking to `script.js`.

#### JavaScript Error Handling Techniques
- `script.js` includes two asynchronous functions, `getUsers` and `getPosts`, both of which are designed to fetch data from external sources using the Fetch API.

##### Key Aspects:
1. **Using Try...Catch in Async Functions**:
   - The `getUsers` function demonstrates the use of a `try...catch` block within an `async` function. It attempts to fetch data from a URL that returns a 404 error (`https://httpstat.us/404`).
   - If the response is not successful (`!response.ok`), an error is thrown. This error is then caught and logged within the `catch` block.

2. **Handling Promise Rejections**:
   - The `getPosts` function fetches data from a URL simulating a server error (`https://httpstat.us/500`).
   - Instead of using a `try...catch` block within the function, this function relies on the `.catch()` method chained to the function call. This method catches and logs any errors that occur during the fetch operation.

3. **Error Propagation**:
   - In both functions, errors are either thrown (when the response is not ok) or caught (when the fetch operation fails). This demonstrates how `async` functions can propagate errors either internally (using `try...catch`) or externally (using `.catch()`).

#### Practical Application
- These examples provide a practical insight into handling asynchronous errors in JavaScript. Whether it's a network error, a server error, or any other kind of exception, proper error handling ensures that the application can respond gracefully.
- The use of `try...catch` within `async` functions and the `.catch()` method for promise rejections are both crucial patterns for robust JavaScript applications, especially those that rely on external data sources or APIs.

This exercise effectively illustrates how to manage errors in asynchronous JavaScript code, a vital skill for developing resilient and user-friendly web applications. It highlights the importance of anticipating and handling errors in a controlled manner to prevent crashes and provide better user experiences.

### [I. Async Await - Multiple Promises](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/10-fetch-and-async-await/09-multiple-promises-async-await)

![Async Await - Multiple Promises - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-multiple-promises-async-await-console-1.png)

![Async Await - Multiple Promises - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-multiple-promises-async-await-console-2.png)

![Async Await - Multiple Promises - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-multiple-promises-async-await-console-3.png)

![Async Await - Multiple Promises - Actor JSON Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-actors-json.png)

![Async Await - Multiple Promises - Directors JSON Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-directors-json.png)

![Async Await - Multiple Promises - Movies JSON Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/10-fetch-and-async-await/09-multiple-promises-async-await/09-movies-json.png)

This project demonstrates the use of `async/await` syntax in JavaScript to handle multiple promises efficiently. It contrasts different approaches for fetching and processing data from multiple sources, showcasing the advantages of using `async/await` over traditional promise handling methods.

#### HTML Structure
- The `index.html` file provides a basic setup with a title and a script tag that links to `script.js`. This structure is all that's needed for running the JavaScript code and displaying the results.

#### JavaScript Functionality
- `script.js` contains various functions to fetch data from three JSON files: `movies.json`, `actors.json`, and `directors.json`. Each function explores a different method of handling these asynchronous operations.

##### Key Techniques:
1. **Sequential Fetching with Async/Await**:
   - Initially, `getAllData` function uses `await` to fetch data from each JSON file sequentially. This method ensures that each request completes before the next begins, which can be useful when the order of operations matters.

2. **Simultaneous Fetching with Promise.all()**:
   - `getAllDataPromiseAll` and `getAllDataPromiseAll2` functions utilize `Promise.all()` to fetch all data simultaneously. This is a more efficient approach when the order of fetching does not matter, as it reduces the total time needed to fetch all data.
   - The first version of `Promise.all()` fetches the data and then processes the responses. The second version (`getAllDataPromiseAll2`) combines fetching and processing using `.then()` chained directly to each fetch call.

3. **Fetch API vs Custom XMLHttpRequest**:
   - The project initially uses a custom function (`getData`) that wraps an `XMLHttpRequest` in a promise. This approach is more verbose and less modern compared to the Fetch API.
   - Later functions (`getAllDataWithFetch`, `getAllDataPromiseAll`, and `getAllDataPromiseAll2`) switch to the Fetch API, which is more concise and easier to use with `async/await`.

#### Practical Application
- This exercise is practical for understanding how to handle multiple asynchronous operations in JavaScript. It demonstrates the efficiency gains from running asynchronous tasks in parallel using `Promise.all()`.
- It also highlights the versatility of `async/await` in making asynchronous code more readable and easier to manage, particularly in comparison to older techniques like XMLHttpRequests and nested `.then()` calls.

#### JSON Data Files
- The project uses three JSON files (`actors.json`, `directors.json`, `movies.json`) that contain mock data for actors, directors, and movies. These files serve as data sources for the fetch operations in the script.

This exercise provides a comprehensive look at managing multiple asynchronous requests in JavaScript, showing the power of `async/await` and `Promise.all()` for efficient and readable code. It's an excellent demonstration of modern JavaScript practices for handling complex data-fetching scenarios.