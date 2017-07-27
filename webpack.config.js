module.exports = {
    entry: {
        app: './main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader']
            }
        ]
    },

    output: {
        filename: 'bundle.js'
    }
};