// SyntaxError: user has already been declared
// const user = "John";

// Immediately Invoked Function Expressions
(function () {
  const user = "John";
  console.log(user);

  const hello = () => console.log("Hello World!");
  hello();
})();

// ReferenceError: hello is not defined at this scope
// hello();

(function (name) {
  console.log("Hello " + name);
})("Jordan");
