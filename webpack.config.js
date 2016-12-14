const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const autoprefixer = require('autoprefixer')
// const { resolve } = require('path')
// console.log(`PATH: ${__dirname}/src`);
module.exports = {
    context: `${__dirname}/src`,

    entry: {
      index: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.jsx',
      ]
    },

    output: {
      filename: '[name].bundle.js',
      path: `${__dirname}/public`,
      publicPath: '/',
    },

    devtool: 'inline-source-map',

    devServer: {
      hot: true,
      contentBase: `${__dirname}/src`,
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loaders: ['babel-loader',],
          include: [
            `${__dirname}/src`,
            `${__dirname}/node_modules/preact-compat`,
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader?modules&importLoaders=1',
            'postcss-loader',
          ],
        },
      ]
    },

    plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: "commons",
      //   filename: "commons.js",
      //   minChunks: 2,
      // }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html'
      }),
    ]
}
