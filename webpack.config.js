const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin  = require('css-minimizer-webpack-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');

/**
 * @type {object}
 */
const config = {
    devtool: false,
    mode: process.env.NODE_ENV || 'production',
    context: path.join(__dirname, 'src'),
    entry: {
        style: './style.less'
    },
    output: {
        path: path.join(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images/',
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts/',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new IgnoreEmitPlugin(/\.(map|js)$/),
    ],
    performance: {
        hints: false,
    },
    stats: {
        children: false,
        chunks: false,
        colors: true,
        hash: false,
        entrypoints: true,
        modules: false,
        performance: false,
    },
    devServer: {
        port: 12598,
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        usedExports: true,
        removeAvailableModules: true,
    },
};

if (config.mode === 'production') {
    config.devtool = false;

    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
    ]);
}

module.exports = config;
