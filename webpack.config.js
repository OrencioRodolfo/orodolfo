const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = './src/client';

const config = {
  entry: [
    `${src}/js/index.js`,
  ],
  output: {
    path: path.resolve('public'),
    filename: 'js/app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      filename: 'index.html',
    }),
  ],
};

if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'source-map';
  config.entry = [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    ...config.entry,
  ];
} else {
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
    ...config.plugins,
  ];
}

module.exports = config;
