module.exports.start = function () {
    var express = require('express');
    var serveStatic = require('serve-static');
    var app = express();

    app.use(express.static(__dirname + "/web"));

    var server = app.listen(8090, function () {
        var host = 'localhost';
        var port = server.address().port;

        console.log('Client server listening at http://%s:%s', host, port);
    });
};

