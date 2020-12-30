// const path = require("path");
// const webpack = require('webpack');

// module.exports = {
//     mode: 'development',
//     // c entry начинается сборка приложения
//     entry: {
//         app: './src/index.js',
//     },
//     // Папка в которой ищется entry
//     //context: path.resolve(__dirname, "/src"),
//     output: {
//         path: path.resolve(__dirname, "dist", "build"),
//         filename: './app.js',
//         // publicPath: "/",
//         // port: 9010
//     },
//     devServer: {
//         publicPath: "/",
//         port: 9010
//     },
//     devtool: 'inline-source-map',
//     module: {
//         rules: [{
//                 test: /\.(js|jsx)$/,
//                 include: path.resolve(__dirname, "static_src"),
//                 loader: 'babel-loader',
//                 exclude: /node_modules/,
//                 options: {
//                     presets: ['@babel/env', '@babel/react'],
//                     plugins: ['@babel/plugin-proposal-class-properties']

//                 }
//             },

//         ],
//     },


// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './index.js'
    },
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};