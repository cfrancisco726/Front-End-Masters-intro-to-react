const path = require('path')
// meant for node and node does not understand es6

module.exports = {
	context: __dirname,
	// run always from webpack root dir
	// dirname is node global var

	entry: "./js/ClientApp.jsx",
	// front door to project, everything will be included from here 
	devtool: "cheap-eval-source-map",
	// inline all source maps into bundled code but won't be included in production
	// if you don't have source maps it will shows errors in bundled code and make impossible to read and shows precompiled code
	output: {
		path: path.join(__dirname, 'public'),
		// assured that it will always land on public directory no matter where we land in out project
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},

	stats: {
		// things being reported back to you 
		colors: true, 
		reasons: true, 
		chunks: true
	},

	module: {
		rules: [
			// array of rules that webpack will apply different loaders
			// loaders are tools that webpack will use
			{
				test: /\.jsx?$/,
				// anything ending with .js or .jsx run through babel
				loader: 'babel-loader'
				// name of loader to run through then babel will hand back to webpack 
			}
		]
	}
}