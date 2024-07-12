const http = require("http");
const fs = require("fs");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((req, res) => {
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
