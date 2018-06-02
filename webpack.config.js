const path = require('path');

module.exports = {
	entry : [ './src/js/viewModule.js' ],
	output : {
		filename : 'bundle.js',
		path : path.resolve(__dirname, 'dist'),
	},
	watch : true,
	devtool : 'inline-source-map',
	devServer : {
		contentBase : './dist'
	},
	module : {
		rules : [ {
			test : /\.es6$/,
			exclude : /node_modules/,
			loader : 'babel-loader',
			query : {
				presets : [ 'react', 'es2015' ]
			}
		}, 
		{
			test : /\.css$/,
			use : [ 'style-loader', 'css-loader' ]
		} ]
	},
	resolve : {
		extensions : [ '.js', '.es6' ]
	}
};
