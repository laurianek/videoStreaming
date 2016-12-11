'use strict';

const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: 'frontend/dist',
    filename: 'bundle-[hash].min.js',
    sourceMapFilename: 'bundle-[hash].min.js.map'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require']
      },
      screwIe8: true,
      sourceMap: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ManifestPlugin({
      fileName: './rev.json'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }]
  }
};