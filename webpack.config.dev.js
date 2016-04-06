var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  resolve: {
<<<<<<< HEAD
    root: __dirname + '/src'
  },
  entry: [
    'webpack-hot-middleware/client',
    './src/js/index'
=======
    root: __dirname + '/source'
  },
  entry: [
    'webpack-hot-middleware/client',
    './source/index'
>>>>>>> master
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
<<<<<<< HEAD
    devtool: 'source-map',
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          plugins: ['transform-decorators-legacy' ],
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './')]
=======
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'source'),
      query: {
        presets: ['es2015']
      }
    }]
>>>>>>> master
  }
};
