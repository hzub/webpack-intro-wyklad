var webpack = require("webpack");
var path = require("path");
module.exports = {
	context: __dirname,
	entry: "./app/app.js",
	module: {

		// Lista loaderów
		loaders: [
			{ test: /\.json$/,   loader: "json-loader" },
			{ test: /\.coffee$/, loader: "coffee-loader" },
			{ test: /\.css$/,    loader: "css-loader" },
			{ test: /\.less$/,   loader: "css-loader!less-loader" },
			{ test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
			{ test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
			{ test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
			{ test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
			{ test: /\.eot$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.svg$/,    loader: "file-loader?prefix=font/" },
		],

		// Lista preloaderów
		preLoaders: [
			{
				test: /\.js$/,
				include: pathToRegExp(path.join(__dirname, "app")),
				loader: "jshint-loader"
			}
		]
	},

	// Lista pluginów
	plugins: [

		// Przykład: plugin do kopiowania plików
		new CopyWebpackPlugin([{
			'from': 'source/index.html',
			'to': 'destination/index.html'
		}]),

		// Przykład: plugin do uploadu na S3
		new S3Plugin({
			s3Options: {
				accessKeyId: '123',
				secretAccessKey: 'xyz',
				region: 'eu'
			}
		})
	],

	// Konfiguracja wyjścia
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: '/',
		filename: "main.js",
	},
};