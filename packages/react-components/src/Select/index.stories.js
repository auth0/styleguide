import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import { Select } from '../../src';

storiesOf('Select', module)
  .addDecorator(centered)
  .add('with text', () => (
    <Select
      options={[
        { text: 'Zoey Andrews', value: 'Zoey Andrews' },
        { text: 'Jerry Woods', value: 'Jerry Woods' },
        { text: 'Marion Garza', value: 'Marion Garza' }
      ]}
      selected={2}
      handleChange={e => action('selected changed')(e.target.value)}
      label="Select user"
    />
  ));
