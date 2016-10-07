import React, { PropTypes } from 'react';
import Highlight from 'react-highlight';
import styles from './index.styl';

const Playground = ({ children }) =>
  <div className="react-component-playground">
    { children }
    <div className="react-component-playground-code">
      <Highlight className="javascript">
        {`
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
        `}
      </Highlight>
    </div>
  </div>;

Playground.propTypes = {
  children: PropTypes.node.isRequired
};

export default Playground;
