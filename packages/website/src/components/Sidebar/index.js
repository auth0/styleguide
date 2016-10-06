import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './index.styl';

const Sidebar = ({ items, version }) =>
  <div className="sidebar">
    <Link to="/">
      <img
        src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg"
        alt="Auth0 Logo"
        className="sidebar-badge"
      />
      <h1 className="sidebar-title">React components</h1>
    </Link>
    <ul className="sidebar-items-list">
      {items.map(({ url, title }) =>
        <li className="sidebar-item" key={title}>
          <Link className="sidebar-item-link" to={url}>{title}</Link>
        </li>
      )}
    </ul>
    <div className="sidebar-version">Version {version}</div>
  </div>;

Sidebar.propTypes = {
  items: PropTypes.array.isRequired,
  version: PropTypes.string.isRequired
};

export default Sidebar;
