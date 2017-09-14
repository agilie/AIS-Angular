const merge = require('webpack-merge');
const common = require('./webpack.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        new UglifyJSPlugin({
            compress: {
                drop_console: true
            }
        })
    ]

});
