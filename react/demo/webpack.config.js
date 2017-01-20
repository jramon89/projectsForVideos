var webpack = require('webpack'),
path = require('path'),
host = 'localhost',
port = 8000;

module.exports = {
	entry:[
		'webpack-dev-server/client?http://'+host+':'+port,
		'webpack/hot/dev-server',
		'./src/app.js'
	],
	output:{
		path: path.join(__dirname, '/dist'),
		filename: 'main.js'
	},
	module: {
		loaders: [{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}