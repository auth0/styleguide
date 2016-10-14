import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { App } from 'containers';
import { AppContainer } from 'react-hot-loader';

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

// Highlight.js global configuration
// https://highlightjs.readthedocs.io/en/latest/api.html#configure-options
hljs.configure({ classPrefix: '' }); // eslint-disable-line no-undef

if (module.hot) {
  module.hot.accept('./containers', () => {
    const NextApp = require('./containers').App; // eslint-disable-line global-require

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
