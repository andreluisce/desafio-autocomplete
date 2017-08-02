const { resolve } = require('path')
const webpack = require('webpack')
const extractTextPlugin = new (require('extract-text-webpack-plugin'))({ filename: 'app.css' })

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    filename: 'app.js',
    path: resolve(`${__dirname}/public`),
    publicPath: '/'

  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.css', '.scss', '.js', '.jsx'],
    alias: {
      modules: resolve(__dirname, '/node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          use: [
            'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'sass-loader?sourceMap'
          ]
        })
      }
    ]
  },
  plugins: [
    extractTextPlugin,
    new webpack.optimize.UglifyJsPlugin({
      cacheFolder: resolve(`${__dirname}'public'`),
      debug: true,
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    })
  ]
}
