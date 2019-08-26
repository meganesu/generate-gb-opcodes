const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};