const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, '../source/client/client.jsx'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../built/statics'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
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
              sourceMap: true
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
          name: '[path][name].[hash].[ext]',
          publicPath: '/'
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        use: 'json-loader',
      },
      {
        test:  /\.(js|jsx)$/,
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
      'process.env.BROWSER': true,
      'process.env.type': JSON.stringify("development")
    }),
  ],
};
