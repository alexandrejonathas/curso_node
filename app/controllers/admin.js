module.exports.formulario_inclusao_noticia = function(application, req, res){
  res.render('admin/form_add_noticia', {errors: {}, noticia:{}});
}

module.exports.noticia_salvar = function(application, req, res){
  var noticia = req.body;

  req.assert('titulo', 'Título é obrigatório!').notEmpty();
  req.assert('resumo', 'Resumo é obrigatório!').notEmpty();
  req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
  req.assert('autor', 'Autor é obrigatório!').notEmpty();
  req.assert('data_noticia', 'Data é obrigatório!').notEmpty().isDate({format:'yyyy-MM-dd'});
  req.assert('noticia', 'Notícia é obrigatório!').notEmpty();

  var errors = req.validationErrors();

  if(errors){
    res.render('admin/form_add_noticia', {errors: errors, noticia: noticia});
    return;
  }

  var conn = application.config.dbConnection();
  var noticiaModel = new application.app.models.NoticiaDAO(conn);

  noticiaModel.salvarNoticia(noticia, function(err, result){
    if(err)
      console.log(err);
    else
      res.redirect('/noticias');
  });
}
