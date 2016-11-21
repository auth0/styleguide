import React from 'react';
import { HashRouter, Match, Miss } from 'react-router';
import { HtmlStyleguide, ReactStyleguide } from 'containers';

const App = () => (
  <HashRouter>
    <div>
      <Match pattern="/react" component={ReactStyleguide} />
      <Miss component={HtmlStyleguide} />
    </div>
  </HashRouter>
);

export default App;
