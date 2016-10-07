import React, { PropTypes } from 'react';
import styles from './index.styl';
import { Playground, PropertiesTable } from '../../components';

const ComponentPage = ({ component }) => {
  return (
    <section className="react-component-page">
      <h1 className="component-title">{component.title}</h1>
      <p className="component-description">{component.description}</p>
      <Playground>
        <component.component />
      </Playground>
      { component.props ? (
        <PropertiesTable props={component.props} />
      ) : (
        <h4>No component propTypes defined.</h4>
      )}
    </section>
  );
};

ComponentPage.propTypes = {
  component: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    component: PropTypes.any.isRequired,
    props: PropTypes.object
  }).isRequired
};

export default ComponentPage;
