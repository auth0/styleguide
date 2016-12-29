import React, { Component } from 'react';
import hljs from 'highlight.js';
import { ComponentExample, SVG } from 'html/components';
import ComponentsIcon from '../../img/components-icon.svg';
import componentsConfig from './components-config.json';

const componentsExamples = componentsConfig.reduce((acc, component) => {
  /* eslint-disable global-require */
  const pugFile = require(`!raw-loader!auth0-styleguide-components/src/${component.folder}/demo.pug`);
  const htmlFile = require(`auth0-styleguide-components/src/${component.folder}/demo.pug`)();
  /* eslint-enable global-require */

  return acc.concat({
    title: component.title,
    description: component.description,
    pug: pugFile,
    html: htmlFile.split('\n').slice(1).join('\n'), // Remove first empty line
    id: component.folder
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
