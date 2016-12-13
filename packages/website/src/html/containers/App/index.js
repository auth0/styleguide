import React from 'react';
import { Link, Match, Miss } from 'react-router';
import { Sidebar } from 'auth0-styleguide-react-components';
import { Home, GettingStarted, Design, Components, Stage, Email, Resources } from 'html/containers';
import { NotFound } from 'containers';
import jump from 'jump.js';
import sidebarConfig from './sidebar-config.json';
import './index.styl';

const ScrollToSection = ({ params }) => {
  scrollTo(params.section);

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
    <Match
      pattern="/"
      render={({ location }) => {
        if (location.pathname.includes('stage')) return null;
        return (
          <Sidebar
            items={sidebarConfig}
            LinkComponent={Link}
            linkProps={url => ({
              to: `/${url}`
            })}
          />
        );
      }}
    />
    <div className="styleguide-content">
      <Match pattern="/" exactly component={Home} />

      <Match pattern="/getting-started" exactly component={ScrollToTop} />
      <Match pattern="/getting-started" component={GettingStarted} />
      <Match pattern="/getting-started/:section" component={ScrollToSection} />

      <Match pattern="/design" exactly component={Design} />

      <Match pattern="/components" exactly component={ScrollToTop} />
      <Match pattern="/components" component={Components} />
      <Match pattern="/components/:section" component={ScrollToSection} />

      <Match pattern="/email-templates" exactly component={Email} />

      <Match pattern="/resources" exactly component={ScrollToTop} />
      <Match pattern="/resources" component={Resources} />
      <Match pattern="/resources/:section" component={ScrollToSection} />

      <Miss component={NotFound} />
    </div>

    <Match pattern="/stage/:section" exactly component={Stage} />
  </div>;

export default App;
