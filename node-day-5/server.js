var http = require("http");
const EventEmitter = require("events");
const chatEmitter = new EventEmitter();

http
  .createServer((request, response) => {
    const url = request.url;
    console.log(url);
    response.end();
  })
  .listen(3000);

function respondChat(req, res) {
  const { message } = req.url;
  chatEmitter.emit("message", console.log);
  res.end();
}
