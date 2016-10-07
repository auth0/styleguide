import React from 'react';
import { HashRouter, Match, Miss } from 'react-router';
import { ComponentPage, Splash, NotFound } from 'containers';
import { Sidebar } from 'components';
import * as StyleguideComponents from 'auth0-styleguide-react-components';
import StyleguideComponentsDocs from 'auth0-styleguide-react-components/build/docs.json';
import 'auth0-styleguide-react-components/build/react-components.css';
import './index.styl';
import { version } from '../../../package.json';

const componentsCollection = generateComponentsCollection(StyleguideComponents);

const App = () => (
  <HashRouter>
    <div>
      <Sidebar version={version} items={componentsCollection} />
      <main className="styleguide-content">
        <Match
          pattern="/"
          render={() => (
            <div>
              <Match pattern="/" exactly component={Splash} />
              {componentsCollection.map((component, index) =>
                <Match
                  pattern={component.url}
                  render={() => (<ComponentPage component={component} />)}
                  key={index}
                />
              )}
              <Miss component={NotFound} />
            </div>
          )}
        />
      </main>
    </div>
  </HashRouter>
);

export default App;

function generateComponentsCollection(listOfComponents) {
  return Object.keys(listOfComponents).map(component => {
    const doc = StyleguideComponentsDocs[component];
    let [title, description] = doc.description.split(':');
    description = description.slice(1);

    return {
      title,
      description,
      url: toURL(title),
      component: listOfComponents[component],
      props: doc.props
    };
  });
}

function toURL(text) {
  return `/${toDashCase(text)}`;
}

function toDashCase(text) {
  const phase1 = text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
  const phase2 = phase1.replace(' ', '-');
  return phase2;
}
