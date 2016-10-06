import React from 'react';
import styles from './index.styl';

const Sidebar = ({ items }) =>
  <div className="sidebar">
    <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" alt="Auth0 Logo" className="sidebar-badge"/>
    <h1 className="sidebar-title">React components</h1>
    <ul className="sidebar-items-list">
      { items.map(({ url, title }) =>
        <li className="sidebar-item" key={title}><a className="sidebar-item-link" href={url}>{title}</a></li>)
      }
    </ul>
  </div>;

Sidebar.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default Sidebar;
