import React from 'react';
import { HashRouter, Match } from 'react-router';
import { App as HtmlStyleguide } from 'html/containers';
import { App as ReactStyleguide } from 'react/containers';

const reactRegex = /^\/react(\/.*)?$/;

const App = () => (
  <HashRouter>
    <div>
      <Match
        pattern=""
        // eslint-disable-next-line arrow-body-style
        render={({ location }) => {
          return reactRegex.test(location.pathname) ? <ReactStyleguide /> : <HtmlStyleguide />;
        }}
      />
    </div>
  </HashRouter>
);

export default App;
