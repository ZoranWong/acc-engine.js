'use strict'
const path = require('path');
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const resolve = dir => path.join(__dirname, '.', dir)

const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd2',
        library: 'acc-engine.js',
        globalObject: 'this'
    },
    devtool: '#source-map',
    module: {
        rules: [{
                test: /\.(js)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            },
            {
                test: /\.worker\.js$/,
                use: {loader: 'worker-loader'}
            }
        ]
    },
    plugins: isProd ?
        [
            new UglifyJsPlugin({
                parallel: true,
                uglifyOptions: {
                    compress: {
                        warnings: false
                    },
                    mangle: true
                },
                sourceMap: true
            })
        ] :
        [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ]
}
