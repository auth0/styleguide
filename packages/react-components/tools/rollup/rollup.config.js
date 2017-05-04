/* eslint-disable no-console */

import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify'; // eslint-disable-line import/extensions

const prod = process.env.PRODUCTION;
const mode = prod ? 'production' : 'development';

console.log(`Creating ${mode} bundle...`);

const targets = prod ?
[
  { dest: 'build/react-components.min.js', format: 'umd' }
] :
[
  { dest: 'build/react-components.js', format: 'umd' },
  { dest: 'build/react-components.es.js', format: 'es' }
];

const plugins = [
  nodeResolve(),
  commonjs({
    exclude: ['./node_modules/core-js/library/fn/array/from.js']
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development')
  }),
  babel({
    babelrc: false,
    presets: [
      ['es2015', { modules: false }],
      'stage-0',
      'react'
    ],
    plugins: ['external-helpers']
  }),
  json()
];

if (prod) plugins.push(uglify());

export default {
  entry: 'src/index.js',
  moduleId: '@auth0/styleguide-react-components',
  moduleName: 'auth0StyleguideReactComponents',
  external: ['react', 'react-bootstrap'],
  exports: 'named',
  targets,
  plugins,
  globals: { react: 'React', 'react-bootstrap': 'ReactBootstrap' }
};
