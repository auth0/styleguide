import React, { PropTypes } from 'react';
import styles from './index.styl';

const Sidebar = () =>
  <div className="react-styleguide-sidebar">
    <h1 className="sidebar-title">Auth0 React components</h1>
    <ul className="sidebar-items-list">
      <li className="sidebar-item">Alert</li>
      <li className="sidebar-item">Buttons</li>
      <li className="sidebar-item">Try Banner</li>
      <li className="sidebar-item">Jumbotron</li>
      <li className="sidebar-item">Header</li>
      <li className="sidebar-item">Footer</li>
    </ul>
  </div>;

export default Sidebar;
