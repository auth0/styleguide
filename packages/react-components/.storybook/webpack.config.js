const poststylus = require('poststylus');
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const path = require('path');
const webpack = require('webpack')

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = (config, env) => {
  const newConfig = genDefaultConfig(config, env);
  newConfig.entry.preview.push(path.resolve(__dirname, '../src/index.styl'));
  newConfig.module.rules.push({
    test: /\.styl/,
    use: [
		{ loader: 'style-loader' },
		{
			loader: 'css-loader',
			options: {
				sourceMap: DEBUG,
				minimize: !DEBUG
			}
		},
		{
			loader: 'stylus-loader',
			options: {
				'include css': true,
				paths: [path.resolve(__dirname, '../node_modules')]
			}
		}
    ]
  });

  newConfig.module.rules.push({
    test: /\.css/,
	  use: [
		  { loader: 'style-loader' },
		  {
			  loader: 'css-loader',
			  options: {
				  sourceMap: DEBUG,
				  minimize: !DEBUG
			  }
		  },
	  ]
  });

  newConfig.plugins.push(
	  new webpack.LoaderOptionsPlugin({
		  options: {
			  stylus: {
				  use: [poststylus([ 'autoprefixer' ])]
			  }
		  }
	  })
  );

  stylus = {
    use: [poststylus(['autoprefixer'])]
  };

  return newConfig;
};
