import React from 'react';
import { Match, Miss, Link } from 'react-router';
import { ComponentPage, Splash } from 'react/containers';
import { NotFound } from 'containers';
import { MatchAsync } from 'react/components';
import * as StyleguideComponents from 'auth0-styleguide-react-components';
import * as StyleguideComponentsExamples from 'auth0-styleguide-react-components/lib/examples';
import StyleguideComponentsDocs from 'auth0-styleguide-react-components/lib/docs.json';
import { version } from 'auth0-styleguide-react-components/package.json';
import sidebarConfig from './sidebar-config.json';
import './index.styl';

const componentsCollection = generateComponentsCollection(StyleguideComponents);

const App = () =>
  <div className="auth0-react-styleguide">
    <StyleguideComponents.Sidebar
      // Add components collection dinamically to sidebar configuration
      items={sidebarConfig.map(item => {
        if (item.id === 'react-components') {
          return Object.assign({}, item, {
            url: componentsCollection[0].url,
            children: componentsCollection.map(subitem =>
              // Add text property to children components
              Object.assign({}, subitem, {
                text: subitem.title
              })
            )
          });
        }
        return item;
      })}
      LinkComponent={Link}
      linkProps={url => ({
        to: `/${url}`
      })}
    />
    <main className="styleguide-content">
      <Match pattern="/react" exactly render={() => <Splash version={version} />} />
      {componentsCollection.map((component, index) =>
        <div key={index}>
          <Match
            pattern={component.url}
            render={() => (<ComponentPage {...component} />)}
          />
          <MatchAsync
            pattern={`${component.url}/stage/:example`}
            getComponent={() => import('react/containers/ComponentEditor')}
            componentProps={{ ...component }}
          />
        </div>
      )}
      <Miss component={NotFound} />
    </main>
  </div>;

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
  return `react/${toDashCase(text)}`;
}

function toDashCase(text) {
  const phase1 = text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
  const phase2 = phase1.replace(' ', '-');
  return phase2;
}

