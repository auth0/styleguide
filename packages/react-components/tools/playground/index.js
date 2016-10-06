// Write playground here
/* eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import { Select } from '../../src';

const Playground = () => {
  return (
    <div>
      <Select />
    </div>
  );
};

render(<Playground />, document.getElementById('app'));
