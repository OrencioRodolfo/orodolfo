const path = require('path');
const src = './src/client/';

module.exports = {
  entry: `${src}/js/index.js`,
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/js'),
  },
};
