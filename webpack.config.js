module.exports = {
    context: __dirname + "/app",
    entry: {
        main: "./main"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
    	loaders: [{
    		test: /\.js$/,
    		loader: 'babel',
    		exclude: /(node_modules)/,
		    query: {
		    	presets: ['es2015']
		    }
    	}]
    }
};
