'use strict';
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log('Server running on port: ' + port);
