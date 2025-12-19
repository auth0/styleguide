import React from 'react';
import { Switch, Route } from 'react-router';
import { Home, GettingStarted, Design, Components, Stage, Email, Resources } from 'html/containers';
import { Sidebar } from 'html/components';
// import { NotFound } from 'containers';
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

const App = () => (
  <div className="auth0-html-styleguide">
    <Route
      path="/"
      render={({ location }) => {
        if (location.pathname.endsWith('/stage')) return null;

        return <Sidebar />;
      }}
    />
    <div className="styleguide-content">
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/getting-started" exact component={ScrollToTop} />
        <Route path="/getting-started" component={GettingStarted} />
        <Route path="/getting-started/:section" component={ScrollToSection} />

        <Route path="/design" exact component={ScrollToTop} />
        <Route path="/design" component={Design} />
        <Route path="/design/:section" component={ScrollToSection} />

        <Route path="/components" exact component={ScrollToTop} />
        <Route
          path="/components"
          render={({ location }) => {
            // Don't render Components when Routes "/components/:section/stage".
            if (location.pathname.endsWith('/stage')) return null;
            return <Components />;
          }}
        />
        <Route path="/components/:section" exact component={ScrollToSection} />

        <Route path="/email-templates" exact component={ScrollToTop} />
        <Route
          path="/email-templates"
          render={({ location }) => {
            // Don't render Emails when Routes "/components/:section/stage".
            if (location.pathname.endsWith('/stage')) return null;
            return <Email />;
          }}
        />
        <Route path="/email-templates/:section" component={ScrollToSection} />

        <Route path="/resources" exact component={ScrollToTop} />
        <Route path="/resources" component={Resources} />
        <Route path="/resources/:section" component={ScrollToSection} />
      </Switch>
      {/* <Miss component={NotFound} /> */}
    </div>

    <Route path="/components/:section/stage" exact component={Stage} />
    <Route
      path="/email-templates/:section/stage"
      exact
      render={props => <Stage isEmail {...props} />}
    />
  </div>
);

export default App;
