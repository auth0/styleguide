import React, { PropTypes } from 'react';
import { Playground, PropertiesTable } from 'components';
import './index.styl';

const ComponentPage = ({ title, description, component, props }) => (
  <section className="react-component-page">
    <h1 className="component-title">{title}</h1>
    <p className="component-description">{description}</p>
    <Playground component={component} />
    { props ? (
      <PropertiesTable props={props} />
    ) : (
      <h4>No component propTypes defined.</h4>
    )}
  </section>
);

ComponentPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired,
  props: PropTypes.object
};

export default ComponentPage;
