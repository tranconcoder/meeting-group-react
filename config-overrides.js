/* config-overrides.js */
module.exports = function override(config, env) {
	return config;

	// return {
	// 	...config,
	// 	resolve: {
	// 		...config.resolve,
	// 		extensions: [
	// 			...config.resolve.extensions,
	// 			'.js',
	// 			'.jsx',
	// 			'.ts',
	// 			'.tsx',
	// 			'.d.ts',
	// 		],
	// 	},
	// 	experiments: {
	// 		...config.experiments,
	// 		topLevelAwait: true,
	// 	},
	// };
};
