import React from 'react';
import { Match, Miss } from 'react-router';
import { Home, GettingStarted, Design, Components, Stage, Email, Resources } from 'html/containers';
import { Sidebar } from 'html/components';
import { NotFound } from 'containers';
import jump from 'jump.js';
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

  jump.default(`#${element}`, { duration: 500 });

  return true;
}

const App = () =>
  <div className="auth0-html-styleguide">
    <Match
      pattern="/"
      render={({ location }) => {
        if (location.pathname.endsWith('/stage')) return null;

        return <Sidebar />;
      }}
    />
    <div className="styleguide-content">
      <Match pattern="/" exactly component={Home} />

      <Match pattern="/getting-started" exactly component={ScrollToTop} />
      <Match pattern="/getting-started" component={GettingStarted} />
      <Match pattern="/getting-started/:section" component={ScrollToSection} />

      <Match pattern="/design" exactly component={ScrollToTop} />
      <Match pattern="/design" component={Design} />
      <Match pattern="/design/:section" component={ScrollToSection} />

      <Match pattern="/components" exactly component={ScrollToTop} />
      <Match
        pattern="/components"
        render={({ location }) => {
          // Don't render Components when matchs "/components/:section/stage".
          if (location.pathname.endsWith('/stage')) return null;
          return <Components />;
        }}
      />
      <Match pattern="/components/:section" exactly component={ScrollToSection} />

      <Match pattern="/email-templates" exactly component={ScrollToTop} />
      <Match
        pattern="/email-templates"
        render={({ location }) => {
          // Don't render Emails when matchs "/components/:section/stage".
          if (location.pathname.endsWith('/stage')) return null;
          return <Email />;
        }}
      />
      <Match pattern="/email-templates/:section" component={ScrollToSection} />

      <Match pattern="/resources" component={ScrollToTop} />
      <Match pattern="/resources" component={Resources} />
      <Match pattern="/resources/:section" component={ScrollToSection} />

      <Miss component={NotFound} />
    </div>

    <Match pattern="/components/:section/stage" exactly component={Stage} />
    <Match
      pattern="/email-templates/:section/stage" exactly
      render={props => <Stage isEmail {...props} />}
    />
  </div>;

export default App;
