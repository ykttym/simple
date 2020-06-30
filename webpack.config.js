const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  // plugins: [
  //   new CopyPlugin({
  //     patterns: [
  //       { from: 'public/index.html' },
  //     ],
  //   }),
  // ],
};