
const bye = {
  name: "Javkhlan",
  message: "Bye"
}
var http = require('http');
var queryString = require('querystring');


http.createServer((request, response) => {

  if (request.url === '/hello') {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write('<h1>Hello Javkhlan</h1>');
      response.end()
  }
  else if (request.url.match(/^\/q/)) {
      const value = request.url.split('=');
      response.writeHead(200, { "Content-Type": "text/html" });

      if (value[1] == 'why') {
          response.write('<h1>does not matter</h1>');
      } else if (value[1] == 'hi') {
          response.write('<h1>Bye</h1>');
      } else {
          response.write('<h1>Mori</h1>');
      }
      
      response.end()
  }
  else if (request.url === '/bye') {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(bye));
      response.end()
  } else if (request.url === '/q?a=3&x=5&y=6&z=9') {
      console.log('query param');
      const { a, x, y } = queryString.parse(request.url.slice(3));
      const sum = Number(a) + Number(x) + Number(y);
      response.end(`${sum}`);
  }
  else {
      response.writeHead(404, { "Content-Type": "text/plain" })
      response.write("Not Found");
      response.end();
  }

}).listen(3000);
console.log('Server is starting at 3000');
function respondEcho(req, res) {
  console.log(req.url);
  res.end();
}

function q(req, res) {
  console.log(req.url);

  res.end();
}