const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/scripts.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        // assetModuleFilename: "index.html",
        path: path.resolve (__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        // {
        //     test: /\.html$/i,
        //     type: 'asset/resource',
        // },
        ]
        },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './src/index.html'
        })
    ]
    }
