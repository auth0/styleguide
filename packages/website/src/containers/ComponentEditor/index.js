import React from 'react';
import { Link } from 'react-router';
import './index.styl';

const ComponentEditor = ({ url }) =>
  <div className="component-editor">
    <div className="component-editor-content">
      <Link to={`${url}`}>
        <i className="close-editor-btn icon-budicon-471" />
      </Link>
      <h2>Component editor</h2>
    </div>
  </div>;

export default ComponentEditor;
