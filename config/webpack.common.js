'use strict';

const $ = require("jquery");
const webpack = require('webpack');
const helpers = require('./helpers');

// import webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// import postCSS plugins
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');

const isProduction = process.env.NODE_ENV === 'production';

const htmlminifyOptions = {
  collapseWhitespace: true,
  caseSensitive: true,
  html5: true
};

module.exports = {
  entry: './app/scripts/index.jsx',

  // resolve module to js or jsx extensions
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'react-hot!babel?cacheDirectory',
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=[path][name].[ext]?[hash]&context=/app',
      },
      {
        test: /\.s(c|a)ss$/,
        include: helpers.root('app'),
        loader: ExtractTextPlugin.extract(
          'style', 'css?sourceMap!postcss!sass?sourceMap'
        )
      }
    ]
  },

  plugins: [
    // copy root html file and inject the compiled
    // bundles into it
    new HtmlWebpackPlugin({
      /*SI EL INDEX.HTML ESTÁ EN OTRA UBICACIÓN, CAMBIAR ESTA RUTA*/
      template: './app/index.html',
      inject: true,
      cache: !isProduction,
      favicon: './favicon.png',
      minify: isProduction ? htmlminifyOptions : false
    }),
    // extract the SASS files into a target file in the 'css' folder
    new ExtractTextPlugin('styles/[name].[hash].css', {
      allChunks: true
    }),
    // copy static app as they are into the destination folder
    new CopyWebpackPlugin([
      // Copy directory contents to {output}/to/directory/
      { from: 'app/images', to: 'images' },
      { from: 'app/fonts', to: 'fonts' }
    ])
  ],

  // load postcss plugins to be used by the loader
  postcss: function configPostCss() {
    return [
      autoprefixer({ browsers: ['last 4 versions'] }),
      cssnano,
    ];
  },
};
