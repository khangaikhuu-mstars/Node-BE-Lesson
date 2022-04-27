const events = require("events");
const http = require("http");
const fs = require("fs");
const { log } = require("console");

http
  .createServer((request, response) => {
    if (request.url === "/films") {
    }
  })
  .listen(3000);

log("server started");
