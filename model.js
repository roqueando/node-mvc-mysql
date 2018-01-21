var mysql = require('mysql-model');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eac_db'
  });
  

  exports.db = db;