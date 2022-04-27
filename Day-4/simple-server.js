var http = require("http");
var fs = require("fs");
var port = 3000;

/// application/pdf
/// audio/mp3
/// image/jpg
/// video/mp4

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/pdf" });
    // synchronous
    // const pdf = fs.readFileSync("content.pdf");
    // response.end(pdf);

    // asynchronous
    fs.readFile("content.pdf", (error, data) => {
      if (error) {
        throw error;
      } else {
        response.end(data);
      }
    });
  })
  .listen(port);
