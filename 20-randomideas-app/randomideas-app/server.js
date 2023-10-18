const path = require("path");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS Middleware
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
    credentials: true,
  })
);

// API Index
app.get("/", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.json({ message: "Welcome to the RandomIdeas API!" });
});

// Ideas Router from /routes/ideas.js
const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`Server Listening on Port: ${port}`));
