import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Button, EmptyState } from '../../src';

storiesOf('EmptyState', module)
  .add('default', () => (
    <EmptyState
      title="Roles"
      description={`Create and manage Roles (collection of permissions)
        for your applications which can then be added to groups.`}
      iconCode="300"
    />
  ))
  .add('with children', () => (
    <EmptyState
      title="Roles"
      description={`Create and manage Roles (collection of permissions)
        for your applications which can then be added to groups.`}
      iconCode="291"
    >
      <Button href="#" bsStyle="transparent">
        Read more
      </Button>
      <Button bsStyle="success">
        <i className="icon icon-budicon-473" /> Create your first role
      </Button>
    </EmptyState>
  ));
