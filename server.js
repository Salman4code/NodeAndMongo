var express = require('express');
var mongoose=require('./config');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.use(require('./controller'));
var crypto = require('crypto');




port = process.env.PORT || 8081;

app.listen(port, function() {
  console.log("Sever Started %d", port);
// mongoose();
})
