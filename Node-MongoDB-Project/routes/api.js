const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const mongoose = require("mongoose");

router.get("/users", (req, res) => {
  Users.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      return res.json({
        data: data,
      });
    }
  });
});

router.post("/users", (req, res, next) => {
  const reqBody = req.body;
  console.log(reqBody.name);
  console.log(JSON.stringify(req.body.name));
  //   let newUser = new Users({
  //     _id: new mongoose.Types.ObjectId(),
  //     name: req.body.name,
  //     price: req.body.price,
  //   });
  //   newUser
  //     .save()
  //     .then((data) => {
  //       res.status(201).json({
  //         message: "Handling POST requests to /users",
  //         createdProduct: data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(201).json({
  //         message: "Handling POST requests to /products",
  //         createdProduct: result,
  //       });
  //     });
  res.send("Success");
});

module.exports = router;
