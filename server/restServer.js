var FlightRouter = require('./routers/FlightRouter.js')

module.exports.start = function () {
    var express = require('express');
    var fs = require('fs');
    var app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    });

    app.use('/', FlightRouter());

    var server = app.listen(8083, function () {
        var host = 'localhost';
        var port = server.address().port;

        console.log('Server listening at http://%s:%s', host, port);
    });
};

