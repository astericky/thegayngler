const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIBS = [
  'react', 'react-dom', 'react-router', 'react-redux', 'redux', 'redux-thunk', 'lodash'
]


module.exports = {
    context: `${__dirname}/src`,
    // context: path.join(__dirname, 'src'),

    entry: {
      bundle: './js/index.jsx',
      vendor: VENDOR_LIBS
    },

    output: {
      // path: path.join(__dirname, 'public'),
      path: `${__dirname}/public`,
      filename: '[name].[chunkhash].js',
    },

    devtool: 'inline-source-map',

    devServer: {
      // hot: true,
      contentBase: `${__dirname}/src/`,
      publicPath: '/',
    },

    module: {
      rules: [
        {
          use: ['babel-loader'],
          test: /\.jsx?$/,
          exclude: /node_modules/,
        },
        {
          loader: ExtractTextPlugin.extract({
            loader: 'css-loader'
          }),
          test: /\.css$/,
        },
      ]
    },

    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      new ExtractTextPlugin('style.css'),
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
    ]
}
