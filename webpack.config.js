module.exports = {
	entry: './index.ts',
	output: {
		filename: 'bundle.js',
		path: __dirname
	},

	module:{
		loaders:[

			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-node'
			}
		]
	}
};
