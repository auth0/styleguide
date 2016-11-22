import React from 'react';
import { Sidebar } from 'auth0-styleguide-react-components';
import sidebarConfig from './sidebar-config.json';

const App = () =>
  <div className="auth0-html-styleguide">
    <Sidebar items={sidebarConfig} />
  </div>;

export default App;
