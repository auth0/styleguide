import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './index.styl';

class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      openSidebar: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar() {
    this.setState({
      openSidebar: !this.state.openSidebar
    });
  }
  render() {
    const { items, version } = this.props;
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <Link to="/">
            <img
              src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg"
              alt="Auth0 Logo"
              className="sidebar-badge hidden-xs"
            />
            <h1 className="sidebar-title">React components</h1>
          </Link>
          <img
            src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg"
            alt="Auth0 Logo"
            className="sidebar-badge visible-xs"
          />
          <button
            onClick={this.toggleSidebar}
            className="sidebar-toggle-nav"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <ul className={`sidebar-items-list ${this.state.openSidebar ? 'open' : ''}`}>
          <li className="sidebar-item" key={'Home'}>
            <Link className="sidebar-item-link" to="/" activeOnlyWhenExact activeClassName="active">
              Getting Started
            </Link>
          </li>
          {items.map(({ url, title }) =>
            <li className="sidebar-item" key={title}>
              <Link className="sidebar-item-link" to={url} activeClassName="active">{title}</Link>
            </li>
          )}
        </ul>
        <div className="sidebar-version">Version {version}</div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  items: PropTypes.array.isRequired,
  version: PropTypes.string.isRequired
};

export default Sidebar;
