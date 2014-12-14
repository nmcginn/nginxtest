var express = require('express');
var app = express();

app.use(express.static('.'));

app.get('/api', function(req, res) {
  res.send(200);
});

var server = app.listen(2370, function() {
  console.log('Listening on port %d', server.address().port);
});
