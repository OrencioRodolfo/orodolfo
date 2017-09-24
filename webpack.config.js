const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = './src/client';
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${src}/index.html`,
  filename: 'index.html',
  inject: 'body',
});


module.exports = {
  entry: `${src}/js/index.js`,
  output: {
    path: path.resolve('public/js'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
