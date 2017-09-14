const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './main.ts',
        vendor: './vendor.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.css', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract(['css-loader'])
            },
            {
                test: /\.html$/,
                loaders: ['raw-loader']
            },
            {
                test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani|eot|svg)$/,
                loader: "url-loader",
                options: {
                    name:'assets/[name].[hash:20].[ext]',
                    limit: 10000
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('[name].[hash].css'),
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['common', 'vendor', 'app'],
            chunksSortMode: 'manual'
        }),
        new CopyWebpackPlugin([{
            from: 'assets',
            to: 'assets'
        }]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            chunks: ['app', 'vendor'],
            name: 'common'
        })
    ],

    output: {
        path: __dirname + '/dist',
        filename: '[name].[hash].js'
    }
};