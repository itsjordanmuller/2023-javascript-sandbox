library = [
  {
    title: "Title 1",
    author: "Author 1",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Title 2",
    author: "Author 2",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Title 3",
    author: "Author 3",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];
console.log(firstBook);

library = JSON.stringify(library);

console.log(library);
