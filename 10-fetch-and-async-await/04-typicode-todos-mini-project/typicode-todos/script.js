const apiURL = "https://jsonplaceholder.typicode.com/todos";

const list = document.getElementById("todo-list");

const getTodos = () => {
  fetch(apiURL + "?_limit=5")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((todo) => {
        todoItem = document.createElement("div");
        todoItem.innerText = todo.title;
        todoItem.setAttribute("data-id", todo.id);
        if (todo.completed == false) {
          todoItem.classList.add("done");
        }
        list.appendChild(todoItem);
      });
    });
};

getTodos();
