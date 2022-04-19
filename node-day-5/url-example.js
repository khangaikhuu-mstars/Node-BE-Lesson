const url = require("url");

const addr =
  "https://www.etutorialspoint.com/index.php/nodejs/node-js-filesystem";

var q = url.parse(addr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
