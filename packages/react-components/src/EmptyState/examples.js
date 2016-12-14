/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import EmptyState from './';

// Showcase component differents usecases
const examples = [
  {
    component: (
      <EmptyState
        title="Roles"
        description=" Create and manage Roles (collection of permissions) for your applications which can then be added to groups."
        iconCode="291"
      >
        <a href="#" className="btn btn-transparent"> Read more </a>
        <button className="btn btn-success">
          <i className="icon icon-budicon-473" /> Create your first role
        </button>
      </EmptyState>
    ),
    code: (
`
<EmptyState
  title="Roles"
  description="
    Create and manage Roles (collection of permissions)
    for your applications which can then be added to groups."
  iconCode="291"
>
  <a href="#" className="btn btn-transparent"> Read more </a>
  <button className="btn btn-success">
    <i className="icon icon-budicon-473" /> Create your first role
  </button>
</EmptyState>`
    ),
    title: 'Default',
    showTitle: false,
    url: 'default'
  }
];

export default examples;
