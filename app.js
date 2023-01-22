const express = require("express");

const app = express();

const port = 8080;

const todos = [
  "play mario",
  "learn html",
  "learn css",
  "learn js",
  "learn node",
  "learn everything",
];

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const jsonResponseContent = JSON.stringify(todos);
  res.send(jsonResponseContent);
});

app.post("/add", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
