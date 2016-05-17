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
            test: /\.less$/,
            loader: extractTextPlugin.extract('css!less')
        }]
    },
    plugins: [
        new extractTextPlugin('[name].css')
    ]
};