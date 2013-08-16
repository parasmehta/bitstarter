var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
var mesg = fs.readFileSync('index.html', "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
  response.send(mesg);});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
