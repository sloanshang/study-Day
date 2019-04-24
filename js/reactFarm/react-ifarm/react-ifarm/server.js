var express = require('express');
var webpack = require('webpack');
var path = require('path');
var proxy = require('http-proxy-middleware')
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpackConfig = require('./webpack.config');

var app = express();
const port = process.env.PORT || 3000
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use('/api/*', proxy({
  target: 'http://wxaj.shdev.cpchina.cn',
  changeOrigin: true
}))
app.use(express.static(__dirname + '/public'))

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)

