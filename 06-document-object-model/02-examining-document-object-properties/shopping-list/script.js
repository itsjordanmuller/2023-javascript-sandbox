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
