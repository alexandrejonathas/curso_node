var mysql = require('mysql');

var connMySQL =  function(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Consysti1',
    database: 'portal_noticias'
  });
}

module.exports = function(){
  return connMySQL;
}

/*var pg = require('pg');
var conString = "postgres://postgres:postgres@localhost/portal_noticias";

var client = new pg.Client(conString);

module.exports = client;*/
