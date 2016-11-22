import React from 'react';
import { HashRouter, Match, Miss } from 'react-router';
import { App as HtmlStyleguide } from 'html/containers';
import { App as ReactStyleguide } from 'react/containers';

const App = () => (
  <HashRouter>
    <div>
      <Match pattern="/react" component={ReactStyleguide} />
      <Miss component={HtmlStyleguide} />
    </div>
  </HashRouter>
);

export default App;
