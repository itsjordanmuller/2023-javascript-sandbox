# JavaScript Sandbox

## [6. Document Object Model](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model)

<a href="https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model"><img src="https://custom-icon-badges.demolab.com/badge/Document%20Object%20Model-d8ffb2.svg?logo=bookmark&logoSource=feather&style=for-the-badge&logoColor=000000" width="100%"></a>

### [A. DOM (Document Object Model) Introduction](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/01-dom-intro)

![DOM (Document Object Model) Introduction - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/01-dom-intro/01-dom-intro-console.png)

![DOM (Document Object Model) Introduction - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/01-dom-intro/01-dom-intro-site.png)

In this introductory section, I explored the basics of the Document Object Model (DOM) in JavaScript, which is a crucial concept for web development. The DOM allows JavaScript to interact with and manipulate the HTML and CSS of a webpage, enabling dynamic content and user interactivity.

#### Understanding the `document` Object
The exercise began with understanding the `document` object, a central part of the DOM that represents the entire HTML document. By logging `window.document` and using `console.dir(document)`, I examined the properties and methods available on the `document` object. This helped me understand how JavaScript can access and manipulate different parts of a web page.

#### Targeting Specific Elements
I then moved on to targeting specific portions of the document, such as `document.body`, to access and manipulate the body of the HTML document. The `innerHTML` and `innerText` properties were used to check and manipulate the content of these elements. Additionally, I explored accessing links through `document.links`.

#### Manipulating HTML Content
The exercise also covered how to replace or insert HTML content. I learned that `document.body.innerHTML` can change the entire HTML content of the body element, and `document.write` can insert new content into the document.

#### Element Selection Techniques
Lastly, I practiced selecting HTML elements using their ID with `document.getElementById` and the more versatile `document.querySelector`. These methods are fundamental for targeting and manipulating specific elements on a page.

This introduction to the DOM was a fundamental step in understanding how JavaScript interacts with web pages, forming the basis for dynamic and interactive web development.

<details>
<summary>View HTML Code - index.html - A - Document Object Model Introduction</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Intro</title>
  </head>
  <body>
    <div id="main">
      <h1>DOM Intro</h1>
      <a href="https://google.com">Google</a>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - A - Document Object Model Introduction</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// We Can Log Document from the Window
console.log(window.document);
// Use dir to check Properties & Methods of the Document
// No Need to Use window, since it's the top level object
console.dir(document);

// Different Portions of the Document Can Be Targeted
console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.body.innerText);
console.log(document.links);

// Replace Everything in the innerHTMl with The Following
// document.body.innerHTML = "<h1>Hello World!</h1>";

// Inserts as the next element in the Document
// document.write("Hello from JS!");

// Selecting Using a Specific ID
console.log(document.getElementById("main"));
const main = document.getElementById("main");
// main.innerHTML = "<h1>Hello from main!</h1>";

// Using a Query Selector
document.querySelector("#main h1").innerText = "Hello DOM!";
```
</details>

### [B. Examining Document Object Properties](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/02-examining-document-object-properties)

![Examining Document Object Properties - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/02-examining-document-object-properties/02-examining-document-object-properties-site.png)

![Examining Document Object Properties - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/02-examining-document-object-properties/02-examining-document-object-properties-console.png)

In this exercise, I built a simple shopping list application using HTML, CSS, and JavaScript, focusing on DOM manipulation and basic styling.

#### HTML Structure (`index.html`)
The HTML file establishes the structure of the shopping list application:
- A header displaying the title 'Shopping List'.
- A form for adding new items, including an input field and an 'Add Item' button.
- A filter input to search through the list items.
- A pre-populated list of items (Apples, Orange Juice, Oreos, Milk) each with a delete button.
- A 'Clear All' button to remove all items from the list.
- External links to Font Awesome for icons and a separate CSS stylesheet.

#### JavaScript Functionality (`script.js`)
The JavaScript file explores different methods to interact with the DOM:
- Accessing and manipulating various document properties like `documentElement`, `head`, `body`, `doctype`, `domain`, `URL`, `characterSet`, `contentType`.
- Experimenting with forms, links, and images within the document.
- Converting HTML collections to arrays to use array methods like `forEach`.

#### CSS Styling (`style.css`)
The CSS file provides styling to enhance the visual appeal:
- Basic resets and global styles using the Poppins font.
- Styling for the form, input fields, buttons, and the list of items.
- Responsive design adjustments for smaller screens.

Overall, this exercise demonstrates fundamental web development skills, including HTML structure creation, applying CSS for styling, and using JavaScript for basic DOM interactions and manipulations.

<details>
<summary>View HTML Code - index.html - B - Examining Document Object Properties</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - B - Examining Document Object Properties</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let output;

// Deprecated Method
// output = document.all;
// output = document.all[10];
// output = document.all.length;

// Everything In the HTML
output = document.documentElement;

// Just Head
output = document.head;
// Just Body
output = document.body;

// Children in Collections
output = document.head.children;
output = document.body.children;

// Various Misc. Methods
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Forms
// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;

// Set an ID on an Element
// document.forms[0].id = "new-id";

// Links
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = "www.google.com";
// output = document.links[0].id = "google-link";
// output = document.links[0].className = "google-class";
// output = document.links[0].classList;
// output = document.links[0].classList.add("google-class");
// output = document.links[0].classList.remove("google-class");

// Images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Can't Use for Each without Creating an Array
const forms = Array.from(document.forms);
// document.forms.forEach((form) => console.log(form));
forms.forEach((form) => console.log(form));

console.log(output);
```
</details>

<details>
<summary>View CSS Code - style.css - B - Examining Document Object Properties</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [C. DOM Selectors for Single Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/03-dom-selectors-single-elements)

![DOM Selectors for Single Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/03-dom-selectors-single-elements/03-dom-selectors-single-elements-site.png)

![DOM Selectors for Single Elements - Console Output Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/03-dom-selectors-single-elements/03-dom-selectors-single-elements-console-1.png)

![DOM Selectors for Single Elements - Console Output Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/03-dom-selectors-single-elements/03-dom-selectors-single-elements-console-2.png)

In this exercise, I focused on understanding and using JavaScript DOM selectors to manipulate single elements within the document.

#### Key JavaScript Concepts Explored (`script.js`)

1. **Selecting Elements by ID**
   - Used `document.getElementById()` to select elements by their ID.
   - Accessed and modified properties like `id`, `title`, `className`, and used `setAttribute` to update class attributes.

2. **Manipulating Content and Styles**
   - Changed the content of the title element (`<h1>`) using `textContent`, `innerText`, and `innerHTML`.
   - Applied inline CSS styling to the title element, adjusting properties like `color`, `backgroundColor`, `padding`, and `borderRadius`.

3. **Using Query Selector**
   - Utilized `document.querySelector()` to select the first occurrence of specified elements, IDs, classes, and attributes.
   - Selected and modified the inner text and style of the second list item and the first item within a list.

#### JavaScript Code Implementation
The exercise was practical in demonstrating how to select and manipulate single elements using different methods. Key activities included:
- Changing the title text and style dynamically.
- Selecting elements in various ways (e.g., by tag name, ID, class, nth-child).
- Experimenting with the flexibility of `querySelector` in selecting specific elements and modifying their properties.

<details>
<summary>View HTML Code - index.html - C - DOM Selectors for Single Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1 id="app-title">Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - C - DOM Selectors for Single Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Get Element by ID
// document.getElementById();

// console.log(document.getElementById("app-title"));
// console.log(document.getElementById("app-title").id);
// console.log(document.getElementById("app-title").className);
// console.log(document.getElementById("app-title").getAttribute("id"));

// Set Attributes
// document.getElementById("app-title").id = "new-id";
document.getElementById("app-title").title = "Shopping List";
document.getElementById("app-title").setAttribute("class", "title");

// Set a Variable to Avoid Repeating Code
const title = document.getElementById("app-title");

// Get/Change Content
console.log(title);
title.textContent = "Hello World!";
title.innerText = "Hello Again!";
title.innerHTML = "<strong>Shopping List</strong>";

// Change Styles
title.style.color = "yellow";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// Query Selector
// document.querySelector()

// First Element
console.log(document.querySelector("h1"));
// First Element with ID app-title
console.log(document.querySelector("#app-title"));
// First Element with Class of container
console.log(document.querySelector(".container"));
// First Input Element with Text Set as Type Attribute
console.log(document.querySelector("input[type='text']"));
// 2nd List Item Element
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

// Use these Methods on Other Elements
const list = document.querySelector("ul");
console.log(list);
// Get's the First li inside of Our Current Location, ul
const firstItem = list.querySelector("li");
firstItem.style.color = "blue";
```
</details>

<details>
<summary>View CSS Code - style.css - C - DOM Selectors for Single Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [D. DOM Selectors for Multiple Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/04-dom-selectors-multiple-elements)

![DOM Selectors for Multiple Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/04-dom-selectors-multiple-elements/04-dom-selectors-multiple-elements-site.png)

![DOM Selectors for Multiple Elements - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/04-dom-selectors-multiple-elements/04-dom-selectors-multiple-elements-console.png)

In this JavaScript exercise, the focus was on using different methods to select and manipulate multiple elements within the DOM.

#### Key Concepts in JavaScript (`script.js`)

1. **Selecting Multiple Elements Using `querySelectorAll`**
   - `document.querySelectorAll()` returns a NodeList, which can be directly used with methods like `forEach`.
   - This method was used to select all elements with the class `.item` and apply styles and content changes.

2. **Manipulating NodeList Items**
   - Applied styles to each item in the NodeList.
   - Demonstrated how to remove an element and change HTML content within selected elements.

3. **Selecting Elements by Class Name with `getElementsByClassName`**
   - `document.getElementsByClassName()` returns an HTMLCollection, which requires conversion to an array to use array methods.
   - Showcased how to convert this collection into an array and then iterate over it.

4. **Selecting Elements by Tag Name**
   - `document.getElementsByTagName()` was used to select all `<li>` elements, returning an HTMLCollection.
   - Accessed and modified content of specific list items.

#### Implementing the Code
The exercise provided practical insights into:
- The differences between NodeList and HTMLCollection, and how to interact with each.
- The versatility of `querySelectorAll` for selecting multiple elements with a specific pattern.
- The importance of converting HTMLCollections to arrays for broader functionality.

#### Practical Application
This exercise is crucial for understanding DOM manipulation in web development, particularly when dealing with multiple elements. It teaches how to select, access, and modify multiple elements efficiently, which is a fundamental skill in creating dynamic and interactive web pages.

<details>
<summary>View HTML Code - index.html - D - DOM Selectors for Multiple Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1 id="app-title">Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li class="item">
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li class="item">
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li class="item">
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li class="item">
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - D - DOM Selectors for Multiple Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Query Selector for All Elements
// document.querySelectorAll()

// Returns a NodeList of Items
const listItems = document.querySelectorAll(".item");
console.log(listItems);
console.log(listItems[1]);
console.log(listItems[1].innerText);

// Use a forEach to Loop Through NodeList to Style Each Item
// listItems.forEach((item, index) => {
//   item.style.color = "red";

//   if (index === 1) {
//     item.remove();
//   }
//   if (index === 0) {
//     item.innerHTML = `
//         Pomegranates
//         <button class="remove-item btn-link text-red">
//         <i class="fa-solid fa-xmark"></i>
//         </button>
//     `;
//   }
// });

// Get Elements by Class Name
// Returns an HTMLCollection instead of a NodeList
// No Need for . for class
const listItems2 = document.getElementsByClassName("item");
console.log(listItems2);

// Must Convert to An Array Before Using forEach
const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

// Get Elements by Tag Name
// Returns HTML Collection
const listItems3 = document.getElementsByTagName("li");
console.log(listItems3[0].innerText);
```
</details>

<details>
<summary>View CSS Code - style.css - D - DOM Selectors for Multiple Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [E. Traversing the DOM - Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/05-traversing-the-dom-elements)

![Traversing the DOM - Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/05-traversing-the-dom-elements/05-traversing-the-dom-elements-site.png)

![Traversing the DOM - Elements - Console Output Image 1](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/05-traversing-the-dom-elements/05-traversing-the-dom-elements-console-1.png)

![Traversing the DOM - Elements - Console Output Image 2](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/05-traversing-the-dom-elements/05-traversing-the-dom-elements-console-2.png)

![Traversing the DOM - Elements - Console Output Image 3](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/05-traversing-the-dom-elements/05-traversing-the-dom-elements-console-3.png)

![Traversing the DOM - Elements - Console Output Image 4](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/05-traversing-the-dom-elements/05-traversing-the-dom-elements-console-4.png)

This exercise focused on learning how to traverse the Document Object Model (DOM) in JavaScript, which is a crucial skill for dynamically manipulating web pages.

#### Key JavaScript Concepts and Implementations (`script.js`)

1. **Accessing Child Elements**
   - Used `parent.children` to access direct child elements of a parent node.
   - Modified the text and style of specific children using indices, like `parent.children[1].innerText`.

2. **Manipulating First and Last Child Elements**
   - `parent.firstElementChild` and `parent.lastElementChild` were used to easily access and modify the first and last child elements of a parent.

3. **Parent Element Selection**
   - Demonstrated how to select a parent element from a child using `child.parentElement`.
   - Applied styling to the parent element by accessing it through its child.

4. **Sibling Element Navigation**
   - Navigated to sibling elements using `nextElementSibling` and `previousElementSibling`.
   - Adjusted styles of sibling elements to visually demonstrate the traversal.

#### Practical Application
This exercise is essential for understanding DOM manipulation in web development, particularly when dealing with nested elements. It teaches how to:
- Navigate the DOM tree efficiently using parent and child relationships.
- Select and manipulate elements relative to a known node (sibling, parent, child).
- Apply dynamic changes to a webpage’s structure and appearance using JavaScript.

#### Understanding the DOM Hierarchy
DOM traversal is about understanding the hierarchical structure of HTML documents and manipulating elements based on their relationships. This exercise lays the foundation for creating interactive and dynamic content in web applications, where understanding and manipulating the structure of the DOM is crucial.

<details>
<summary>View HTML Code - index.html - D - Traversing the DOM - Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Traversing The DOM</title>
  </head>
  <body>
    <div class="container">
      <h1>Traversing The DOM</h1>
      <div class="parent">
        <!-- Children -->
        <div class="child">Child 1</div>
        <div class="child">Child 2</div>
        <div class="child">Child 3</div>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - D - Traversing the DOM - Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let output;

// Get Child Elements
const parent = document.querySelector(".parent");
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

// Specific Children Element
parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

// First Element Child
parent.firstElementChild.innerText = "Child One";
// Last Element Child
parent.lastElementChild.innerText = "Child Three";

// Get Parent Elements from a Child

const child = document.querySelector(".child");

output = child.parentElement;
// Style the Parent by Selecting the Child and Traversing to Parent
child.parentElement.style.border = "1px solid #ccc";
child.parentElement.style.padding = "10px";

// Sibling Elements
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem;
output = secondItem.nextElementSibling;

// Select Next Sibling
secondItem.nextElementSibling.style.color = "green";
// Select Previous Sibling
secondItem.previousElementSibling.style.color = "orange";

console.log(output);
```
</details>

<details>
<summary>View CSS Code - style.css - D - Traversing the DOM - Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-weight: 300;
  margin-bottom: 20px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

.parent div {
  list-style: none;
  margin-bottom: 10px;
}
```
</details>

### [F. Traversing the DOM - Nodes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/06-traversing-the-dom-nodes)

![Traversing the DOM - Nodes - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/06-traversing-the-dom-nodes/06-traversing-the-dom-nodes-site.png)

![Traversing the DOM - Nodes - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/06-traversing-the-dom-nodes/06-traversing-the-dom-nodes-console.png)

This JavaScript exercise focused on traversing the DOM using node properties, allowing for a deeper understanding of the DOM's structure and how nodes can be manipulated.

#### Key JavaScript Concepts and Implementations (`script.js`)

1. **Child Nodes Traversal**
   - Explored `parent.childNodes` to access all child nodes, including text nodes (whitespace, line breaks) and element nodes.
   - Accessed and manipulated specific nodes using indices, such as `parent.childNodes[3].textContent` and `parent.childNodes[5].style.color`.

2. **Understanding Node Properties**
   - Worked with properties like `textContent`, `nodeName`, `innerHTML`, `outerHTML`, and `innerText` to understand different aspects of nodes.
   - Demonstrated the difference between element nodes and text nodes in the child nodes list.

3. **First and Last Child Nodes**
   - Used `parent.firstChild` and `parent.lastChild` to access the first and last child nodes of a parent element.
   - Modified the content of the last child node.

4. **Parent Node Selection**
   - Compared `child.parentNode` and `child.parentElement` to understand their similarities.
   - Styled the parent node to visually demonstrate node traversal.

5. **Sibling Node Navigation**
   - Navigated between sibling nodes using `nextSibling` and `previousSibling`.
   - Highlighted the difference between sibling elements and sibling nodes.

#### Practical Application
This exercise is crucial in understanding how to:
- Navigate and manipulate a more comprehensive range of nodes within the DOM.
- Distinguish between different types of nodes (element, text) and their properties.
- Apply dynamic changes to a webpage's structure, encompassing not just elements but also text nodes and other node types.

#### Understanding Node Types in the DOM
This section provides insight into the complexity of the DOM structure beyond just elements, including text and other node types.

<details>
<summary>View HTML Code - index.html - F - Traversing the DOM - Nodes</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Traversing The DOM</title>
  </head>
  <body>
    <div class="container">
      <h1>Traversing The DOM</h1>
      <div class="parent">
        <!-- Children -->
        <div class="child">Child 1</div>
        <div class="child">Child 2</div>
        <div class="child">Child 3</div>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - F - Traversing the DOM - Nodes</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
let output;

// Working with All Child Nodes
const parent = document.querySelector(".parent");
output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[5].style.color = "red";

// First Child
output = parent.firstChild;
// Last Child
output = parent.lastChild;
output = parent.lastChild.textContent = "Hello";

// Parent Node
const child = document.querySelector(".child");

output = child.parentNode;
output = child.parentElement;
child.parentNode.style.backgroundColor = "#ccc";

// Siblings
const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem;
// Next Sibling
output = secondItem.nextSibling;
// Previous Sibling
output = secondItem.previousSibling;

console.log(output);
```
</details>

<details>
<summary>View CSS Code - style.css - F - Traversing the DOM - Nodes</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-weight: 300;
  margin-bottom: 20px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

.parent div {
  list-style: none;
  margin-bottom: 10px;
}
```
</details>

### [G. Create Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/07-create-elements)

![Create Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/07-create-elements/07-create-elements-site.png)

This JavaScript exercise demonstrates the process of creating and appending new elements to the DOM, a fundamental skill for dynamic web content manipulation.

#### Key JavaScript Concepts and Implementations (`script.js`)

1. **Creating a New Element**
   - Utilized `document.createElement("div")` to create a new `div` element.
   - Set the class, ID, and other attributes of the newly created element.

2. **Adding Text to the Element**
   - Rather than using `innerText`, created a text node with `document.createTextNode("Hello World!")` and appended it to the `div`.
   - This approach is more efficient and modular, allowing for better control over text content.

3. **Appending the Element to the DOM**
   - Demonstrated two methods of appending the new element:
     - Appended to the end of the body using `document.body.appendChild(div)`.
     - Appended to the bottom of an unordered list (`ul`) using `document.querySelector("ul").appendChild(div)`.

<details>
<summary>View HTML Code - index.html - G - Create Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - G - Create Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Create a div Element
const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My Element");

// Not the Best Way to Be Doing Things
// div.innerText = "Hello World!";

const text = document.createTextNode("Hello World!");
div.appendChild(text);

// Append div to the Bottom of the Body
document.body.appendChild(div);

// Append div to the Bottom of the Unordered List
document.querySelector("ul").appendChild(div);
```
</details>

<details>
<summary>View CSS Code - style.css - G - Create Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [H. List Item - innerHTML vs createElement](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/08-list-item-innerHTML-vs-createElement)

![List Item - innerHTML vs createElement - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/08-list-item-innerHTML-vs-createElement/08-list-item-innerHTML-vs-createElement-site.png)

![List Item - innerHTML vs createElement - Console Output Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/08-list-item-innerHTML-vs-createElement/08-list-item-innerHTML-vs-createElement-console.png)

In this JavaScript exercise, two different methods were explored for creating and appending list items to the DOM, each with its own characteristics and use cases.

- **innerHTML** is quick and convenient for static or less dynamic content, where performance is not the key concern.
- **createElement** and **appendChild** are more suitable for dynamic content manipulation, where performance and security are critical.

#### Quick & Dirty Method: Using innerHTML (`createListItem` function)

1. **Approach**
   - This method creates a new `li` element and sets its `innerHTML` directly.
   - The HTML content, including a text node and a button with an icon, is assigned in one go as a template literal.

2. **Pros and Cons**
   - **Pros**: Simple and quick to write, especially for complex HTML structures.
   - **Cons**: Less performant for repetitive tasks, potentially insecure if not properly sanitized (risk of XSS attacks).

3. **Use Case**
   - Best for scenarios where the HTML structure is complex but does not change often.

#### Performant & Clean Method: Using createElement (`createNewItem` function)

1. **Approach**
   - This method builds the `li` element piece by piece using `createElement` and `appendChild`.
   - Each part of the list item (text node, button, icon) is created separately and appended to the parent element.

2. **Pros and Cons**
   - **Pros**: More performant, especially in scenarios with repetitive tasks or dynamic content changes. It's also safer against XSS attacks.
   - **Cons**: More verbose and complex, especially for intricate HTML structures.

3. **Use Case**
   - Ideal for situations where content is dynamically generated or updated frequently.

This exercise also highlights the importance of choosing the right approach based on the specific needs of the application, balancing between ease of development, performance, and security.

<details>
<summary>View HTML Code - index.html - H - List Item - innerHTML vs createElement</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - H - List Item - innerHTML vs createElement</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Quick & Dirty
function createListItem(item) {
  const li = document.createElement("li");
  li.innerHTML = `
${item}
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>
`;
  document.querySelector("ul").appendChild(li);
}

createListItem("Eggs");

// Performant & Clean
function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);

  li.appendChild(button);

  console.log(li.innerHTML);

  document.querySelector("ul").appendChild(li);
}

createNewItem("Cheese");
```
</details>

<details>
<summary>View CSS Code - style.css - H - List Item - innerHTML vs createElement</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [I. Refactor to Multiple Functions](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/09-refactor-to-multiple-functions)

![Refactor to Multiple Functions - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/09-refactor-to-multiple-functions/09-refactor-to-multiple-functions-site.png)

In this exercise, I refactored the shopping list application to create more organized and modular approach by breaking down the item creation process into separate, reusable functions. This approach enhances readability, maintainability, and scalability of the code.

#### Breakdown of Functions in `script.js`

1. **`createNewItem` Function**
   - Creates a new list item (`li`) element.
   - Appends a text node (the item's name) to the `li`.
   - Calls `createButton` to add a delete button to each item.
   - Appends the newly created `li` to the list (`ul`).

2. **`createButton` Function**
   - Creates a new button element.
   - Sets its class to the passed `classes` argument.
   - Calls `createIcon` to add an icon to the button.
   - Returns the fully constructed button.

3. **`createIcon` Function**
   - Creates an `i` element (commonly used for icons).
   - Sets its class to the provided `classes` argument.
   - Returns the icon element.

#### Usage Example
- `createNewItem("Cheese")` and `createNewItem("Sauce")` are used to add new items to the list.

#### Advantages of This Approach

1. **Modularity**: Each function has a clear, singular purpose. This makes the code easier to understand and maintain.
2. **Reusability**: Functions like `createButton` and `createIcon` can be reused in other parts of the application, reducing code duplication.
3. **Scalability**: Adding new features or modifying existing ones becomes easier because changes can be made in small, isolated parts.
4. **Readability**: Each function's name clearly describes its functionality, making the code more readable and understandable.

<details>
<summary>View HTML Code - index.html - I - Refactor to Multiple Functions</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - I - Refactor to Multiple Functions</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");

  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
}

createNewItem("Cheese");
createNewItem("Sauce");
```
</details>

<details>
<summary>View CSS Code - style.css - I - Refactor to Multiple Functions</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [J. Insert Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/10-insert-elements)

![Insert Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/10-insert-elements/10-insert-elements-site.png)

This exercise focuses on different techniques for inserting elements into the Document Object Model (DOM), an essential aspect of interactive web development. The main file, `script.js`, demonstrates four distinct methods for dynamically adding content to a webpage.

#### Key JavaScript Techniques Demonstrated

1. **Using `insertAdjacentElement`**
   - A new `<h1>` element is created and inserted before a specified element using `insertAdjacentElement("beforebegin", element)`.
   - This method is exemplified by adding a heading before the filter section in the HTML.

2. **Applying `insertAdjacentText`**
   - The `insertAdjacentText` method is used to insert plain text adjacent to an existing element.
   - In the exercise, this is shown by adding text before the first list item.

3. **Incorporating `insertAdjacentHTML`**
   - This method allows for inserting HTML formatted text. 
   - The script adds a `<h2>` heading after the 'Clear All' button using `insertAdjacentHTML("afterend", html)`.

4. **Utilizing `insertBefore`**
   - `insertBefore` is used to insert an element before another within a parent element.
   - Demonstrated by adding a new list item before the third item in the list.

Whether it's adding new interactive elements, updating text, or modifying the structure of the page, these techniques are fundamental for creating responsive and engaging web applications. The exercise effectively demonstrates the versatility and power of JavaScript in DOM manipulation.

<details>
<summary>View HTML Code - index.html - J - Insert Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - J - Insert Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");
  h1.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement("beforebegin", h1);
}

insertElement();

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector("li:first-child");
  item.insertAdjacentText("beforebegin", "insertAdjacentText");
}

insertText();

// insertAdjacentHTML example
function insertHTML() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.insertAdjacentHTML("afterend", "<h2>insertAdjacentHTML</h2>");
}

insertHTML();

// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.textContent = "insertBefore";

  const thirdItem = document.querySelector("li:nth-child(3)");
  ul.insertBefore(li, thirdItem);
}

insertBeforeItem();

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
```
</details>

<details>
<summary>View CSS Code - style.css - J - Insert Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [K. Custom Insert After Function Challenge](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/11-custom-insertafter-challenge)

![Custom Insert After Function Challenge - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/11-custom-insertafter-challenge/11-custom-insertafter-challenge-site.png)

This exercise demonstrates the implementation of a custom `insertAfter` function in JavaScript, filling a common need in DOM manipulation not directly provided by standard JavaScript methods.

#### Overview of the Exercise

The exercise involves creating a function named `insertAfter` that allows developers to insert a new DOM element immediately after an existing one. This function is especially useful because, unlike `insertBefore`, JavaScript does not natively include an `insertAfter` method.

#### Key JavaScript Functionality (`script.js`)

1. **Creating the `insertAfter` Function**
   - The function takes two parameters: `newEl` (the new element to insert) and `existingEl` (the existing element after which the new element is to be inserted).
   - It leverages the `insertBefore` method by targeting the next sibling of `existingEl`. If the next sibling exists, `newEl` is inserted before it. Otherwise, `newEl` is added at the end of the parent element.

2. **Implementing the Function**
   - A new `<li>` element is created and its content is set.
   - The function is then called with this new element and the first item of the list (`li:first-child`) as arguments, inserting the new element after the first item in the list.

The `insertAfter` function is a handy tool for situations where elements need to be added in a specific order not natively supported by existing JavaScript methods. This kind of problem-solving and custom function creation is a key skill for efficient web development.

<details>
<summary>View HTML Code - index.html - K - Custom Insert After Function Challenge</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - K - Custom Insert After Function Challenge</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New element to insert
const li = document.createElement("li");
li.textContent = "Insert Me After!";

// Existing element to insert after
const firstItem = document.querySelector("li:first-child");

insertAfter(li, firstItem);
```
</details>

<details>
<summary>View CSS Code - style.css - K - Custom Insert After Function Challenge</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [L. Replacing Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/12-replacing-elements)

![Replacing Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/12-replacing-elements/12-replacing-elements-site.png)

This exercise is designed to teach the intricacies of replacing elements in the DOM, a key concept in dynamic web development. Through various functions in the `script.js` file, the exercise explores different approaches to replace elements in an HTML document.

#### Key JavaScript Implementations (`script.js`)

1. **Replacing the First Item**
   - Selects the first list item using `document.querySelector("li:first-child")`.
   - Creates a new list item and replaces the first item using `replaceWith`.

2. **Replacing the Second Item**
   - Identifies the second list item with `document.querySelector("li:nth-child(2)")`.
   - Uses `outerHTML` to replace the entire HTML of the second list item.

3. **Replacing All List Items**
   - Retrieves all list items into a NodeList using `document.querySelectorAll("li")`.
   - Iterates over each item and replaces their content. The function uses a ternary operator to vary the replacement text based on the index.

4. **Replacing a Child Element in the Header**
   - Selects the header and the `<h1>` element within it.
   - Creates a new `<h2>` element and replaces the `<h1>` element using `replaceChild`.

This exercise provides a hands-on approach to learning how to replace elements in the DOM and enables me to update the UI dynamically in response to user interactions or data changes, covering a range of scenarios from replacing a single element to updating multiple elements simultaneously.

<details>
<summary>View HTML Code - index.html - L - Replacing Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - L - Replacing Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Replace First
function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replaced First!";

  firstItem.replaceWith(li);
}

replaceFirstItem();

// Replace Second
function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<li>Replaced Second!</li>";
}

replaceSecondItem();

// Replace All
function replaceAllItems() {
  const items = document.querySelectorAll("li");

  //   items.forEach((item, index) => {
  //     item.outerHTML = "<li>Replaced All!</li>";
  //   });

  // Using a Ternary to Have Condition for Specific Index
  items.forEach((item, index) =>
    index === 1
      ? (item.innerHTML = "Second Item!")
      : (item.innerHTML = "Replaced All!")
  );
}

replaceAllItems();

// Replace Child from Parent
function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping List";

  header.replaceChild(h2, h1);
}

replaceChildHeading();
```
</details>

<details>
<summary>View CSS Code - style.css - L - Replacing Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [M. Remove Elements](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/13-remove-elements)

![Remove Elements - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/13-remove-elements/13-remove-elements-site.png)

This exercise provides a practical demonstration of how to remove elements from the DOM using JavaScript, a fundamental skill for dynamic web page manipulation. The provided `script.js` file contains several functions, each illustrating a different method of removing elements.

#### Key JavaScript Techniques (`script.js`)

1. **Removing an Item by ID**
   - Targets the 'Clear All' button using its ID (`#clear`) and removes it from the DOM using the `remove()` method.
   - This demonstrates the simplest way to remove an element when its ID is known.

2. **Removing a Child Element**
   - Selects the first list item (`li:first-child`) and its parent (`ul`).
   - Uses `removeChild` method on the parent element to remove the specified child element.
   - This approach is useful when you have a reference to the parent element.

3. **Removing an Item by Specific Index**
   - Retrieves all list items as a NodeList and removes a specific item based on its index.
   - This method involves selecting the parent element (`ul`) and then removing the child (`li`) at the specified index using `removeChild`.

4. **Removing an Item Without Selecting Parent**
   - Similar to the previous method, but instead of using the parent element to remove the child, it directly calls `remove()` on the selected list item.
   - This approach is more straightforward and does not require selecting the parent element.

Whether it's removing items from a list, clearing form inputs, or dynamically adjusting the layout based on user interactions, these techniques are very important. This exercise effectively demonstrates multiple ways to achieve element removal, providing a versatile toolkit for developers to manage the DOM effectively.

<details>
<summary>View HTML Code - index.html - M - Remove Elements</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Shopping List</title>
  </head>
  <body>
    <div class="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopping List</h1>
      </header>
      <form id="item-form">
        <div class="form-control">
          <input
            type="text"
            class="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
          />
        </div>
        <div class="form-control">
          <button type="submit" class="btn">
            <i class="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>

      <div class="filter">
        <input
          type="text"
          class="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" class="items">
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Oreos
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Milk
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>

      <button id="clear" class="btn-clear">Clear All</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - M - Remove Elements</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
// Remove Item Based on ID
function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

removeClearButton();

// Remove Child
function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

removeFirstItem();

// Remove an Item with a Specific Index
function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  //   const li = document.querySelector(`li:nth-child(${itemNumber}`);
  const li = document.querySelectorAll("li")[itemNumber - 1];

  ul.removeChild(li);
}

removeItem(2);

// Another Example Without Parent Selection
function removeItemNew(itemNumber) {
  const li = document.querySelectorAll("li");

  li[itemNumber - 1].remove();
}

removeItemNew(2);
```
</details>

<details>
<summary>View CSS Code - style.css - M - Remove Elements</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  background-color: #f5f5f5;
}

header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-weight: 300;
  margin-left: 10px;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
}

/* Form & Input */
.form-input {
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.form-input-filter {
  margin-top: 20px;
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  outline: none;
}

/* Buttons */
.btn {
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn:hover {
  background-color: #444;
}

.btn-link {
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0;
  cursor: pointer;
}

.btn-clear {
  margin-top: 20px;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-clear:hover {
  background-color: #f1f1f1;
}

.text-red {
  color: red;
}

/* Items */

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.items li {
  display: flex;
  justify-content: space-between;
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px 20px;
  font-weight: 700;
}

@media (max-width: 500px) {
  .items li {
    width: 100%;
  }
}
```
</details>

### [N. Styles & Classes](https://github.com/itsjordanmuller/2023-javascript-sandbox/tree/main/06-document-object-model/14-styles-classes)

![Styles & Classes - Site Image](https://github.com/itsjordanmuller/2023-javascript-sandbox/blob/main/06-document-object-model/14-styles-classes/14-styles-classes-site.png)

This exercise demonstrates how to manipulate styles and classes in the Document Object Model (DOM) using JavaScript. It covers essential techniques for dynamically changing the appearance and behavior of web page elements. The `script.js` file contains a function `run()` that illustrates various ways to add, remove, and toggle classes, as well as change inline styles.

#### Summary of `index.html`

The `index.html` file provides the structure for a web page focused on demonstrating adding and removing styles and classes using JavaScript. It includes a standard HTML5 document structure with a linked CSS stylesheet (`style.css`). The body of the document contains a heading (`<h1>`), a paragraph (`<p>`) with the class "card", an unordered list (`<ul>`) with class "item-list items" consisting of five list items (`<li>`), and a button to trigger the JavaScript function. The script `script.js` is linked at the end of the body to enable interaction.

#### Key JavaScript Concepts (`script.js`)

1. **Working with `className` and `classList`**
   - The exercise explores the use of `className` to get and set the class attribute of an element.
   - It introduces `classList`, a more versatile property that provides methods like `add`, `remove`, `toggle`, and `replace` for class manipulation.
   - These methods allow for adding new classes, removing existing ones, toggling classes on and off, and replacing one class with another.

2. **Changing Inline Styles**
   - Demonstrates how to directly modify the inline styles of elements using JavaScript.
   - In this example, the color of list items is changed dynamically, with a specific color assigned based on the index of the item.

#### Summary of `style.css`

The `style.css` file contains styling rules for the web page. It sets the font family for the body to 'Arial' and a line-height of 1.3 for better readability. The CSS also defines styles for two classes: `.hidden`, which hides elements by setting `display` to none, and `.card`, which styles elements with a light gray background, border, and padding. The `.dark` class alters the background to dark gray and the text color to white, providing a contrasting theme. These styles are integral to the demonstration of class manipulation in the associated JavaScript file.

#### Practical Application

Manipulating styles and classes is a fundamental aspect of creating interactive and dynamic web pages. It allows developers to respond to user interactions by changing the visual aspects of the page, such as highlighting, hiding, or emphasizing certain elements. This exercise provides a practical understanding of how to:
- Dynamically update the styling of elements to reflect changes in the application state or user interaction.
- Use class manipulation methods to add or remove features from elements, making the page more interactive and responsive.

#### Example Usage

In this exercise, when the 'Run' button is clicked, the JavaScript function `run()` is executed. This function can change the appearance of paragraphs and list items on the page, demonstrating real-time DOM manipulation commonly used in web applications. For instance, it can be used to highlight active menu items, show or hide elements based on user actions, or apply theme changes across the website.

<details>
<summary>View HTML Code - index.html - N - Styles & Classes</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Adding & Removing Styles & Classes</title>
  </head>
  <body>
    <h1>Adding & Removing Styles & Classes</h1>

    <p class="card">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
      quasi odio dicta nisi voluptate tempora corporis reprehenderit optio qui
      eos officiis nostrum cupiditate delectus, accusamus adipisci non, amet
      quis provident.
    </p>

    <ul class="item-list items">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>

    <button>Run</button>

    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View JS Code - script.js - N - Styles & Classes</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  // className
  //   console.log(itemList.className);
  //   text.className = "card dark";
  // classList
  //   console.log(itemList.classList);
  //   itemList.classList.forEach((c) => console.log(c));
  //   text.classList.add("dark");
  //   text.classList.remove("card");
  //   text.classList.toggle("hidden");
  //   text.classList.toggle("dark");
  //   text.classList.replace("card", "dark");

  // Change Style
  //   itemList.style.lineHeight = "3";

  items.forEach((item, index) => {
    item.style.color = "red";

    if (index === 2) {
      item.style.color = "blue";
    }
  });
}

document.querySelector("button").onclick = run;
```
</details>

<details>
<summary>View CSS Code - style.css - N - Styles & Classes</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.3;
}

.hidden {
  display: none;
}

.card {
  background: #f4f4f4;
  border: 1px #ccc solid;
  padding: 15px;
}

.dark {
  background: #333;
  color: #fff;
}
```
</details>