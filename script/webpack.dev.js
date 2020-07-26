const webpack = require('webpack');
const config = require('../config');

const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base');

const definePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('development')
    }
});

module.exports = merge(baseWebpackConfig, {
    //watch: true,
    plugins:[
        definePlugin,
    ]
});