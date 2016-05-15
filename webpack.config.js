module.exports = {
    context: __dirname + "/app",
    entry: {
        main: "./main"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    }
};
