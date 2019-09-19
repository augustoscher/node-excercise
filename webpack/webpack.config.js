const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/principal.js',
  output: {
    //set output directory and file name
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader', //adiciona CSS a DOM injetando a tag <style>
        'css-loader' //interpreta @import, url()
      ]
    }]
  }
}