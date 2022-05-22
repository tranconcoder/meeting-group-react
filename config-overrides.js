/* config-overrides.js */
module.exports = function override(config, env) {
	return {
		...config,
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
		},
	};
};
