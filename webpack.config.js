const path = require('path')

module.exports = {
<<<<<<< HEAD
    entry: './src/index.tsx',
=======
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts'],
    },
>>>>>>> d391af855f8f145472ac4a3790c75e5d068fc76f
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'dist/'
    }
}