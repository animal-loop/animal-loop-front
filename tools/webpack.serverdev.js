const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, '../source/server/server.jsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../built/server'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {

              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                path.resolve(__dirname, '../public')
              ],
              sourceMap: true,
            }
          }
        ],
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
          name:'[path][name].[hash].[ext]',
          publicPath: '/'
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        use: 'json-loader',
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest-minimal', 'react','stage-2'],
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
      'process.env.BROWSER': false,
      'process.env.type': JSON.stringify("development")
    }),
  ],
};
