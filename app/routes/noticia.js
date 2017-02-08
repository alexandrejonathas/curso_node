module.exports = function(application){
  application.get('/noticia', function(req, res){

    var conn = application.config.dbConnection();
    var noticiaModel = new application.app.models.NoticiaDAO(conn);

    noticiaModel.getNoticia(function(err, result){
      res.render('noticias/noticia', {noticia: result});
    })

  });
};
