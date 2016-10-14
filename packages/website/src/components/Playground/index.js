import React, { PropTypes } from 'react';
import './index.styl';

const Playground = ({ component, example, name }) => (
  <div className="react-component-playground">
    test
  </div>
);

Playground.propTypes = {
  component: PropTypes.any.isRequired,
  example: PropTypes.string,
  name: PropTypes.string
};

export default Playground;
