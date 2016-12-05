import React from 'react';
import { Link, Match, Miss } from 'react-router';
import { Sidebar } from 'auth0-styleguide-react-components';
import { Home, GettingStarted, Design, Components, Email, Resources } from 'html/containers';
import { NotFound } from 'containers';
import jump from 'jump.js';
import sidebarConfig from './sidebar-config.json';
import './index.styl';

const ScrollToElement = ({ params }) => {
  scrollTo(params.component);

  return null;
};

const ScrollToTop = () => {
  scrollTo('app');

  return null;
};

function scrollTo(element) {
  if (!document) return false;
  if (element && !document.getElementById(element)) return false;

  jump(`#${element}`, { duration: 500 });

  return true;
}

const App = () =>
  <div className="auth0-html-styleguide">
    <Sidebar
      items={sidebarConfig}
      LinkComponent={Link}
      linkProps={url => ({
        to: `/${url}`,
        activeClassName: 'active'
      })}
    />
    <div className="styleguide-content">
      <Match pattern="/" exactly component={Home} />
      <Match pattern="/getting-started" exactly component={GettingStarted} />
      <Match pattern="/design" exactly component={Design} />
      <Match pattern="/components" exactly component={ScrollToTop} />
      <Match pattern="/components" component={Components} />
      <Match pattern="/components/:component" component={ScrollToElement} />
      <Match pattern="/email-templates" exactly component={Email} />
      <Match pattern="/resources" exactly component={Resources} />
      <Miss component={NotFound} />
    </div>
  </div>;

export default App;
