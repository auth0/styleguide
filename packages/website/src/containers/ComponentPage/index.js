import React, { PropTypes } from 'react';
import { Playground, PropertiesTable } from 'components';
import './index.styl';

const ComponentPage = ({ title, description, props, examples }) => {
  return (
    <section className="react-component-page">
      <h1 className="component-title">{title}</h1>
      <p className="component-description">{description}</p>

      {examples.map((example, index) =>
        <Playground
          key={index}
          component={example.component}
          code={example.code}
          title={example.title}
        />
      )}

      { props ? (
        <PropertiesTable props={props} />
      ) : (
        <h4>No component propTypes defined.</h4>
      )}

    </section>
  );
};

ComponentPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  props: PropTypes.object,
  examples: PropTypes.array.isRequired
};

export default ComponentPage;
