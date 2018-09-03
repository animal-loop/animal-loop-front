const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../source/server/server.jsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../built/server'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'isomorphic-style-loader',
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
          name:'[path][name].[ext]',
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest-minimal','react','stage-2'],
          },
        },
        exclude: /(node_modules)/,
      },
    ],
  },
  target: 'node',
  node: {
    fs: "empty"
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BROWSER': false,
      'process.env.type': JSON.stringify("production")
    }),
    new ExtractTextPlugin("[name].css"),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
};
