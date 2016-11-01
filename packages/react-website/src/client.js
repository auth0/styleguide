import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { App } from 'containers';

const rootEl = document.getElementById('app');

if (process.env.NODE_ENV === 'production') {
  render(<App />, rootEl);
} else {
  const { AppContainer } = require('react-hot-loader');

  render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
  );

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
}
