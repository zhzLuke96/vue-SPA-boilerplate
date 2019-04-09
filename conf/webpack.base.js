const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    resolve
} = require('path');

const loaderInclude = [
    resolve(__dirname, '../src'),
    resolve(__dirname, '../test'),
    resolve(__dirname, '../mocker')
]

module.exports = {
    entry: {
        index: resolve(__dirname, "../src/index.js")
    },
    resolve: {
        alias: {
            vue: resolve(__dirname, '../node_modules/vue/dist/vue.esm.js'),
            '~': resolve(__dirname, '../src')
        },
        extensions: ['.es6','.js', '.vue']
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader!postcss-loader',
                        scss: 'vue-style-loader!sass-loader!css-loader!postcss-loader', // <style lang="scss">
                        sass: 'vue-style-loader!sass-loader?indentedSyntax!css-loader!postcss-loader' // <style lang="sass">
                    }
                },
                include:loaderInclude
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                include:loaderInclude
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader'],
                include:loaderInclude
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[hash].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?prefix=font/&limit=5000"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            dry: false
        }),
        new webpack.optimize.RuntimeChunkPlugin({
            name: "manifest"
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new VueLoaderPlugin()
    ]
}