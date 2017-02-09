module.exports.noticias = function(application, req, res){
  var conn = application.config.dbConnection();
  var noticiaModel = new application.app.models.NoticiaDAO(conn);

  noticiaModel.getNoticias(function(err, result){
    if(err)
      console.log(err);
    else
      res.render('noticias/noticias', {noticias: result});
  });
}

module.exports.noticia = function(application, req, res){
  var conn = application.config.dbConnection();
  var noticiaModel = new application.app.models.NoticiaDAO(conn);
  var id = req.query.id_noticia;
  noticiaModel.getNoticia(id, function(err, result){
    res.render('noticias/noticia', {noticia: result});
  })
}
