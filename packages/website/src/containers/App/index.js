import React from 'react';
import { HashRouter, Match, Miss } from 'react-router';
import { ComponentPage, Splash, NotFound } from 'containers';
import { Sidebar } from 'components';
import * as StyleguideComponents from 'auth0-styleguide-react-components';
import StyleguideComponentsDocs from 'auth0-styleguide-react-components/build/docs.json';
import './index.styl';

const componentsCollection = generateComponentsCollection(StyleguideComponents);

const App = () => (
  <HashRouter>
    <div>
      <Sidebar version="2.0" items={componentsCollection} />
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
    const [title] = doc.description.split(':');

    return {
      title,
      url: toURL(title),
      component: listOfComponents[component],
      doc
    };
  });
}

function toURL(text) {
  return `/${toDashCase(text)}`;
}

function toDashCase(text) {
  return text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
