// Toggle a Class on Button Using Callback
// function toggle(e) {
//   console.log("callback ran");
//   e.target.classList.toggle("danger");
// }

// document.querySelector("button").addEventListener("click", toggle);

const posts = [
  { title: "Post 1", body: "This is post one" },
  { title: "Post 2", body: "This is post two" },
];

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 3000);
}

function getPosts() {
  setTimeout(function () {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 2000);
}

createPost({ title: "Post 3", body: "This is post two" });

getPosts();
