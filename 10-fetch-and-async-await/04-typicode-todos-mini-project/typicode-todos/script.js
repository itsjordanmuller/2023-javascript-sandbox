const list = document.getElementById("todo-list");

const apiURL = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiURL + "?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

const addTodoToDOM = (todo) => {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo");
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

const toggleCompleted = (e) => {
  //   console.log(e.target.contains("todo"));
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");

    updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
  }
};

const updateTodo = (id, completed) => {
  // console.log(id, completed);
  fetch(`${apiURL}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // .then((res) => res.json())
  // .then((data) => console.log(data));
};

const deleteTodo = (e) => {
  if (e.target.classList.contains("todo")) {
    // console.log("delete");
    const id = e.target.dataset.id;
    fetch(`${apiURL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodos);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
  list.addEventListener("click", toggleCompleted);
  list.addEventListener("dblclick", deleteTodo);
};

init();
