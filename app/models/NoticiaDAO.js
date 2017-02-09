function NoticiaDAO(conn){
  this._conn = conn;
}

NoticiaDAO.prototype.getNoticias = function(callback){
  this._conn.query('SELECT * FROM tbl_noticias ORDER BY data_noticia DESC', callback);
}

NoticiaDAO.prototype.getNoticia = function(id, callback){
  this._conn.query('SELECT * FROM tbl_noticias WHERE id = ?', id, callback);
}

NoticiaDAO.prototype.salvarNoticia = function(noticia, callback){
  this._conn.query('INSERT INTO tbl_noticias SET ?', noticia, callback);
}

NoticiaDAO.prototype.getNoticiasByLimit = function(limite, callback){
  this._conn.query('SELECT * FROM tbl_noticias ORDER BY data_noticia DESC LIMIT ?', limite, callback);
}

module.exports = function(){
  return NoticiaDAO;
};
