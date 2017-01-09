var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><body><h1>Site de notícias</h1></body></html>');
}).listen(3000, function(){
  console.log('Servidor rodando em http://localhost:3000');
});
