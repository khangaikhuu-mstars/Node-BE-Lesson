const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/404", (req, res) => {
  res.render("404", { message: "oopsie!" });
});

app.post(
  "/register",
  body("email").isEmail(),
  body("phone").isLength({ min: 6, max: 8 }),
  (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return res.json("My registration");
    } else {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);
app.listen(3000);
