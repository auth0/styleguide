// Write playground here
/* eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import { Select } from '../../src';

const Playground = () => {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div style={{
          marginLeft: '300px',
          padding: '20px'
        }}>
        <Select
          options={['Ramiro', 'Ariel', 'Victor']}
        />
      </div>
    </div>
  );
};

render(<Playground />, document.getElementById('app'));
