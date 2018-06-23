 var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     entry: {
        app: './src/js/index.js',
        test: './src/js/testing.js'
     },
     output: {
         path: path.resolve(__dirname, 'src', 'js', 'build-js'),
         filename: '[name].bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
