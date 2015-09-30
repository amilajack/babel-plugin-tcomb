var webpack = require('webpack');

//
// final config
//

module.exports = {

  devtool: 'source-map',

  entry: './playground/index',

  output: {
    path: './playground',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // babel transpiler
      {
        test: /\.jsx?$/, // test for both js and jsx
        loaders: ['babel', 'babel?plugins=./lib&whitelist='],
        exclude: [/node_modules/]
      }
    ]
  }

};