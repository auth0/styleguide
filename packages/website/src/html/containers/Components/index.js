import React, { Component } from 'react';
import hljs from 'highlight.js';
import { ComponentExample, SVG } from 'html/components';
import ComponentsIcon from '../../img/components-icon.svg';

const componentsList = [
  'alerts',
  'buttons',
  'forms',
  'try-banner',
  'jumbotron',
  'header',
  'footer',
  'modals',
  'tables',
  'labels',
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

class Components extends Component {
  componentDidMount() {
    hljs.configure({ classPrefix: '' });
    hljs.initHighlighting();
    document.querySelectorAll('pre.hl code').forEach(block => (hljs.highlightBlock(block)));
  }
  render() {
    return (
      <div className="styleguide-section">
        <section className="jumbotron">
          <h2><SVG content={ComponentsIcon} /></h2>
          <h1>Components</h1>
          <p>Set of components used across our website and apps.</p>
        </section>
        <section className="section-content">
          {componentsExamples.map(example => <ComponentExample key={example.title} {...example} />)}
        </section>
      </div>
    );
  }
}

export default Components;
