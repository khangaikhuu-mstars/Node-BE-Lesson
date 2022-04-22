const os = require("os");
const http = require("http");

console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.totalmem());
console.log(os.cpus());
console.log(os.freemem());

const obj = {
  platform: os.platform(),
  architecture: os.arch(),
  release: os.release(),
  totalMemory: os.totalmem(),
  cpus: os.cpus(),
  freeMemory: os.freemem(),
};

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(obj));
    console.log(
      `Your Operating System: ${os.platform()} ${os.arch()} ${os.freemem()} of your RAM is free`
    );
    response.end();
  })
  .listen(3000);

console.log("Server started");
