'use strict';
var path = require('path');
var express = require('express');

var app = express();

app.post("/upload", function (req, res) {
    // This function handles the upload of individual file chunks.
    console.log("file chunk uploaded");
    res.end('success');
});

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});
