/* eslint-disable no-console */

import React from 'react';
import { Select } from './';

const examples = [
  {
    component: (
      <Select
        options={[
          { label: 'Zoey Andrews', value: 'Zoey Andrews' },
          { label: 'Jerry Woods', value: 'Jerry Woods' },
          { label: 'Marion Garza', value: 'Marion Garza' }
        ]}
        selected={2}
        handleChange={e => {
          console.log(e.target.value);
        }}
        label="Select user"
      />
    ),
    code: `<Select
  options={[
      { label: 'Zoey Andrews', value: 'Zoey Andrews' },
      { label: 'Jerry Woods', value: 'Jerry Woods' },
      { label: 'Marion Garza', value: 'Marion Garza' }
    ]}
  selected={2}
  handleChange={(e) => { console.log(e.target.value); }}
  label="Select user"
/>`,
    center: true,
    title: 'Default',
    showTitle: false,
    url: 'default'
  }
];

export default examples;
