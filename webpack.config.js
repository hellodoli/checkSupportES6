const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    /*entry: './src/index.js',
    output:{
		path: path.resolve(__dirname,'dist'),
        filename: 'index.js'
    },*/
    module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
                    loader: "babel-loader"
                }]
			},
			{
				test: /\.html$/,
				use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
			},
		]
    },
    plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	]
};

module.exports = config;