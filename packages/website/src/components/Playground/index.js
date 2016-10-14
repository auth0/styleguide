import React, { PropTypes } from 'react';
import './index.styl';

const Playground = ({ component, code, title }) => (
  <div className="react-component-playground">
    {title}
    {component}
    <pre>
      {code}
    </pre>
  </div>
);

Playground.propTypes = {
  component: PropTypes.any.isRequired,
  code: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Playground;
