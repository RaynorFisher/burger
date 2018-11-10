var mysql = require("mysql");


var connection; 
//I had to add this Heroku garbage that I never heard of? Not sure if this is needed anymore? 
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
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