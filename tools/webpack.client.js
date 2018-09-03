const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../source/client/client.jsx'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../built/statics'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
                  loader: 'css-loader',
                  options: {
                      minimize: true,
                      sourceMap: true
                  }
              }, 
              {
                  loader: 'sass-loader',
                  options: {
                      sourceMap: true
                  }
              }
            ],
          publicPath: '../public'
        })
      },
      { 
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader",
        options:{
          name:'[path][name].[ext]',
          publicPath: '/'
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: "file-loader",
        options:{
          limit: 10000,
          name: '[path][name].[ext]',
          publicPath: '/'
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        use: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                targets: {
                  browsers: '> 5%',
                },
              }],
              'react',
              'stage-2'],
          },
        },
      },
    ],
  },
  target: 'web',
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BROWSER': true,
      'process.env.type': JSON.stringify("production")
    }),
    new ExtractTextPlugin("[name].css"),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
};
