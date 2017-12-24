module.exports = {
	entry: './index.ts',
	output: {
		filename: 'bundle.js',
		path: __dirname
	},

	module:{
		loaders:[

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	}
};
