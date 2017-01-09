var pg = require('pg');
var conString = "postgres://postgres:postgres@localhost/portal_noticias";

var client = new pg.Client(conString);

module.exports = client;
