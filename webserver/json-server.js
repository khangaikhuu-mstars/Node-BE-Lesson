var http = require("http");

// 1. JSON object

const khangai = {
  name: "khangaikhu",
  job: "teacher",
};
var jsonObj = JSON.stringify(khangai);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-Type": "application/json",
};
http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(jsonObj);
  })
  .listen(3000);

console.log("server is running at localhost:3000");
