var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var server = new webpackDevServer(webpack(config),{
	hot:true,
	stats:{
		colors:true
	},
	publicPath: "/dist",

})
server.listen(8000);