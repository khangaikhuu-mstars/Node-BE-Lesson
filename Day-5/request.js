//1. http request ашиглаад dev-api.mstars.mn ээс foods.json дуудаж консоль дээр харуулах
//2. fs модуль ашиглан шинээр файл үүсгэдэг функцыг ашиглан Day-5 гэдэг хавтас дотор
// foods.json файл үүсгээд хадгалах
// 3.
const fs = require("fs");
var https = require("https");

https
  .get("https://dev-api.mstars.mn/api/foods", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const foods = JSON.parse(Buffer.concat(data).toString());
      console.log(foods);

      // rest of the exercises here
      fs.writeFile("foods.json", JSON.stringify(foods), (err) => {
        if (err) {
          throw err;
        } else {
          console.log("Successfully written into file");
        }
      });
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
