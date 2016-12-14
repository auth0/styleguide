import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import { Select } from '../../src';

storiesOf('Select', module)
  .addDecorator(centered)
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
