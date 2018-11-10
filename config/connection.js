var mysql = require("mysql");


var connection; 
 {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
};
//Handle errors
connection.connect(function(err) {
  if (err) {
    console.error("Something goofed" + err.stack);
    return;
  }
  console.log("connected" + connection.threadId);
});
module.exports = connection;