const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zxmra94??",
  database: "employees",
});

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/employees", (req, res) => {
  const emp_no = req.query;
  console.log(emp_no.emp_no);
  connection.execute("set @salary = 0;");
  const [result] = connection.execute(
    `CALL giveSalaryByEmpNo(${emp_no.emp_no}, @salary)`
  );
  console.log(result);
  res.send("done");
});

app.listen(3001, () => {
  console.log("Express application is running on the port " + 3001);
});
