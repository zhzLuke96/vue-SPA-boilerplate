const releaseWebpackConfig = require('./webpack.release.base.js');
const merge = require('webpack-merge');
const CloudCDNLinks = require('./cdn.conf.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    resolve
} = require('path');
const webpack = require('webpack');

const Config = {
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'vuex': 'Vuex'
    },
    plugins: [
        new HtmlWebpackPlugin({
            CloudCdnLinks: CloudCDNLinks,
            template: resolve(__dirname, "../src/index.html"),
            favicon: resolve(__dirname, "../favicon.ico"),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            chunksSortMode: 'dependency'
        }),
        new webpack.DefinePlugin(require('./prod.env.json')),
    ]
}

module.exports = merge(releaseWebpackConfig, Config)