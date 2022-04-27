var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    const data = fs.readFileSync("test.html");
    response.end(data);
  })
  .listen(3000);

console.log("Server is started");
