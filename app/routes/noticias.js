module.exports = function(application){
  application.get('/noticias', function(req, res){
    var conn = application.config.dbConnection();
    var noticiaModel = new application.app.models.NoticiaDAO(conn);

    noticiaModel.getNoticias(function(err, result){
      if(err)
        console.log(err);
      else
        res.render('noticias/noticias', {noticias: result});
    });
  });
};
