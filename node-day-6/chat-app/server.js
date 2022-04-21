const fs = require('fs');
const http = require('http');
const EventEmitter = require('events');

const chatEmitter = new EventEmitter();


http.createServer((req, res) => {

  if (req.url === '/') {
    res.end('<h1>Chat app</h1');
  }

  if (req.url === '/sse') return respondSSE(req,res);
  if (req.url.match(/^\/static/)) return respondStatic(req, res);
  if (req.url.match(/^\/chat/)) return respondChat(req, res);

}).listen(3000);


function respondChat(req, res) {
  const message = req.url.split("?message=")[1];
  console.log(message);
  chatEmitter.emit("message", message);
  res.end();
}

function respondStatic(req, res){
  const filename = `${__dirname}/public/${req.url.split("static")[1]}`;
  fs.createReadStream(filename)
    .on("error", () => res.end('Not Found'))
    .pipe(res);
}

function respondSSE(req, res) {
  res.writeHead(200, 
    {"Content-Type": "text/event-stream",
      Connection: "keep-alive",
    })

  const onMessage = (msg) => res.write(`data: ${msg}\n\n`);
  chatEmitter.on("message", onMessage);

  res.on("close", () => {
    chatEmitter.off("message", onMessage);
  })

}



