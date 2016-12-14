import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { EmptyState } from '../../src';

storiesOf('EmptyState', module)
  .add('default', () => (
    <EmptyState
      title="Roles"
      description={
        `Create and manage Roles (collection of permissions)
        for your applications which can then be added to groups.`
      }
      iconCode="300"
    />
  ))
  .add('with children', () => (
    <EmptyState
      title="Roles"
      description={
        `Create and manage Roles (collection of permissions)
        for your applications which can then be added to groups.`
      }
      iconCode="291"
    >
      <button href="#" className="btn btn-transparent"> Read more </button>
      <button className="btn btn-success">
        <i className="icon icon-budicon-473" /> Create your first role
      </button>
    </EmptyState>
  ));
