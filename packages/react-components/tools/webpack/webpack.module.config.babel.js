import path from 'path';
import { merge } from 'lodash';
import commonConfig from './webpack.common.config.babel.js';

const DEBUG = process.env.NODE_ENV !== 'production';

const config = merge({}, commonConfig, {
  entry: {
    'react-components': [path.join(__dirname, '../../src')],
    examples: [path.join(__dirname, '../../src/examples')]
  },

  output: {
    filename: '[name].js',
    library: 'Auth0ReactComponents',
    libraryTarget: 'umd'
  },

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },

  devtool: DEBUG ? 'source-map' : null
});

export default config;
