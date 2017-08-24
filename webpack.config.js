const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './server.ts',
        // vendor: './vendor.ts'
    },

    target: 'node',

    resolve: {
        extensions: ['.ts', '.js', '.css', '.scss', '.html']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
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
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('bundle.css'),
        // new HtmlWebpackPlugin({
        //     template: './index.html',
        //     chunks: ['vendor', 'app'],
        //     chunksSortMode: 'manual'
        // })
    ],

    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    }
};