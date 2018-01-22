const path = require('path')
// meant for node and node does not understand es6 modules

module.exports = {
	context: __dirname,
	// run always from webpack root dir
	// dirname is node global var that refers to root directory

	entry: "./js/ClientApp.jsx",
	// front door to project, everything will be included from here
	devtool: "cheap-eval-source-map",
	// inline all source maps into bundled code but won't be included in production
	// if you don't have source maps it will shows errors in bundled code and make impossible to read and shows precompiled code
	output: {
		path: path.join(__dirname, 'public'),
		// node module
		// assured that it will always land on public directory no matter where we land in out project
		filename: 'bundle.js'
	},
	devServer: {
		publicPath: '/public/',
		// lets webpack know where you anticipate your bundle being searched from
		historyApiFallback: true
		// tells dev server if you don't recognize something send to client
		// with out this you will get 404 for search
		// allows browser router to work
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},

	stats: {
		// things being reported back to you when building
		colors: true,
		reasons: true,
		chunks: true
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			// array of rules that webpack will apply different loaders
			// loaders are tools that webpack will use ie babel
			{
				test: /\.jsx?$/,
				// anything ending with .js or .jsx run through babel
				loader: 'babel-loader'
				// name of loader to run through then babel will hand back to webpack
			}
		]
	}
}
