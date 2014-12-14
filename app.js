var express = require('express');
var app = express();

app.use(express.static('.'));

app.get('/api', function(req, res) {
  res.send(200);
});

var port = process.argv[process.argv.length-1]; // last argument should be port
var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});
