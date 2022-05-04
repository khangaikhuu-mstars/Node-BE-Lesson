const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Hello");
});

app.post("/", (request, response) => {
  console.log(request.body);
  fs.readFile("user.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      let users = JSON.parse(data);
      console.log(typeof users);
      users.push(request.body);
      fs.writeFile("user.json", JSON.stringify(users), (error) => {
        if (error) {
          throw error;
        } else {
          console.log("successfully saved");
          console.log("Got post request from client");
          response.send("Added new user to the users pool");
        }
      });
    }
  });
});

app.get("/users/:userId/books/:bookId", (request, response) => {
  console.log(request.params);
  fs.readFile("user.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      const users = JSON.parse(data);
      const filteredUser = users.filter((e) => {
        if (e.id === Number(request.params.userId)) {
          return e;
        }
      });
      response.send(filteredUser);
    }
  });
});

app.listen(3000);
console.log("express app is started");
