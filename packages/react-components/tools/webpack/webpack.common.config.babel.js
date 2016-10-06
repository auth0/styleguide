import path from 'path';
import webpack from 'webpack';
import poststylus from 'poststylus';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const DEBUG = process.env.NODE_ENV !== 'production';

const config = {
  output: {
    path: path.join(__dirname, '../../build'),
    filename: 'index.js',
    publicPath: ''
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [path.join(__dirname, '../../src')]
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.styl/,
      loader: ExtractTextPlugin.extract('style-loader',
        `css-loader?${JSON.stringify({
          sourceMap: DEBUG,
          minimize: !DEBUG
        })}!stylus-loader`)
    }, {
      test: /\.css/,
      loader: ExtractTextPlugin.extract('style-loader',
        `css-loader?${JSON.stringify({
          sourceMap: DEBUG,
          minimize: !DEBUG
        })}`)
    }, {
      test: /\.jade/,
      loader: 'pug'
    }, {
      test: /\.svg/,
      loader: 'raw'
    }]
  },

  plugins: [
    // Name of the CSS bundle
    // https://github.com/webpack/extract-text-webpack-plugin/blob/webpack-1/README.md
    new ExtractTextPlugin('react-components.css'),
    // Define free variables
    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"'
    }),
    // Assign the module and chunk ids by occurrence count
    // Consistent ordering of modules required if using any hashing ([hash] or [chunkhash])
    // https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
    new webpack.optimize.OccurenceOrderPlugin(true),

    ...DEBUG ? [] : [
      // Search for equal or similar files and deduplicate them in the output
      // https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      new webpack.optimize.DedupePlugin(),

      // Minimize all JavaScript output of chunks
      // https://github.com/mishoo/UglifyJS2#compressor-options
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true
        }
      }),

      // A plugin for a more aggressive chunk merging strategy
      // https://webpack.github.io/docs/list-of-plugins.html#aggressivemergingplugin
      new webpack.optimize.AggressiveMergingPlugin()
    ],
    new webpack.NoErrorsPlugin()
  ],

  stylus: {
    use: [
      poststylus(['autoprefixer'])
    ]
  },

  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true
  }
};

export default config;
