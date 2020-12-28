const path = require('path');
const {
    override,
    addWebpackAlias,
} = require('customize-cra');

module.exports = override(
    addWebpackAlias({
        '@view': path.resolve(__dirname, './src/view'),
        '@component': path.resolve(__dirname, './src/component'),
    })
);