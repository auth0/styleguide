import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import { Select } from '../../src';

storiesOf('Select', module)
  .addDecorator(centered)
  .add('with text', () =>
    <Select
      options={[
        { label: 'Zoey Andrews', value: 'Zoey Andrews' },
        { label: 'Jerry Woods', value: 'Jerry Woods' },
        { label: 'Marion Garza', value: 'Marion Garza' }
      ]}
      selected={0}
      handleChange={(e, opt) => action('selected changed')(e.target.value, opt)}
      label="Select user"
    />
  );
