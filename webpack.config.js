var extractTextPlugin = require("extract-text-webpack-plugin");

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
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]'
        }]

        //html?interpolate
    },
    plugins: [
        new extractTextPlugin('[name].css')
    ]
};