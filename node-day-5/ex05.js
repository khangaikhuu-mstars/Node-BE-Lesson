const fs = require("fs");
const http = require("http");
const querystring = require("querystring");

http
  .createServer((request, response) => {
    if (request.url.match(/^\/data/)) {
      console.log(request.url);
      const type = request.url.split("=")[1];
      console.log(type);
      if (type === "png") {
        fs.readFile("debug.png", (error, data) => {
          if (error) {
            throw error;
          } else {
            response.writeHead(200, { "Content-Type": "image/png" });
            response.write(data);
            response.end();
          }
        });
      } else if (type === "html") {
        fs.readFile("content.html", (error, data) => {
          if (error) {
            throw error;
          } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
          }
        });
      } else if (type === "json") {
        fs.readFile("data.json", (error, data) => {
          if (error) {
            throw error;
          } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(data);
            response.end();
          }
        });
      } else {
        response.end("Not Found");
      }
    } else {
      response.end("Not Found");
    }
  })
  .listen(3000);
console.log("Server has started");
