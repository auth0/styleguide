import React from 'react';
import { Button } from 'react-bootstrap';
import EmptyState from './';

// Showcase component differents usecases
const examples = [
  {
    component: (
      <EmptyState
        title="Roles"
        description="
          Create and manage Roles (collection of permissions)
          for your applications which can then be added to groups."
        iconCode="291"
      >
        <a href="https://auth0.com/docs/extensions/authorization-extension" target="_blank" rel="noopener noreferrer" className="btn btn-transparent btn-md">
          Read more
        </a>
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
  <a href="https://auth0.com/docs/extensions/authorization-extension" target="_blank" rel="noopener noreferrer" className="btn btn-transparent btn-md">
    Read more
  </a>
  <button className="btn btn-success">
    <i className="icon icon-budicon-473" /> Create your first role
  </button>
</EmptyState>`
    ),
    title: 'Default',
    url: 'default'
  }
];

export default examples;
