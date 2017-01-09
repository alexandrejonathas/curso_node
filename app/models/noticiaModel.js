module.exports = function(){

  this.getNoticias = function(conn, callback){
    conn.query('SELECT * FROM tbl_noticias', callback);
  }

  this.getNoticia = function(conn, callback){
    conn.query('SELECT * FROM tbl_noticias WHERE id = 2', callback);
  }

  return this;
};
