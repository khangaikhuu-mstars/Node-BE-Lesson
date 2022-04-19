const url = require("url");

const addr =
  "https://www.etutorialspoint.com/index.php/nodejs/node-js-filesystem";

var q = url.parse(addr, true);

const myUrl = new URL("https://example.org/abc?123");

console.log(myUrl.search);
myUrl.search = "abc=xyz";

console.log(myUrl.href);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
