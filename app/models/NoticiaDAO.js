function NoticiaDAO(conn){
  this._conn = conn;
}

NoticiaDAO.prototype.getNoticias = function(callback){
  this._conn.query('SELECT * FROM tbl_noticias', callback);
}

NoticiaDAO.prototype.getNoticia = function(callback){
  this._conn.query('SELECT * FROM tbl_noticias WHERE id = 2', callback);
}

NoticiaDAO.prototype.salvarNoticia = function(noticia, callback){
    this._conn.query('INSERT INTO tbl_noticias SET ?', noticia, callback);
}

module.exports = function(){
  return NoticiaDAO;
};
