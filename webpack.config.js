var webpack = require('webpack');

module.exports = {
    context: __dirname + "/app",
    entry: "./main",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]

};
