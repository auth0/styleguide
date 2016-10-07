import React from 'react';
import Select from './';

// Showcase component differents usecases
const examples = [
  <Select
    options={[
      'Zoey Andrews',
      'Jerry Woods',
      'Marion Garza'
    ]}
    selected={2}
    handleChange={(e) => { console.log(e.target.value); }}
    label="Select user"
  />,
  <Select
    options={[
      'Blue',
      'Red',
      'Green'
    ]}
  />
];

export default examples;
