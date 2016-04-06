var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  resolve: {
<<<<<<< HEAD
    root: __dirname + '/src'
  },
  entry: [
    './src/index'
=======
    root: __dirname + '/source'
  },
  entry: [
    './source/index'
>>>>>>> master
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
<<<<<<< HEAD
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ]
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
