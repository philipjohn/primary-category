const BabelMinifyPlugin    = require("babel-minify-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
	{
		mode: process.env.NODE_ENV,
		entry: {
			sidebar: ["./src/js/index.js"],
		},
		output: {
			filename: "[name].js",
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|bower_components)/,
					loader: "babel-loader",
					options: { presets: ["@babel/env"] },
				},
			],
		},
		externals: {
			// Use external version of React
			react: "React",
		},
		optimization: {
			minimizer: [new BabelMinifyPlugin()],
		},
	},
	{
		mode: process.env.NODE_ENV,
		entry: {
			style: ["./src/scss/style.scss"],
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					exclude: /(node_modules|bower_components)/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						{
							loader: "css-loader",
							options: {
								sourceMap: true,
							},
						},
						"sass-loader",
					],
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "[name].css",
			}),
		],
	}
];
