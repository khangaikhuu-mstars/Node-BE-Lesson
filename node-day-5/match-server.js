var http = require('http');
var queryString = require('querystring');

http.createServer((req, res) => {
  if (req.url.match(/^\/q/)){

    console.log(req.url);

    const query = queryString.parse(req.url.split('='));
    console.log(query);

    res.end();
  }

  res.end();
}).listen(3000);

console.log('server is running on 3000');
