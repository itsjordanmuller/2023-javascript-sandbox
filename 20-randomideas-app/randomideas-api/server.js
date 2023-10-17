const express = require("express");
const port = 5000;

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Index
app.get("/", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.json({ message: "Welcome to the RandomIdeas API!" });
});

// Ideas Router from /routes/ideas.js
const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`Server Listening on Port: ${port}`));
