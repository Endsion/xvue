const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const hashedModuleIdPlugin = new webpack.HashedModuleIdsPlugin();
const definePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production'),
    },
});
module.exports = merge(baseWebpackConfig, {
    entry: './src/main.js',
    mode: 'production',
    plugins: [definePlugin,hashedModuleIdPlugin],
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                cache: true,
                parallel: true,
                // terserOptions:{
                //     ecma:8
                // },
                // chunkFilter: chunk => {
                //     // Exclude uglification for the `vendor` chunk
                //     if (chunk.name === 'vendor') {
                //         return false;
                //     }

                //     return true;
                // },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
});
