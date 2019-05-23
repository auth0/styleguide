import React from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { App as HtmlStyleguide } from 'html/containers';
import { App as ReactStyleguide } from 'react/containers';

const App = () => (
  <Router history={createBrowserHistory()}>
    <div>
      {
        // Render ReactStyleguide for routes that starts with '/react',
        // for everything else render HtmlStyleguide.
      }
      <Route
        path="/"
        render={({ location }) => {
          if (location.pathname.startsWith('/react')) return <ReactStyleguide />;
          return <HtmlStyleguide />;
        }}
      />
    </div>
  </Router>
);

export default App;
