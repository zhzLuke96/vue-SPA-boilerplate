const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {
    resolve
} = require('path');
const baseWebpackConfig = require('./webpack.base.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const merge = require('webpack-merge');

const Config = {
    devtool: '#cheap-module-eval-source-map',
    output: {
        path: resolve(__dirname, "../dist"),
        filename: "./js/[name].js",
        chunkFilename: './js/[name].js'
    },
    devServer: {
        open: true,
        contentBase: "../dist",
        historyApiFallback: true,
        compress: true,
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "../src/index.html"),
            CloudCdnLinks: false
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: 'commons',
            filename: '[name].js',
            minChunks: 3,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
    ]
}

module.exports = merge(baseWebpackConfig, Config)