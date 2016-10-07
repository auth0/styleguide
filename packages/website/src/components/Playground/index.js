import React, { PropTypes } from 'react';
import Codemirror from 'react-codemirror';
import styles from './index.styl';

const Playground = ({ children }) =>
  <div className="react-component-playground">
    { children }
    <div className="react-component-playground-code">
      <Codemirror value={
          `
            <Select
              options={[
                'Zoey Andrews',
                'Jerry Woods',
                'Marion Garza'
              ]}
              selected={2}
              handleChange={(e) => { console.log(e.target.value); }}
              label="Select user"
            />
          `
        } />
    </div>
  </div>;

Playground.propTypes = {
  children: PropTypes.node.isRequired
};

export default Playground;
