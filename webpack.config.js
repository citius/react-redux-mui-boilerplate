var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var build = !!process.env.BUILD;

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../public/client'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            plugins: [
              'babel-plugin-transform-object-rest-spread',
              'babel-plugin-transform-class-properties',
              'babel-plugin-transform-runtime',
            ].map(require.resolve),
            presets: [
              'es2015',
              'react'
            ],
          }
        }
      },
      {
        test: /\.s?(a|c)ss$/,
        use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: [
             {loader: 'css-loader', options: { importLoaders: 1 }},
             {loader: 'sass-loader'}
           ]
        })
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      minify: build ? {collapseWhitespace: true} : false
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
      disable: !build
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.json', '.jsx', '.sass']
  },
};
