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
        }]
    },
    plugins: [
        new extractTextPlugin('[name].css')
    ]
};