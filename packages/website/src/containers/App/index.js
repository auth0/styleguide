import React from 'react';
import { HashRouter, Match, Miss, Link } from 'react-router';
import { ComponentPage, Splash, NotFound } from '../';
import { Sidebar } from '../../components';
import styles from './index.styl';
import * as StyleguideComponents from 'auth0-styleguide-react-components';

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
  return Object.keys(listOfComponents).map(component => ({
    title: listOfComponents[component].name,
    url: toURL(listOfComponents[component].name),
    component: listOfComponents[component]
  }));
}

function toURL(text) {
  return `/${toDashCase(text)}`;
}

function toDashCase(text) {
  return text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
