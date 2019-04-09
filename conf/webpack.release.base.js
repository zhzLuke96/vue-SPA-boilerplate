const webpack = require('webpack');
const {
    resolve
} = require('path');
const baseWebpackConfig = require('./webpack.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');

const Config = {
    output: {
        path: resolve(__dirname, "../dist"),
        filename: "./js/[name].bundle.[hash:8].js",
        chunkFilename: './js/[name].bundle.[chunkhash:8].js'
    },
    plugins: [
        new UglifyJsPlugin({
            parallel: 4,
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false,
                },
                compress: {
                    warnings: false
                },
            },
            cache: true,
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css)$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: 'commons',
            filename: '[name].bundle.[chunkhash:8].js',
            minChunks: 3,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].bundle.[chunkhash:8].css",
            chunkFilename: "css/[id].bundle.[chunkhash:8].css"
        }),
    ]
}

module.exports = merge(baseWebpackConfig, Config)