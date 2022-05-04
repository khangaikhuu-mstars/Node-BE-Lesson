const myPromise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve("Promise is resolved");
  } else {
    reject("Promise is rejected");
  }
});

function printFilms(str, callback) {
  return myPromise;
}

module.exports = printFilms;
