import path from 'path';
import webpack from 'webpack';
import poststylus from 'poststylus';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

if (!process.env.NODE_ENV) {
  throw new Error('Define a NODE_ENV env var, it can be development or production.');
}

const DEBUG = process.env.NODE_ENV === 'development';

const config = {
  entry: [
    ...DEBUG ? [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client'
    ] : [],
    path.join(__dirname, '../../src/client.js')
  ],

  output: {
    path: path.join(__dirname, '../../build'),
    filename: 'react-website.js',
    publicPath: ''
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      include: [path.join(__dirname, '../../src')]
    }, {
      test: /\.json$/,
      use: 'json-loader'
    }, {
      test: /\.styl/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [{
          loader: 'css-loader',
          query: {
            sourceMap: DEBUG,
            minimize: !DEBUG
          }
        }, {
          loader: 'stylus-loader',
          query: {
            'include css': true
          }
        }]
      })
    }, {
      test: /\.css/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style',
        loader: {
          loader: 'css-loader',
          query: {
            sourceMap: DEBUG,
            minimize: !DEBUG
          }
        }
      })
    }, {
      test: /\.(pug|jade)/,
      use: 'pug-loader'
    }, {
      test: /\.svg/,
      use: 'raw-loader'
    }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: DEBUG,
      minimize: true,
      options: {
        context: __dirname,
        stylus: {
          use: [
            poststylus(['autoprefixer'])
          ]
        }
      }
    }),
    // Name of the CSS bundle
    // https://github.com/webpack/extract-text-webpack-plugin/blob/webpack-1/README.md
    new ExtractTextPlugin({
      filename: 'react-website.css',
      disable: DEBUG
    }),
    // Define free variables
    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"'
    }),

    ...DEBUG ? [
      new webpack.HotModuleReplacementPlugin()
    ] : [
      // Search for equal or similar files and deduplicate them in the output
      // https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      new webpack.optimize.DedupePlugin(),

      // Minimize all JavaScript output of chunks
      // https://github.com/mishoo/UglifyJS2#compressor-options
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // React doesn't support IE8
          warnings: false
        },
        mangle: {
          screw_ie8: true
        },
        output: {
          comments: false,
          screw_ie8: true
        }
      }),

      // A plugin for a more aggressive chunk merging strategy
      // https://webpack.github.io/docs/list-of-plugins.html#aggressivemergingplugin
      new webpack.optimize.AggressiveMergingPlugin()
    ],
    new webpack.NoErrorsPlugin(),

    //
    new HtmlWebpackPlugin({
      title: 'Auth0 React Styleguide',
      template: './src/views/index.pug',
      inject: 'body'
    })
  ],

  resolve: {
    modules: [path.join(__dirname, '../../src'), 'node_modules']
  },

  cache: DEBUG,

  stats: {
    colors: true,
    timings: true
  },

  devtool: DEBUG ? 'eval-source-map' : false
};

export default config;
