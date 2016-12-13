import React from 'react';
import { Example } from 'html/components';
import ComponentsIcon from '../../img/components-icon.svg';

const componentsList = [
  'alerts',
  'buttons',
  'try-banner',
  'jumbotron',
  'header',
  'footer',
  'modals',
  'tables',
  'navs',
  'showcase-tabs',
  'spinner',
  'breadcrumb',
  'cards',
  'code-picker',
  'ui-switch',
  'scope',
  'switchboard',
  'phone-mockup'
];

const componentsExamples = componentsList.reduce((acc, componentName) => {
  /* eslint-disable global-require */
  const pugFile = require(`!raw-loader!auth0-styleguide-components/src/${componentName}/demo.pug`);
  const htmlFile = require(`auth0-styleguide-components/src/${componentName}/demo.pug`)();
  const configFile = require(`auth0-styleguide-components/src/${componentName}/configuration.json`);
  /* eslint-enable global-require */

  return acc.concat({
    title: configFile.title,
    description: configFile.description,
    pug: pugFile,
    html: htmlFile.split('\n').slice(1).join('\n'), // Remove first empty line
    id: componentName
  });
}, []);

const Components = () =>
  <div className="styleguide-section">
    <section className="jumbotron">
      <h2><ComponentsIcon /></h2>
      <h1>Components</h1>
      <p>Set of components used across our website and apps.</p>
    </section>
    <section className="section-content">
      {componentsExamples.map(example => <Example key={example.title} {...example} />)}
    </section>
  </div>;

export default Components;
