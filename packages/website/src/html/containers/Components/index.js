import React from 'react';
import { Example } from '../../components/';
import componentsIcon from '../../img/components-icon.svg';

const componentsList = [
  'alerts',
  'buttons',
  'try-banner'
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
    darkMode: configFile.darkMode,
    pug: pugFile,
    html: htmlFile
  });
}, []);

const Components = () =>
  <div className="styleguide-section">
    <section className="jumbotron">
      <h2 dangerouslySetInnerHTML={{ __html: componentsIcon }} />
      <h1>Components</h1>
      <p>Set of components used across our website and apps.</p>
    </section>
    <section className="section-content">
      {componentsExamples.map(example => <Example key={example.title} {...example} />)}
    </section>
  </div>;

export default Components;
