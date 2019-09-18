const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/principal.js',
  output: {
    //set output directory and file name
    filename: 'principal.js',
    path: __dirname + '/public'
  }
}