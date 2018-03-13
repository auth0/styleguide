import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Button } from '../../src';

storiesOf('Button', module).addDecorator(centered).add('Button styles', () =>
  <div>
    {/* Standard button */}
    <Button>Default</Button> &nbsp;&nbsp;

    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button> &nbsp;&nbsp;

    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Success</Button> &nbsp;&nbsp;

    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info">Info</Button> &nbsp;&nbsp;

    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning">Warning</Button> &nbsp;&nbsp;

    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger">Danger</Button> &nbsp;&nbsp;

    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle="link">Link</Button>
  </div>
);
