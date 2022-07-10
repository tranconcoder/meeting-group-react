module.exports = function override(config, env) {
	config.module.rules.push({
		test: /\.scss$/,
		use: [
			{
				loader: 'sass-loader',
				options: {
					additionalData: `@import 'src/styles/package/allPackage.scss';`,
				},
			},
		],
	});

	return config;
};
