import React, { PropTypes } from 'react';
import { Playground, PropertiesTable } from 'components';
import './index.styl';

const ComponentPage = ({ title, description, props, examples }) =>
  <section className="react-component-page">
    <div className="component-information">
      <h1 className="component-title">{title}</h1>
      <p className="component-description">{description}</p>
    </div>
    {examples.map((example, index) =>
      <Playground
        key={index}
        component={example.component}
        code={example.code}
        title={example.title}
      />
    )}
    { props && <PropertiesTable props={props} />}
  </section>;

ComponentPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  props: PropTypes.object,
  examples: PropTypes.array.isRequired
};

export default ComponentPage;
