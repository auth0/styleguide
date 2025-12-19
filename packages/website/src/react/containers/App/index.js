import React from 'react';
import { Route, Switch } from 'react-router';
import { ComponentPage, Splash } from 'react/containers';
// import { NotFound } from 'containers';
import { Sidebar } from 'react/components';
import * as StyleguideComponents from '@auth0/styleguide-react-components';
import * as StyleguideComponentsExamples from '@auth0/styleguide-react-components/lib/examples';
import StyleguideComponentsDocs from '@auth0/styleguide-react-components/lib/docs.json';
import { version } from '@auth0/styleguide-react-components/package.json';
import './index.styl';

const componentsCollection = generateComponentsCollection(StyleguideComponents);

const App = () => (
  <div className="auth0-react-styleguide">
    <Sidebar components={componentsCollection} />
    <main className="styleguide-content">
      <Switch>
        <Route path="/react" exact render={() => <Splash version={version} />} />
        {componentsCollection.map(component => (
          <Route
            key={component.title}
            path={component.url}
            render={() => <ComponentPage {...component} />}
          />
        ))}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </main>
  </div>
);

export default App;

function generateComponentsCollection(listOfComponents) {
  return Object.keys(listOfComponents)
    .map(component => {
      const doc = StyleguideComponentsDocs[component];
      const examples = StyleguideComponentsExamples[component];
      if (!doc || !examples) return null;
      const [title, descriptionRaw] = doc.description.split(':');
      const description = descriptionRaw.slice(1);

      return {
        title,
        description,
        url: toURL(title),
        component: listOfComponents[component],
        props: doc.props,
        name: component,
        examples,
        reactBootstrap: doc['react-bootstrap']
      };
    })
    .filter(component => !!component);
}

function toURL(text) {
  return `/react/${toDashCase(text)}`;
}

function toDashCase(text) {
  const phase1 = text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
  const phase2 = phase1.replace(' ', '-');
  return phase2;
}
