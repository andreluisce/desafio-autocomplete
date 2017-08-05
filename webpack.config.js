const { resolve } = require('path')
const webpack = require('webpack')
const extractTextPlugin = new (require('extract-text-webpack-plugin'))({ filename: 'app.css' })

module.exports = {
  entry: ['babel-polyfill',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/index.jsx'],
  output: {
    filename: 'app.js',
    path: resolve(`${__dirname}/public`),
    publicPath: '/'

  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: resolve(__dirname, '/node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: ['transform-object-rest-spread',
              'transform-decorators-legacy',
              'transform-class-properties',
              'react-hot-loader/babel']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: 'url-loader?limit=1'
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
    new webpack.HotModuleReplacementPlugin(),
    extractTextPlugin,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      cacheFolder: resolve(`${__dirname}'public'`),
      debug: true,
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    })
  ]
}
