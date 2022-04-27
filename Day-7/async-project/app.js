const request = require("request");

function printFilms(str) {
  request(
    "https://ghibiapi.herokuapp.com/films",
    function (error, response, body) {
      console.log(str);
    }
  );
}

module.exports = printFilms;
