// This is the common Webpack config. The dev and prod Webpack configs both
// inherit config defined here.
const path = require('path');
const resolve = require('./webpack.resolve.config.js');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  resolve,
};
