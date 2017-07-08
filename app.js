var express = require('express');
var app = express();
const hostname = '192.168.30.51';
app.get('/', function (req, res) {
	console.log("1111");
  res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'}); 
  res.write('Hello World!');
});
app.get('/tijiao', function (req, res) {
	console.log("this");
  res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8','Access-Control-Allow-Origin':'*'});               
});

var server = app.listen(80,hostname, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});