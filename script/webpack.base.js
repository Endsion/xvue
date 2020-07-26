const webpack = require('webpack');
const config = require('../config');

module.exports = {
    devtool: 'inline-source-map',
    mode:'development',
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': config.srcDir,
            'safety-ui': config.safetyUI,
        },
    },
    entry: config.srcDir+"/main.js",
    output: {
        path: config.distDir,
        filename: 'Vue.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.ProgressPlugin(),
    ],
    //大文件告警
    performance: {
        hints: false
    },
};
