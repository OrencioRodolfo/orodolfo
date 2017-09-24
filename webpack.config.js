const path = require('path');
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

console.log('====================================');
console.log(process.env.NODE_ENV);
console.log('====================================');

if (process.env.NODE_ENV !== 'production') {
  config.entry = [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    ...config.entry,
  ];
}

module.exports = config;
