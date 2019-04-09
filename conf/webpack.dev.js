const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const {
    resolve
} = require('path');
const baseWebpackConfig = require('./webpack.base.js');
const ApiMocker = require('webpack-api-mocker');

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
        inline: true,
        before(app) {
            ApiMocker(app, resolve(__dirname, './webpack.mocker.js'), {
                // 'GET /api/users/list': 'http://localhost:3000',
                // 'GET /api/userinfo/:id': 'http://localhost:3000',
            })
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "../src/index.html"),
            favicon: resolve(__dirname, "../favicon.ico"),
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
        new webpack.DefinePlugin(require('./dev.env.json')),
    ]
}

module.exports = merge(baseWebpackConfig, Config)