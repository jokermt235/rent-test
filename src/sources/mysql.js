const mysql = require('mysql');
const config  = require('dotenv').config();
const conn = mysql.createConnection({
  host: config.parsed.MYSQL_HOST,
  user: config.parsed,MYSQL_USER,
  password: config.parsed.MYSQL_PASSWORD,
  database: config.parsed.MYSQL_DB
});

conn.connect(function (err){
    if(err) throw err;
});

module.exports = msqlconn;
