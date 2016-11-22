import React from 'react';
import { Match, Miss } from 'react-router';
import { Sidebar } from 'auth0-styleguide-react-components';
import { GettingStarted, Design, Components, Email, Resources } from 'html/containers';
import sidebarConfig from './sidebar-config.json';

const App = () =>
  <div className="auth0-html-styleguide">
    <Sidebar items={sidebarConfig} />
    <div className="styleguide-content">
      <Match pattern="/getting-started" exactly component={GettingStarted} />
      <Match pattern="/design" exactly component={Design} />
      <Match pattern="/components" exactly component={Components} />
      <Match pattern="/email-resources" exactly component={Email} />
      <Match pattern="/resources" exactly component={Resources} />
    </div>
  </div>;

export default App;
