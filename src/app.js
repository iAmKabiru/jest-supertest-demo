const express = require("express");
const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

let users = [{ id: 1, name: "Kabiru" }];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST create user
app.post("/users", (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ error: "User not found" });
  user.name = req.body.name;
  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.status(204).send();
});

module.exports = app;
