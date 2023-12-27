# JavaScript Sandbox

## [9. Asynchronous JavaScript](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript)

<a href="https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript"><img src="https://custom-icon-badges.demolab.com/badge/Asynchronous%20JavaScript-b2ffd1.svg?logo=bookmark&logoSource=feather&style=for-the-badge&logoColor=000000" width="100%"></a>

### [A. setTimeout & clearTimeout](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/01-settimeout-cleartimeout)

![setTimeout & clearTimeout - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/01-settimeout-cleartimeout/01-settimeout-cleartimeout-site-1.png)

![setTimeout & clearTimeout - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/01-settimeout-cleartimeout/01-settimeout-cleartimeout-site-2.png)

![setTimeout & clearTimeout - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/01-settimeout-cleartimeout/01-settimeout-cleartimeout-site-3.png)

![setTimeout & clearTimeout - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/01-settimeout-cleartimeout/01-settimeout-cleartimeout-console-1.png)

In this exercise, I explored the use of JavaScript's `setTimeout` and `clearTimeout` functions, learning how to manage timed tasks and cancel them if needed. The HTML setup includes a simple button to interact with the JavaScript code.

#### `setTimeout` Function
- The `setTimeout` function is used to execute a function or a block of code after a specified delay. In this example, two `setTimeout` calls were initially commented out: one using an anonymous function and another calling the `changeText` function after a 2000-millisecond delay.
- The `changeText` function, when invoked, changes the text content of the `<h1>` element to "Hello from callback". This function is later set to execute after 3000 milliseconds using `setTimeout`, and the timer ID is stored in the `timerId` constant.

#### `clearTimeout` Function
- The `clearTimeout` function is demonstrated to cancel a scheduled timeout set with `setTimeout`. This is tied to a button click event in the HTML. When the button with id "cancel" is clicked, the `clearTimeout` function is called with `timerId`, effectively cancelling the scheduled `changeText` function if it hasn't executed yet.

### [B. setInterval & clearInterval](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/02-setinterval-clearinterval)

![setInterval & clearInterval - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/02-setinterval-clearinterval/02-setinterval-clearinterval-site-1.png)

![setInterval & clearInterval - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/02-setinterval-clearinterval/02-setinterval-clearinterval-site-2.png)

![setInterval & clearInterval - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/02-setinterval-clearinterval/02-setinterval-clearinterval-site-3.png)

![setInterval & clearInterval - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/02-setinterval-clearinterval/02-setinterval-clearinterval-site-4.png)

![setInterval & clearInterval - Site Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/02-setinterval-clearinterval/02-setinterval-clearinterval-site-5.png)

This exercise focuses on using JavaScript's `setInterval` and `clearInterval` functions to create and control repeating actions on a web page. The HTML structure includes two buttons for starting and stopping a color change effect on the webpage's body.

#### `setInterval` Function
- `setInterval` is used to repeatedly call a function or execute a code snippet, with a fixed time delay between each call. This exercise initially includes a commented-out example that prints the current timestamp every second.
- The `startChange` function, when activated, sets up an interval using `setInterval`. It calls `changeRandomColor` every 1000 milliseconds (1 second). This interval is only set up if it hasn't been already, as checked by the `intervalID` variable.
- `changeRandomColor` generates a random color and applies it to the body's background. It uses `Math.random` to create a random hex color.

#### `clearInterval` Function
- `clearInterval` is demonstrated to stop the ongoing interval set by `setInterval`. The `stopChange` function, when invoked, uses `clearInterval` with `intervalID` to stop the color change.

#### Event Listeners
- Two event listeners are added to the "Start Color Change" and "Stop Color Change" buttons. Clicking these buttons triggers `startChange` and `stopChange` respectively, demonstrating real-time control over the interval.

This exercise is a practical demonstration of how to create and control timed, repeating actions in JavaScript.

### [C. Callbacks](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/03-callbacks)

![Callbacks - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/03-callbacks/03-callbacks-site-1.png)

![Callbacks - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/03-callbacks/03-callbacks-site-2.png)

![Callbacks - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/03-callbacks/03-callbacks-site-3.png)

![Callbacks - Site Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/03-callbacks/03-callbacks-site-4.png)

In this exercise, I explored the concept of callbacks in JavaScript, a fundamental aspect of asynchronous programming. The exercise includes an HTML structure with a button and a div element for displaying posts, accompanied by CSS for styling.

#### Callback Function for Button
- The first part of the JavaScript code demonstrates a simple callback function. When the button is clicked, the `toggle` function is called as a callback. This function toggles the class "danger" on the button, changing its background color as defined in the CSS.
- The `addEventListener` method is used to attach the `toggle` function to the button's click event, showcasing how callbacks are used in event handling.

#### Asynchronous Callbacks with `setTimeout`
- The next part of the script demonstrates asynchronous callbacks using `setTimeout`. The `createPost` function simulates a time-consuming task (like fetching data from a server) using `setTimeout`. After a delay, it adds a new post to the `posts` array and then calls a callback function.
- The callback function here is `getPosts`, which also uses `setTimeout` to mimic a delay. It renders all posts in the `posts` array to the `#posts` div in the HTML. This function is passed as a callback to `createPost`, ensuring that posts are only rendered after the new post is added.

#### Practical Application
- This exercise illustrates how callbacks can manage asynchronous tasks such as API calls, database operations, or any operations that require waiting for a task to complete before proceeding.
- The usage of `setTimeout` to mimic network requests or database operations is a common practice in learning and prototyping JavaScript applications.

### [D. AJAX & XHR](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/04-ajax-xhr)

![AJAX & XHR - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/04-ajax-xhr/04-ajax-xhr-site-1.png)

![AJAX & XHR - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/04-ajax-xhr/04-ajax-xhr-site-2.png)

![AJAX & XHR - Movies JSON Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/04-ajax-xhr/04-ajax-xhr-json.png)

This exercise delves into the basics of AJAX (Asynchronous JavaScript and XML) using the XMLHttpRequest (XHR) object in JavaScript. The focus is on fetching data from a remote source and dynamically updating the web page content without reloading the page.

#### XMLHttpRequest (XHR) Object
- An instance of the `XMLHttpRequest` object is created to handle the data request. This object is a key component in AJAX, allowing for asynchronous communication between client and server.
- The `xhr.open("GET", "https:api.github.com/users/itsjordanmuller/repos")` line initializes the request, specifying the HTTP method ('GET') and the URL of the data source. In this case, it is set to retrieve data from a GitHub API endpoint.

#### Handling Response States
- The `onreadystatechange` event listener is used to handle changes in the state of the request. The XHR object has different states (from 0 to 4), with 4 indicating that the request is completed and the response is ready.
- Inside the event listener, a check is made to ensure that the `readyState` is 4 (request completed) and the `status` is 200 (successful HTTP response). If these conditions are met, the response is processed.

#### Processing and Displaying Data
- The received data is parsed from JSON format using `JSON.parse(this.responseText)`. This step converts the JSON response into a JavaScript object or array.
- The parsed data (an array of repository information from GitHub) is then iteratively processed. For each repository, a new list item (`li`) is created, filled with the repository's name and description, and appended to the unordered list (`ul`) with the ID `results` in the HTML.

#### Styling
- CSS is used to style the web page, applying fonts from Google Fonts and basic styling for elements like the body, headings, buttons, and the list items.

### [E. Joke Generator Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/05-joke-generator-challenge/chuck-joke-generator-start)

![Joke Generator Challenge - Site Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/05-joke-generator-challenge/05-joke-generator-site-1.png)

![Joke Generator Challenge - Site Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/05-joke-generator-challenge/05-joke-generator-site-2.png)

![Joke Generator Challenge - Site Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/05-joke-generator-challenge/05-joke-generator-site-3.png)

This exercise showcases how fetch data from an API and update the web page dynamically in JavaScript. The application is a simple Chuck Norris joke generator.

#### Web Page Structure and Styling
- The HTML structure includes a `div` container with a heading, a `div` for displaying the joke, and a button to trigger fetching a new joke.
- CSS is used for styling, applying a modern, clean look with a color scheme, shadows, and typography using the 'Roboto' font from Google Fonts.

#### Fetching Jokes using AJAX
- The core functionality is built in the `script.js` file. It defines the `getJoke` function, which makes an AJAX request to the Chuck Norris Jokes API.
- An `XMLHttpRequest` object is created and configured with `xhr.open("GET", "https://api.chucknorris.io/jokes/random")`, specifying a GET request to the API's endpoint.

#### Handling the Response
- The `onreadystatechange` event listener checks if the request is completed (`readyState === 4`) and successful (`status === 200`). Upon success, it parses the JSON response and updates the `jokeText` element's inner text with the new joke.
- If the request fails (i.e., not reaching readyState 4 and status 200), it displays an error message in the joke text area.

#### Interactivity
- The `jokeBtn` button is set up with an event listener that calls `getJoke` upon a click, thus enabling the user to fetch a new joke every time the button is clicked.
- The `getJoke` function is also called once when the script loads, ensuring that a joke is displayed as soon as the page loads.

This exercise effectively demonstrates the use of AJAX for real-time data fetching and dynamic content update in web applications, a key technique for creating interactive and responsive web experiences.

### [F. Callback Hell](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/06-callback-hell)

![Callback Hell - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/06-callback-hell/06-callback-hell-console-1.png)

![Callback Hell - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/06-callback-hell/06-callback-hell-console-2.png)

![Callback Hell - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/06-callback-hell/06-callback-hell-console-3.png)

![Callback Hell - Console Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/06-callback-hell/06-callback-hell-console-4.png)

![Callback Hell - Console Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/06-callback-hell/06-callback-hell-console-5.png)

This exercise introduces the concept of "Callback Hell" in JavaScript, a common issue when dealing with multiple nested callbacks, particularly in asynchronous operations like AJAX requests.

#### Callback Hell Demonstration
- The JavaScript code in `script.js` defines a function `getData` that makes an AJAX request to a specified endpoint and executes a callback function when the data is successfully retrieved.
- The AJAX requests are intentionally delayed by a random time (between 1 to 4 seconds) using `setTimeout` to simulate network latency and asynchronous behavior.
- The concept of "Callback Hell" is demonstrated by nesting successive `getData` calls within each other's callbacks. The data from `movies.json`, `actors.json`, and `directors.json` are requested in sequence, with each subsequent request initiated only after the previous one completes.
- This nesting results in deeply nested code structure, which is commonly referred to as "Callback Hell" or "The Pyramid of Doom" due to its triangular shape and the difficulty in reading and maintaining such code.

#### Challenges of Callback Hell
- This pattern makes the code hard to read and understand, especially as the number of nested callbacks increases.
- Error handling becomes more complex, and the code is prone to issues like callback nesting and scope creep.
- Debugging and maintenance of such code can be challenging.

#### Alternative Approaches
- In modern JavaScript development, alternatives like Promises and async/await are often used to avoid callback hell. These features provide cleaner and more readable syntax for handling asynchronous operations.

This exercise effectively demonstrates the problems associated with deep nesting of callbacks, highlighting the need for better patterns and practices in managing asynchronous JavaScript code.

### [G. Promises](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/07-promises)

![Promises - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/07-promises/07-promises-console-1.png)

![Promises - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/07-promises/07-promises-console-2.png)

![Promises - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/07-promises/07-promises-console-3.png)

![Promises - Console Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/07-promises/07-promises-console-4.png)

This exercise provides a hands-on experience with JavaScript Promises, a powerful feature for handling asynchronous operations. Promises offer a more manageable and readable approach to asynchronous code compared to traditional callback patterns.

#### Introduction to Promises
- A `Promise` in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more synchronous fashion.
- The exercise starts with creating a simple `Promise` that resolves after a 1-second delay, simulating an asynchronous task. This is achieved using `setTimeout`.

#### Consuming Promises
- The first promise (`promise`) demonstrates the basic structure but is commented out for the focus on a more complex example.
- The `getUser` promise simulates fetching user data asynchronously. It randomly decides to either resolve (with user data) or reject (with an error message) after a 1-second delay.
- The `then`, `catch`, and `finally` methods are chained to `getUser`. The `then` method is called if the promise is resolved, displaying the user data. The `catch` method handles any errors, and `finally` executes code after the promise is either resolved or rejected, indicating the completion of the promise's lifecycle.

#### Asynchronous Nature of Promises
- The `console.log("Hello from global scope!");` line demonstrates the non-blocking nature of JavaScript. This line runs immediately, not waiting for the promises to resolve or reject, highlighting the asynchronous execution model of JavaScript.

#### Benefits of Using Promises
- Promises provide a cleaner and more robust way of handling asynchronous operations compared to nested callbacks. They help in avoiding callback hell.
- They make error handling more straightforward and readable with the `catch` method.
- Promises support chaining, allowing for a sequence of asynchronous operations to be performed in a more readable and maintainable way.

This exercise effectively introduces the basics of Promises, a key concept in modern JavaScript for managing asynchronous operations, making code more readable, maintainable, and less prone to errors.

### [H. Callback to Promise](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/08-callback-to-promise)

![Callback to Promise - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/08-callback-to-promise/08-callback-to-promise-console-1.png)

![Callback to Promise - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/08-callback-to-promise/08-callback-to-promise-console-2.png)

This exercise demonstrates refactoring asynchronous JavaScript code from using callbacks to Promises, a modern approach that enhances code readability and error handling.

#### Refactoring to Use Promises
- The `createPost` function is refactored to return a `Promise`. The promise resolves if a post is successfully added (simulated with a `setTimeout` and a conditional check) and rejects if there's an error.
- The `getPosts` function remains the same, but its invocation changes. It's now called as a part of the promise chain, being executed after the promise from `createPost` resolves.
- Error handling is improved by using a `catch` method, which calls the `showError` function to display an error message. This structure makes the error handling more centralized and straightforward.

#### Promise Chain
- The creation of a new post (`{ title: "Post Three", body: "This is post" }`) is followed by `.then(getPosts)`. This ensures that `getPosts` is called only after the post is successfully added.
- `.catch(showError)` handles any errors that might occur during the post creation process. This chaining approach is more readable and maintainable compared to nested callbacks.

#### Styling and HTML Structure
- The HTML structure includes a `div` for displaying posts and a heading.
- CSS styling is applied to give a clean and modern look to the posts display, using the 'Poppins' font and basic styling elements like background color and padding.

This exercise effectively shows the transition from a callback-based asynchronous operation to a promise-based approach, highlighting the benefits of Promises in terms of code clarity, error handling, and maintainability in JavaScript applications.

### [I. Promise Chaining](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/09-promise-chaining)

![Promise Chaining - Console Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/09-promise-chaining/09-promise-chaining-console.png)

This exercise provides an excellent demonstration of promise chaining in JavaScript, a technique that allows for sequential execution of asynchronous tasks in a clear and readable manner.

#### Understanding Promise Chaining
- Promise chaining is a method of executing a sequence of asynchronous tasks one after the other. Each `.then()` in the chain waits for the previous promise to be resolved or rejected before executing.

#### The Promise Setup
- The exercise begins with the creation of a new `Promise`. This promise is set up to either resolve with a user object (`{ name: "John", age: 30 }`) or reject with an error message after a delay of 1 second. In this case, the promise is configured to always reject due to `let error = true;`.

#### Chaining `.then()` and `.catch()`
- The first `.then()` block is designed to run if the promise resolves. It logs the user object and returns the user's name. However, due to the promise's configuration, this block will not execute in this scenario.
- The second `.then()` receives the name returned from the first `.then()` and logs it. It then returns the length of the name.
- The third `.then()` is set to receive the name length and log it.
- The `.catch()` block catches any errors that occur in the promise chain. In this case, since the promise is set to reject, this block will execute, logging the error message.
- Interestingly, after the `.catch()` block, another `.then()` is chained. This is a key feature of promise chaining, where a `.then()` can follow a `.catch()`. This block will execute regardless of whether the promise was resolved or rejected. Here, it logs a message along with a value (123 if the `.catch()` block executed, undefined otherwise).

#### Error Handling and Flow Control
- The exercise effectively illustrates how promise chaining can be used for both successful execution flows and error handling.
- The `.catch()` block in the chain ensures that any errors are caught and handled, preventing the entire chain from breaking on failure.
- The final `.then()` demonstrates that the chain can continue even after an error has been caught and handled.

This example of promise chaining is a clear illustration of managing asynchronous operations in JavaScript. It shows how to handle success and error cases cleanly and how promises can be used to create a sequence of asynchronous tasks with straightforward error handling and flow control.

### [J. Promises vs Callback Hell](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/10-promises-vs-callback-hell)

![Promises vs Callback Hell - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/10-promises-vs-callback-hell/10-promises-vs-callback-hell-console-1.png)

![Promises vs Callback Hell - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/10-promises-vs-callback-hell/10-promises-vs-callback-hell-console-2.png)

![Promises vs Callback Hell - Console Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/10-promises-vs-callback-hell/10-promises-vs-callback-hell-console-3.png)

![Promises vs Callback Hell - Console Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/10-promises-vs-callback-hell/10-promises-vs-callback-hell-console-4.png)

![Promises vs Callback Hell - Console Image 5](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/10-promises-vs-callback-hell/10-promises-vs-callback-hell-console-5.png)

This exercise demonstrates the advantage of using Promises over traditional callback-based approaches, often referred to as "Callback Hell," particularly in the context of making multiple dependent asynchronous requests.

#### Refactoring from Callbacks to Promises
- In a typical "Callback Hell" scenario, multiple nested callbacks would be used to handle the sequence of AJAX requests, leading to deeply nested and potentially confusing code.
- This example, however, employs Promises to handle the same sequence of operations, resulting in more readable and maintainable code.

#### The `getData` Function
- `getData` is a function that returns a Promise. It uses the `XMLHttpRequest` (XHR) object to perform an AJAX request to the given endpoint.
- The function encapsulates the asynchronous nature of the XHR request within a Promise. The Promise is resolved when the data is successfully retrieved and parsed as JSON, or rejected if an error occurs (e.g., if the status code is not 200).

#### Promise Chaining
- The script fetches data from three different JSON files (`movies.json`, `actors.json`, `directors.json`) in sequence. 
- Each `.then()` handles the resolution of the previous Promise, logs the retrieved data, and initiates the next data request by returning another Promise from `getData`.
- This linear chain of `.then()` calls provides a clear, sequential flow of asynchronous operations, avoiding the pitfalls of nested callbacks.

#### Error Handling
- The `.catch()` at the end of the chain catches any errors that might occur during any of the asynchronous operations. This centralized error handling is a significant advantage over nested callbacks, where each callback would need its error handling logic.

#### Advantages of This Approach
- **Readability and Maintenance**: The code is much more readable and easier to follow than nested callbacks. Each step in the sequence is clearly laid out, and the logic is not buried in multiple layers of nested functions.
- **Error Handling**: Errors are easier to manage with Promises. A single `.catch()` can handle any error that occurs at any point in the promise chain.
- **Scalability**: Adding more asynchronous steps to the sequence is as simple as adding another `.then()`, without increasing the complexity of the code.

In summary, this exercise effectively illustrates the benefits of using Promises for handling sequences of asynchronous operations, offering a cleaner, more manageable alternative to callback-based approaches.

### [K. Promise All](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/09-asynchronous-javascript/11-promise-all)

![Promise All - Console Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/11-promise-all/11-promise-all-console-1.png)

![Promise All - Console Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/09-asynchronous-javascript/11-promise-all/11-promise-all-console-2.png)

This exercise demonstrates the use of `Promise.all()` in JavaScript, a method particularly useful for handling multiple independent promises simultaneously. The script makes several asynchronous data requests and waits for all of them to be resolved or rejected.

#### The `getData` Function
- The `getData` function remains the same as in previous examples. It creates a promise that wraps an XMLHttpRequest to fetch data from a given endpoint and resolves or rejects based on the success of the request.

#### Multiple Promises
- Separate promises are created for fetching data from `movies.json`, `actors.json`, and `directors.json`. Additionally, a `dummyPromise` is created, which immediately resolves with the string "Hello world!".
- These promises are independent of each other, meaning their outcomes are not sequentially dependent.

#### Using `Promise.all()`
- `Promise.all()` takes an array of promises and returns a new promise that resolves when all of the input promises have resolved, or rejects if any of the promises are rejected.
- In this script, `Promise.all()` is used to handle the array of promises: `[moviesPromise, actorsPromise, directorsPromise, dummyPromise]`.
- When `Promise.all()` resolves, it returns an array of results corresponding to the input promise array. This is handled in the `.then()` method, where `data` contains the resolved values of all promises in the same order as they were passed to `Promise.all()`.
- If any of the promises in the array are rejected, `Promise.all()` will immediately reject, and the error will be caught and logged in the `.catch()` method.

#### Benefits of `Promise.all()`
- **Efficiency**: It allows for concurrent execution of multiple promises, which can be more efficient than waiting for each promise to resolve sequentially.
- **Simplicity**: It simplifies the handling of multiple promises, providing a single point to handle success or failure of all promises.
- **Predictability**: The order of results in the resolved array corresponds to the order of the promises passed in, making it predictable and easy to associate results with their respective promises.

This exercise effectively demonstrates how `Promise.all()` can be used to manage multiple asynchronous operations, making it a valuable tool for scenarios where multiple independent asynchronous tasks need to be coordinated.