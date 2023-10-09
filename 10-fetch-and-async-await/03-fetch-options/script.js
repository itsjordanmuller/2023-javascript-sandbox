// POST Request to Create a Post
function createPost({ title, body }) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
      hello: "World",
      token: "abc123",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPost({ title: "My Post", body: "This is my post!" });
