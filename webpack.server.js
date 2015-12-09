/**
 * Webpack Server.
 *
 * Taken from Redux's 'Real World' example's _server.js_ file and modified.
 */

'use strict';

var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new (require('express'))();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, 'src', '/index.html'));
});

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
    }
});