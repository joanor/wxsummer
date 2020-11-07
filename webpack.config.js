const path = require('path')
const distDir = path.resolve(__dirname, './dist')
module.exports = {
  mode: 'production',
  entry: {
    'index': './lib/index.js'
  },
  output: {
    filename: '[name].js',
    path: distDir,
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [{
      test: /\.js$/i,
      use: [{
        loader: 'thread-loader',
      }, {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      }],
      exclude: /node_modules/
    }],
  },
}