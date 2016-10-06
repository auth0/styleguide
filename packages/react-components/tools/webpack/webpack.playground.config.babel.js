import { merge } from 'lodash';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import commonConfig from './webpack.common.config.babel.js';

const config = merge({}, commonConfig, {
  entry: path.join(__dirname, '../playground'),

  devtool: 'eval-source-map'
});

config.module.loaders
  .filter(x => Array.isArray(x.loaders) && x.loaders[0] === 'babel')
  .forEach(x => (x.include.push(path.join(__dirname, '../'))));

config.plugins.push(
  new HtmlWebpackPlugin({
    title: 'Auth0 React Components',
    template: 'pug!./tools/playground/views/index.pug',
    inject: 'body'
  })
);

export default config;
