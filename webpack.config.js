const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                loaders: ['awesome-typescript-loader']
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['vendor', 'app'],
            chunksSortMode: 'manual'
        })
    ],

    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    }
};