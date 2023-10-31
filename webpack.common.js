const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
	entry: {
		popup: path.resolve('src/popup/index.tsx'),
		options: path.resolve('./src/options/options.tsx'),
		background: path.resolve('./src/background/background.ts'),
		contentScript: path.resolve('./src/contentScript/index.tsx'),
		newTab: path.resolve('./src/tabs/index.tsx'),
	},
	module: {
		rules: [
			{
				use: "ts-loader",
				test: /\.tsx$/,
				exclude: /node_modules/
			},
			{
				use: ["style-loader", "css-loader", {
					loader: "postcss-loader",
					options: {
						postcssOptions: {
							ident: "postcss",
							plugins: [tailwindcss, autoprefixer]
						}
					}
				}],
				test: /\.css$/i,
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		]
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve('src/static'),
					to: path.resolve('dist'),
				},
			],
		}),
		...getHtmlPlugins([
			'popup',
			'options',
			'newTab'
		]),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'dist'),
		clean: true
	},
	optimization: {
		splitChunks: {
			chunks(chunk) {
				return chunk.name !== 'contentScript';
			}
		},
		// splitChunks: {
		// 	chunks: "all"
		// }
	},
	devServer: {
		/** "port"
		 * port of dev server
		 */
		port: "9500",
		/** "static"
		 * This property tells Webpack what static file it should serve
		 */
		static: ["./static"],
		/** "open"
		 * opens the browser after server is successfully started
		 */
		open: true,
		/** "hot"
		 * enabling and disabling HMR. takes "true", "false" and "only".
		 * "only" is used if enable Hot Module Replacement without page
		 * refresh as a fallback in case of build failures
		 */
		hot: true ,
		/** "liveReload"
		 * disable live reload on the browser. "hot" must be set to false for this to work
		 */
		liveReload: true
	},
}

function getHtmlPlugins(chunks) {
	return chunks.map(chunk => new HtmlPlugin({
		title: 'React Extension',
		filename: `${chunk}.html`,
		chunks: [chunk]
	}))
}