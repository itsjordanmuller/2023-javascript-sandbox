const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

const ideas = [
  {
    id: 1,
    text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
    tag: "Technology",
    username: "TonyStark",
    date: "2022-01-02",
  },
  {
    id: 2,
    text: "Milk cartons that turn a different color the older that your milk is getting",
    tag: "Inventions",
    username: "SteveRogers",
    date: "2022-01-02",
  },
  {
    id: 3,
    text: "ATM location app which lets you know where the closest ATM is and if it is in service",
    tag: "Software",
    username: "BruceBanner",
    date: "2022-01-02",
  },
];

// Get All Ideas
// Replace app.get with router.get for Express Router
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something ent wrong" });
  }
});

// Get Idea with Specific ID
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res.status(404).json({
      success: false,
      error: "404 Not Found - Idea with that ID not found",
    });
  }

  res.json({ success: true, data: idea });
});

// Add an Idea Using POST
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ success: true, data: idea });
  // res.send("Post Success");
});

// Update an Idea Using PUT
router.put("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res.status(404).json({
      success: false,
      error: "404 Not Found - Idea with that ID not found",
    });
  }

  idea.text = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;

  res.json({ success: true, data: idea });
});

// Delete an Idea Using DELETE
router.delete("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res.status(404).json({
      success: false,
      error: "404 Not Found - Idea with that ID not found",
    });
  }

  const index = ideas.indexOf(idea);
  ideas.splice(index, 1);

  res.json({ success: true, data: {} });
});

module.exports = router;
