const path = require('path');
const { PassThrough } = require('stream');

module.exports = {
    entry: {
        bundle: './src/index.ts'
    },
    outoput: {
        path: path.join(__dirname, dist),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/
            }
        ]
    }
}