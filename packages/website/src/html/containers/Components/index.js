import React from 'react';
import { Example } from '../../components/';
import componentsIcon from '../../img/components-icon.svg';

const componentsList = [
  'alerts'
];

const componentsExamples = componentsList.reduce((acc, componentName) => {
  return acc.concat({
    title: 'Example title',
    description: 'Example description',
    darkMode: false,
    pug: '.pug-file',
    html: '<html-file>'
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
