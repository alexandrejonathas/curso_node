var client = require('../../config/dbConnection')

module.exports = function(app){
  app.get('/noticias', function(req, res){

    var results = [];

    client.connect();
    var query = client.query('SELECT * FROM tbl_noticias');

    query.on('row', (row)=>{
      results.push(row);
    });

    query.on('end', ()=>{
      console.log(results);
      res.render('noticias/noticias', {noticias: results});
      client.end();
    });

  });
};
