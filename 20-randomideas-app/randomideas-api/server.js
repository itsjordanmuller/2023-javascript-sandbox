const express = require("express");
const port = 5000;

const app = express();

// API Index
app.get("/", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.json({ message: "Welcome to the RandomIdeas API!" });
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`Server Listening on Port: ${port}`));
