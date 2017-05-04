import path from 'path';
import express from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from '../webpack/webpack.browser.config.babel';
import openBrowser from './open-browser';

// eslint-disable-next-line no-console
console.log('Time to go and get a coffee ☕️.');

const app = express();
const port = 9000;
const url = `http://localhost:${port}/`;

const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: config.stats
}));

app.use(hotMiddleware(compiler));

app.use('*', (req, res, next) => {
  // Use as view the index.html file generated in memory by html-webpack-plugin.
  // https://github.com/ampedandwired/html-webpack-plugin/issues/145#issuecomment-170554832
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) return next(err);

    return res
      .set('content-type', 'text/html')
      .send(result)
      .end();
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${url}. But awaiting for webpack to finish the first compilation.`);
});

// Open app on the default browser just after the first compilation.
let firstRun = false;
compiler.plugin('done', () => {
  if (!firstRun) {
    firstRun = true;
    openBrowser(url);
  }
});
