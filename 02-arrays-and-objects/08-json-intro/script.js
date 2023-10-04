const post = {
  id: 1,
  title: "Post One",
  body: "This is the body of the post!",
};

// Convert a JavaScript Object to JSON String
const str = JSON.stringify(post);
x = post;

// Parse JSON
const obj = JSON.parse(str);
x = obj;

const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is the body of the post!",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is the body of the post!",
  },
];
x = posts;

const str2 = JSON.stringify(posts);
x = str2;

console.log(x);
