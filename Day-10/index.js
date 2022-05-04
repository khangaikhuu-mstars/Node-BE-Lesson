const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  res.send("It is a root path");
});

app.get("/library", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  fs.readFile("library.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      res.send(data);
    }
  });
});

app.listen(3000);
console.log("App is started at 3000");
