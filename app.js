const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;
let todos = [
  "play mario",
  "learn html",
  "learn css",
  "learn js",
  "learn node",
  "learn everything",
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  const jsonResponseContent = JSON.stringify(todos);
  res.end(jsonResponseContent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
