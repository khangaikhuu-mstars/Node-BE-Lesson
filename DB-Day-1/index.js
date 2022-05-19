const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zxmra94??",
  database: "employees",
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) {
    console.log("Database connected succesfully");
  } else {
    console.log("error");
  }
});

app.get("/employees", (req, res) => {
  const limit = req.query;
  console.log(limit);
  connection.query(
    "select * from employees limit " + limit.limit,
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

app.get("/employees/:id", (req, res) => {
  connection.query(
    "select * from employees where emp_no = ? and first_name = ?",
    [req.params.id, req.params.first_name],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});

app.post("/employees", (req, res) => {
  const employee = req.body;
  console.log(employee);
  const empNo = employee.emp_no;
  const birthDate = employee.birth_date;
  const firstName = employee.first_name;
  const lastName = employee.last_name;
  const gender = employee.gender;
  const hireDate = employee.hire_date;

  connection.query(
    `insert into employees (emp_no, birth_date,
          first_name, last_name, gender, hire_date) values (?, ?, ?, ?, ?, ?)`,
    [empNo, birthDate, firstName, lastName, gender, hireDate],
    (err, rows, fields) => {
      if (!err) {
        res.send("i have created new user");
      } else {
        console.log(err);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("App is started successfully on port " + 3000);
});
