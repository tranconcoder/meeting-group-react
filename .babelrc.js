const path = require('path');

const rootImportOpts = {
	root: path.join(__dirname, '/src'),
	rootPathPrefix: '~/',
	rootPathSuffix: 'src',
};

module.exports = {
	plugins: [['babel-plugin-root-import', rootImportOpts]],
};
