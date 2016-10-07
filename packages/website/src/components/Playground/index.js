import React, { PropTypes } from 'react';
import styles from './index.styl';

const Playground = ({ children }) =>
  <div className="react-component-playground">
    { children }
  </div>;

Playground.propTypes = {
  children: PropTypes.node.isRequired
};

export default Playground;
