import React, { PropTypes } from 'react';
import $ from 'jquery';

// Convert string to spinal tap case
// http://codereview.stackexchange.com/questions/109899/convert-string-to-spinal-case
const toSpinalTapCase = str =>
  str
    .replace(/(?!^)([A-Z])/g, ' $1')
    .replace(/[_\s]+(?=[a-zA-Z])/g, '-')
    .toLowerCase();

const renderMenu = (items, customLink, linkComponent, linkProps) =>
  <ul className="menu-list">
    { items.map(item =>
      <li className="menu-item" key={item.text}>
        { customLink ? (
          React.createElement(
            linkComponent,
            linkProps(item.url || toSpinalTapCase(item.text), item.text),
            <span className="menu-item-link">
              {item.iconCode && <span className={`menu-item-icon icon-budicon-${item.iconCode}`} />}
              <span className="text">{item.text}</span>
            </span>
          )
        ) : (
          <a className="menu-item-link" href={item.url || toSpinalTapCase(item.text)}>
            {item.iconCode && <span className={`menu-item-icon icon-budicon-${item.iconCode}`} />}
            <span className="text">{item.text}</span>
          </a>
        ) }
        <ul className="menu-sublist">
          { item.children && item.children.map(subitem =>
            <li className="menu-subitem" key={subitem.text}>
              <a
                className="menu-subitem-link"
                href={subitem.url || toSpinalTapCase(subitem.text)}
              >
                {subitem.text}
              </a>
            </li>
          )}
        </ul>
      </li>
    )}
  </ul>;



/**
 * Sidebar: Styleguide sidebar with drop drown sections.
 */

class Sidebar extends React.Component {
  constructor() {
    super();

    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    $(this.sidebarMenu).slideToggle();
  }
  render() {
    const { header, items, customLink, linkComponent, linkProps } = this.props;
    return (
      <div className="a0r-sidebar">
        <header className="a0r-sidebar-header">
          { header ||
            <h1 className="default-title">
              <a className="default-link" href="/">
                <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" alt="Auth0 badge" width="30" height="" />
              </a>
            </h1>
          }
          <button className="menu-toggle" onClick={this.toggleMenu}>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </header>
        <nav className="a0r-sidebar-menu" ref={elem => (this.sidebarMenu = elem)}>
          {renderMenu(items, customLink, linkComponent, linkProps)}
        </nav>
        <footer className="a0r-sidebar-footer" />
      </div>
    );
  }
}

Sidebar.defaultProps = {
  customLink: false
};

Sidebar.propTypes = {
  /**
   * Element to replace default header content.
   */
  header: PropTypes.element,
  /**
   * List of objects representing the sidebar items
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string,
    iconCode: PropTypes.number,
    open: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string
    })).isRequired
  })).isRequired,
  /**
   * Replace items anchor for custom React element (useful when using SPA router).
   */
  customLink: PropTypes.bool,
  /**
   * React component for the Link (use any router you want).
   */
  linkComponent: PropTypes.func,
  /**
   * Function with item text and url as parameters that should return link props object.
   */
  linkProps: PropTypes.func
};

export default Sidebar;
