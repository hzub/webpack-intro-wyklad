var extractTextPlugin = require("extract-text-webpack-plugin");
var copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    context: __dirname + "/app",
    entry: "./main",
    output: {
        path: __dirname + "/dist",
        filename: "main.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: extractTextPlugin.extract('css')
        }, {
            test: /\.less$/,
            loader: extractTextPlugin.extract('css!less')
        }, {
            test: /\.(jpg|png)$/,
            loader: 'file?name=[path]/[name].[ext]'
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]'
        }]

        //html?interpolate
    },
    plugins: [
        new extractTextPlugin('[name].css'),
        new copyWebpackPlugin([{
            context: 'images',
            from: '**/*',
            to: 'images'
        }])
    ]
};