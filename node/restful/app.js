var express = require('express');
var app = express();
var port = 8080;
var port = process.env.PORT || 8080
app.listen(port);
