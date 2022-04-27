console.log(10 + 10);
console.log("Hello World");
console.log(`Total seconds ${365 * 24 * 60 * 60} in a year`);
console.log(`Total seconds ${365 * 24 * 60 * 60 * 100} in a century`);
var date = new Date();
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMinutes());
console.log(date.getSeconds());

let dateOne = new Date();
let dateTwo = new Date(2022, 12, 25);

console.log(dateOne - dateTwo);
