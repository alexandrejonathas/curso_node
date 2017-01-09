module.exports = function(app){
  app.get('/noticias', function(req, res){
    var conn = app.config.dbConnection();
    var noticiaModel = app.app.models.noticiaModel;

    noticiaModel.getNoticias(conn, function(err, result){
      if(err)
        console.log(err);
      else
        res.render('noticias/noticias', {noticias: result});
    });
  });
};
