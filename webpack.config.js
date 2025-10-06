const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin  = require('css-minimizer-webpack-plugin');
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin');
const {name} = require('./package.json');
const CopyPlugin = require('copy-webpack-plugin');

require('dotenv').config({
  quiet: true,
});

/**
 * @type {object}
 */
const config = {
  devtool: false,
  mode: process.env.NODE_ENV || 'production',
  context: path.join(__dirname, 'src'),
  resolve: {
    extensions: [
      '.less',
      '.ts',
      '.js',
      '.json',
    ],
  },
  entry: {
    style: './style.less',
    'javascript/index': './javascript/index.ts'
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
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: 'defaults',
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
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
    new IgnoreEmitPlugin(/\.(map)$/),
    new IgnoreEmitPlugin(/^style\.js$/),
    new CopyPlugin({
      patterns: [
        {
          from: '../README.md',
          to: './',
        },
        {
          from: '../LICENSE',
          to: './',
        },
        {
          from: '../CHANGELOG.md',
          to: './',
        },
      ]
    }),
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

const basename = path.basename(name);

if (process.env.SD_WEB_UI_EXTENSIONS_PREFIX && basename) {
  config.output.path = path.join(process.env.SD_WEB_UI_EXTENSIONS_PREFIX, basename);
}

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
