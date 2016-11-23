import React from 'react';
import { Link, Match, Miss } from 'react-router';
import { Sidebar } from 'auth0-styleguide-react-components';
import { GettingStarted, Design, Components, Email, Resources } from 'html/containers';
import { NotFound } from 'containers';
import sidebarConfig from './sidebar-config.json';

const App = () =>
  <div className="auth0-html-styleguide">
    <Sidebar
      items={sidebarConfig}
      customLink
      linkComponent={Link}
      linkProps={url => ({ to: `/${url}` })}
    />
    <div className="styleguide-content">
      <Match pattern="/getting-started" exactly component={GettingStarted} />
      <Match pattern="/design" exactly component={Design} />
      <Match pattern="/components" exactly component={Components} />
      <Match pattern="/email-templates" exactly component={Email} />
      <Match pattern="/resources" exactly component={Resources} />
      <Miss component={NotFound} />
    </div>
  </div>;

export default App;
