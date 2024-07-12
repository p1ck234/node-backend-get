const http = require("http");
const fs = require("fs");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;

    if (queryObject.hello !== undefined) {
      if (queryObject.hello) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(`Hello, ${queryObject.hello}`);
      } else {
        res.statusCode = 400;
        res.setHeader("Content-Type", "text/plain");
        res.end("Enter a name");
      }
    } else if (queryObject.users !== undefined) {
      fs.readFile("src/data/users.json", (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end();
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(data);
        }
      });
    } else if (Object.keys(queryObject).length === 0) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello, World!");
    } else {
      res.statusCode = 500;
      res.end();
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
