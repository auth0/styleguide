import React, { Component } from 'react';
import hljs from 'highlight.js';
import { upperFirst, camelCase } from 'lodash';
import { ComponentExample } from 'html/components';
import * as ComponentsFiles from './components';
import componentsConfig from './components-config.json';

const componentsExamples = componentsConfig.reduce(
  (acc, component) =>
    acc.concat({
      title: component.title,
      description: component.description,
      pug: ComponentsFiles[`${upperFirst(camelCase(component.title))}Pug`],
      html: ComponentsFiles[`${upperFirst(camelCase(component.title))}Html`],
      id: component.folder
    }),
  []
);

class Components extends Component {
  componentDidMount() {
    hljs.configure({ classPrefix: '' });
    hljs.initHighlighting();
    document.querySelectorAll('pre.hl code').forEach(block => hljs.highlightBlock(block));
  }
  render() {
    return (
      <div className="styleguide-section">
        <section className="jumbotron">
          <h2>
            <img
              src="https://cdn.auth0.com/website/styleguide/components-icon.svg"
              alt="Components"
            />
          </h2>
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
