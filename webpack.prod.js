const merge = require('webpack-merge');
const common = require('./webpack.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = merge.smart(common, {

    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader'])
            },
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
            },
        ]
    },

    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            env: JSON.stringify('production')
        }),
        new webpack.EnvironmentPlugin("SECRET_KEY")
    ]

});
