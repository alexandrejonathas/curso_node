module.exports = function(app){
  app.get('/noticia', function(req, res){

    var conn = app.config.dbConnection();
    var noticiaModel = app.app.models.noticiaModel;

    noticiaModel.getNoticia(conn, function(err, result){
      res.render('noticias/noticia', {noticia: result});
    })

  });
};
