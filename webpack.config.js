const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = './src/client';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    `${src}/js/index.js`,
  ],
  output: {
    path: path.resolve('public/js'),
    filename: 'app.js',
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
      inject: 'body',
    }),
  ],
};
