var mysql = require("mysql");


var connection; 
 {
  connection = mysql.createConnection({
    port: 3306,
    host: "lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "xtflwpv1fakm6jq8",
    password: "acx3zn9sbi4cnjjq",
    database: "	q7q1jmjoorfo08fn"
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