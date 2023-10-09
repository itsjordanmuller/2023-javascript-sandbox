const list = document.getElementById("todo-list");

const apiURL = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiURL + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

const addTodoToDOM = (todo) => {
  const todoItem = document.createElement("div");
  todoItem.innerText = todo.title;
  todoItem.setAttribute("data-id", todo.id);

  if (todo.completed == true) {
    todoItem.classList.add("done");
  }

  list.appendChild(todoItem);
};

const createTodo = (e) => {
  e.preventDefault();
  // console.log(e.target.firstElementChild.value);

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
};

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
};

init();
