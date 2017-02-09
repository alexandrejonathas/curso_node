module.exports.index = function(application, req, res){
  var conn = application.config.dbConnection();
  var noticiaModel = new application.app.models.NoticiaDAO(conn);

  noticiaModel.getNoticiasByLimit(5, function(err, result){
    res.render('home/index', {noticias: result});
  });

}
