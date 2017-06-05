import React from 'react';
import { HashRouter, Match } from 'react-router';
import { App as HtmlStyleguide } from 'html/containers';
import { App as ReactStyleguide } from 'react/containers';

const App = () =>
  <HashRouter>
    <div>
      {
        // Render ReactStyleguide for routes that starts with '/react',
        // for everything else render HtmlStyleguide.
      }
      <Match
        pattern="/"
        render={({ location }) => {
          if (location.pathname.startsWith('/react')) return <ReactStyleguide />;
          return <HtmlStyleguide />;
        }}
      />
    </div>
  </HashRouter>;

export default App;
