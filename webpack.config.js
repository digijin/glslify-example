module.exports = {
	entry: "./main",
	output: {
		path: __dirname + "/dist"
	},
	module: {
		rules: [
			{
				test: /\.glsl$/,
				loader: "raw-loader!glslify-loader"
			}
		]
	}
};
