
const bye = {
    name: "Javkhlan",
    message: "Bye"
}
var http = require('http');
var queryString = require('querystring');


http.createServer((request, response) => {

    console.log(request.url);

    if (request.url === '/hello') {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write('<h1>Hello Javkhlan</h1>');
        response.end()
    }
    else if (request.url === '/bye') {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(bye));
        response.end()
    } else if (request.url === '/q?a=3&x=5&y=6&z=9') {
        console.log('query param');
        const {a, x, y} = queryString.parse(request.url.slice(3));
        const sum = Number(a)+Number(x)+Number(y);
        response.end(`${sum}`);
    }
    else if (request.url.match(/^\/echo/) ) {
        return respondEcho(request, response);
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