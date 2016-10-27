import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Select } from '../../src';

storiesOf('Select', module)
  .add('with text', () => (
    <Select
      options={[
        'Zoey Andrews',
        'Jerry Woods',
        'Marion Garza'
      ]}
      selected={2}
      handleChange={e => action('selected changed')(e.target.value)}
      label="Select user"
    />
  ));
