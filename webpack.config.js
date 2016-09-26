const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./index.js']
  },

  output: {
      path: __dirname + "/build",
      filename: "styleguide.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      }
    ]
  }
}
