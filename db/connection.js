const mysql = require("mysql2");
// const inquirer = require('inquirer');
// const cTable = require('console.table');

// require('dotenv').config()

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "123",
  database: "employees"
});

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log('connected as if ' + connection.threadId);
//   afterConnect();
// });

// afterConnect = () => {
//   console.log('***********************************');
//   console.log('***');
//   console.log('*           EMPLOYEE MANAGER           *');
//   console.log('***');
//   console.log('***********************************');
//   promptUser();
// };

module.exports = connection;
