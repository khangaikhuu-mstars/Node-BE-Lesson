var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write("<h1>Hello Node!!</h1>");
    response.end();
  })
  .listen(3000);

console.log("server is running at localhost:3000");
